// MyEvent.jsx
import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import EditEvent from '../EditEvent'; // Popup
// import "../../../styles/Event/MyEvent.css";
import "../../../../styles/AdminFlow/AdminJobPost/AdminMyPost.css";


const MyEvent = () => {
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEditClick = () => {
    setShowEditPopup(true);
  };

  const handleClosePopup = () => {
    setShowEditPopup(false);
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="me-container">
        <h2 className="me-title">My Event</h2>

        <div className="me-table-wrapper">
          <div className="me-top-bar">
            <label className="me-search-container">
              <FaSearch className="me-search-icon" />
              <input
                type="text"
                placeholder="Search event"
                className="me-search-input"
              />
            </label>

            <div className="me-entries-container">
              <label className="me-entries-label">
                Show
                <select className="me-entries-select">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>

          <div className="me-table-responsive">
            <table className="me-event-table">
              <thead>
                <tr>
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
                <tr>
                  <td>AI-tools</td>
                  <td><span className="me-category-badge">Workshop</span></td>
                  <td><span className="me-type-badge">Free</span></td>
                  <td>22nd April, 12:00:00 AM</td>
                  <td>Anna University, Trichy</td>
                  <td><span className="me-status-badge">Pending</span></td>
                  <td className="me-action-icons">
                    <button className="me-icon-btn" onClick={handleEditClick}><FaEdit /></button>
                    <button className="me-icon-btn"><FaTrash /></button>
                    <button className="me-icon-btn"><FaEye /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="me-table-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="me-pagination">
              <button className="me-page-btn">&laquo;</button>
              <button className="me-page-btn me-active">1</button>
              <button className="me-page-btn">&raquo;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Show Edit Popup */}
      {showEditPopup && <EditEvent onClose={handleClosePopup} />}
    </>
  );
};

export default MyEvent;
