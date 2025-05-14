import React, { useEffect, useState } from "react";
import '../../../../styles/AdminFlow/AdminEvent/AdminAllEvent.css';
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { FaSearch } from "react-icons/fa";
import { getAllEvent, getEventType } from "../../../services/almEvent";
import { useNavigate } from "react-router-dom";

const AllEvent = () => {
  const [entries, setEntries] = useState(10);
  const [event, setEvent] = useState([]);
  const [eventTypes, setEventTypes] = useState({});
  const navigate = useNavigate();

  const fetchEventTypes = async () => {
    try {
      const response = await getEventType();
      const typeMap = {};
      response.data.forEach((type) => {
        typeMap[type.id] = type.category;
      });
      setEventTypes(typeMap);
    } catch (error) {
      console.log(error, "error fetching event types");
    }
  };

  const getEvent = async () => {
    try {
      const response = await getAllEvent();
      setEvent(response.data);
    } catch (error) {
      console.log(error, "error fetching event data");
    }
  };

  useEffect(() => {
    fetchEventTypes();
    getEvent();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="adalevt-container">
        <h2 className="adalevt-heading">All Event</h2>
        <div className="adalevt-box">
          <div className="adalevt-topbar">
            <div className="adalevt-search">
              <span className="adalevt-search-icon-left"><FaSearch /></span>
              <input type="text" placeholder="Search all event" />
            </div>

            <div className="adalevt-show-entries">
              <label htmlFor="entries-select">Show</label>
              <select
                id="entries-select"
                value={entries}
                onChange={(e) => setEntries(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <label>entries</label>
            </div>
          </div>

          <table className="adalevt-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Event Title</th>
                <th>Category</th>
                <th>Type</th>
                <th>Date & Time</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {event.map((eve, index) => (
                <tr key={eve.eventId}>
                  <td>{index + 1}</td>
                  <td>{eve.eventTitle}</td>
                  <td><span className="adalevt-category">{eve.eventCategory}</span></td>
                  <td><span className="adalevt-type">{eventTypes[eve.eventType] || eve.eventType}</span></td>
                  <td>
                    {new Date(eve.eventDate).toLocaleString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td>{eve.location}</td>
                  <td>
                    <a
                      className="adalevt-reservation"
                      onClick={() =>
                        navigate("/eventdetails", { state: { eventData: eve } })
                      }
                    >
                      Reservation
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="adalevt-footer">
            <span>Showing 1 to {event.length} of {event.length} entries</span>
            <div className="adalevt-pagination">
              <button>{"«"}</button>
              <button className="adalevt-active">1</button>
              <button>{"»"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEvent;
