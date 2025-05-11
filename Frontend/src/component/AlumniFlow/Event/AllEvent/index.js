import React, { useEffect, useState } from "react";
import "../../../../styles/AlumniFlow/Event/AllEvent.css";
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
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

      <div className="alalevt-container">
        <h2 className="alalevt-heading">All Event</h2>
        <div className="alalevt-box">
          <div className="alalevt-topbar">
            <div className="alalevt-search">
              <span className="alalevt-search-icon-left"><FaSearch /></span>
              <input type="text" placeholder="Search all event" />
            </div>

            <div className="alalevt-show-entries">
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

          <table className="alalevt-table">
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
                  <td><span className="alalevt-category">{eve.eventCategory}</span></td>
                  <td><span className="alalevt-type">{eventTypes[eve.eventType] || eve.eventType}</span></td>
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
                      className="alalevt-reservation"
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

          <div className="alalevt-footer">
            <span>Showing 1 to {event.length} of {event.length} entries</span>
            <div className="alalevt-pagination">
              <button>{"«"}</button>
              <button className="alalevt-active">1</button>
              <button>{"»"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEvent;
