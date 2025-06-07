
import React, { useEffect, useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import EditEvent from '../EditEvent';
import "../../../../styles/AlumniFlow/Event/MyEvent.css";
import { useNavigate } from 'react-router-dom';
import { deleteEvent, getAllEvent, getEventType } from '../../../services/almEvent';

const MyEvent = () => {
  const navigate = useNavigate();
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [entries, setEntries] = useState(10);
  const [eventList, setEventList] = useState([]);
  const [eventTypes, setEventTypes] = useState({});
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEditClick = (event) => {
    setSelectedEvent(event);
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
    setSelectedEvent(null);
    fetchEvents(); 
  };

  const handleDeleteClick = (eventId) => {
    setSelectedEventId(eventId);
    setShowDeletePopup(true);
  };

  const handleCloseDeletePopup = () => {
    setShowDeletePopup(false);
    setSelectedEventId(null);
  };

  const handleConfirmDelete = async () => {
    try {
      if (selectedEventId) {
        await deleteEvent(selectedEventId);
        setEventList(eventList.filter(event => event.eventId !== selectedEventId));
        setShowDeletePopup(false);
        setSelectedEventId(null);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await getAllEvent();
      setEventList(response.data);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  const fetchEventTypes = async () => {
    try {
      const response = await getEventType();
      const typeMap = {};
      response.data.forEach((type) => {
        typeMap[type.id] = type.category;
      });
      setEventTypes(typeMap);
    } catch (error) {
      console.log("Error fetching event types:", error);
    }
  };

  useEffect(() => {
    fetchEventTypes();
    fetchEvents();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="alme-container">
        <h2 className="alme-title">My Event</h2>

        <div className="alme-table-wrapper">
          <div className="alme-top-bar">
            <label className="alme-search-container">
              <FaSearch className="alme-search-icon" />
              <input type="text" placeholder="Search event" className="alme-search-input" />
            </label>
            <div className="alme-entries-container">
              <label className="alme-entries-label">
                Show
                <select className="alme-entries-select" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>

          <div className="alme-table-responsive">
            <table className="alme-event-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Event Title</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Date & Time</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {eventList.slice(0, entries).map((event, index) => (
                  <tr key={event.eventId}>
                    <td>{index + 1}</td>
                    <td>{event.eventTitle}</td>
                    <td><span className="alme-category-badge">{event.eventCategory}</span></td>
                    <td><span className="alme-type-badge">{eventTypes[event.eventType] || event.eventType}</span></td>
                    <td>{new Date(event.eventDate).toLocaleString("en-GB", {
                      day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
                    })}</td>
                    <td>{event.location}</td>
                    <td><span className="alme-status-badge">Pending</span></td>
                    <td className="alme-action-icons">
                      <button className="alme-icon-btn" onClick={() => handleEditClick(event)}><FaEdit /></button>
                      <button className="alme-icon-btn" onClick={() => handleDeleteClick(event.eventId)}><FaTrash /></button>
                      <button className="alme-icon-btn" onClick={() => navigate("/myeventdetails", { state: { eventData: event } })}><FaEye /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="alme-table-footer">
            <span>Showing 1 to {Math.min(entries, eventList.length)} of {eventList.length} entries</span>
            <div className="alme-pagination">
              <button className="alme-page-btn">&laquo;</button>
              <button className="alme-page-btn alme-active">1</button>
              <button className="alme-page-btn">&raquo;</button>
            </div>
          </div>
        </div>
      </div>

      {showEditPopup && <EditEvent onClose={handleCloseEditPopup} eventData={selectedEvent} />}

      {showDeletePopup && (
        <div className="alme-delete-popup-overlay">
          <div className="alme-delete-popup">
            <div className="alme-delete-popup-icon">!</div>
            <h2>Sure! You want to delete?</h2>
            <p>You won't be able to revert this!</p>
            <div className="alme-delete-popup-buttons">
              <button className="alme-delete-confirm-btn" onClick={handleConfirmDelete}>Yes, Delete It!</button>
              <button className="alme-delete-cancel-btn" onClick={handleCloseDeletePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyEvent;
