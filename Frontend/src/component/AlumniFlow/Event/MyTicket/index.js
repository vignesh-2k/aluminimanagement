import React, { useEffect, useState } from "react";
import "../../../../styles/AlumniFlow/Event/MyTicket.css";
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import { FaSearch, FaDownload, FaArrowLeft } from "react-icons/fa";
import { getAllEvent, getEventType } from "../../../services/almEvent";

const MyTicket = () => {
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const [eventTypes, setEventTypes] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const [eventResponse, typeResponse] = await Promise.all([
          getAllEvent(),
          getEventType(),
        ]);

        const typeMap = {};
        typeResponse.data.forEach((type) => {
          typeMap[type.id] = type.category;
        });

        const purchased = JSON.parse(localStorage.getItem("purchasedTickets")) || [];
        const purchasedEvents = eventResponse.data.filter((event) =>
          purchased.includes(event.eventId)
        );

        setEventTypes(typeMap);
        setEvents(purchasedEvents);
      } catch (error) {
        console.log("Error fetching event/ticket data", error);
      }
    };

    fetchEventData();
  }, []);

  const handleOpenPopup = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedEvent(null);
  };

  const filteredEvents = events.filter((event) =>
    event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatImgUrl = (path) => {
    if (!path) return "/default-event.jpg";
    const formattedPath = path.replace(/\\/g, "/");
    return `${process.env.REACT_APP_BASE_URL}/${formattedPath}`;
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="almt-container">
        <h1 className="almt-title">My Ticket</h1>
        <div className="almt-card">
          <div className="almt-header">
            <div className="almt-search-box">
              <i className="almt-search-icon"><FaSearch /></i>
              <input
                type="text"
                placeholder="Search event"
                className="almt-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="almt-show-entries">
              <label>Show</label>
              <select
                className="almt-select"
                value={entries}
                onChange={(e) => setEntries(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>entries</span>
            </div>
          </div>

          <table className="almt-table">
            <thead className="almt-table-head">
              <tr>
                <th className="almt-th-left">Event Title</th>
                <th>Ticket Id</th>
                <th>Type</th>
                <th>Date &amp; Time</th>
                <th>Location</th>
                <th className="almt-th-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.slice(0, entries).map((event, index) => (
                <tr key={event.eventId}>
                  <td>{event.eventTitle}</td>
                  <td>{`6000${index + 1}`}</td>
                  <td>
                    <span className="almt-type-badge">
                      {eventTypes[event.eventType] || event.eventType}
                    </span>
                  </td>
                  <td>
                    {new Date(event.eventDate).toLocaleString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td>{event.location}</td>
                  <td>
                    <button
                      onClick={() => handleOpenPopup(event)}
                      className="almt-download-link"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="almt-footer">
            <span>
              Showing 1 to {Math.min(entries, filteredEvents.length)} of{" "}
              {filteredEvents.length} entries
            </span>
            <div className="almt-pagination">
              <button>{"«"}</button>
              <button className="almt-active">1</button>
              <button>{"»"}</button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && selectedEvent && (
        <div className="almt-overlay">
          <div className="almt-popup">
            <div className="almt-popup-header">
              <button className="almt-back" onClick={handleClosePopup}>
                <FaArrowLeft /> Back To Dashboard
              </button>
              <button className="almt-download">
                Download <FaDownload />
              </button>
            </div>

            <div className="almt-popup-content">
              <div className="almt-left">
                <img
                  src={formatImgUrl(selectedEvent.eventImg)}
                  alt="Event"
                  className="almt-image"
                />
              </div>

              <div className="almt-middle">
                <h2 className="almt-title-popup">{selectedEvent.eventTitle}</h2>
                <p className="almt-ticket-id">Ticket#6000{selectedEvent.eventId}</p>
                <p className="almt-reserved">
                  Reserved by Administrator Doe, {new Date().toLocaleDateString("en-GB")}
                </p>
                <p className="almt-location-label">Location</p>
                <p className="almt-location">{selectedEvent.location}</p>
              </div>

              <div className="almt-right">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket#6000${selectedEvent.eventId}`}
                  alt="QR Code"
                  className="almt-qr"
                />
                <p className="almt-scan-text">Scan to verify</p>
                <img
                  src={`https://barcode.tec-it.com/barcode.ashx?data=6000${selectedEvent.eventId}&code=Code128&translate-esc=false`}
                  alt="Barcode"
                  className="almt-barcode"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyTicket;
