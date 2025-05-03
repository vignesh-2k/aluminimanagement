
import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
// import { TopBar } from "../../../layout/AdminFlow/Topbar";
// import { Navbar } from "../../../layout/AdminFlow/Navbar";
import EditEvent from '../AdminEditEvent'; // Popup
// import "../../../styles/Event/PendingEvent.css";

import "../../../../styles/AdminFlow/AdminEvent/AdminPendingEvent.css"
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";

const AdminPendingEvent = () => {
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
      <div className="pe-container">
        <h2 className="pe-title">Pending Event</h2>

        <div className="pe-table-wrapper">
          <div className="pe-top-bar">
            <label className="pe-search-container">
              <FaSearch className="pe-search-icon" />
              <input
                type="text"
                placeholder="Search event"
                className="pe-search-input"
              />
            </label>

            <div className="pe-entries-container">
              <label className="pe-entries-label">
                Show
                <select className="pe-entries-select">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>

          <div className="pe-table-responsive">
            <table className="pe-event-table">
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
                  <td><span className="pe-category-badge">Workshop</span></td>
                  <td><span className="pe-type-badge">Free</span></td>
                  <td>22nd April, 12:00:00 AM</td>
                  <td>Anna University, Trichy</td>
                  <td><span className="pe-status-badge">Pending</span></td>
                  <td className="pe-action-icons">
                    <button className="pe-icon-btn" onClick={handleEditClick}><FaEdit /></button>
                    <button className="pe-icon-btn"><FaTrash /></button>
                    <button className="pe-icon-btn"><FaEye /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pe-table-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="pe-pagination">
              <button className="pe-page-btn">&laquo;</button>
              <button className="pe-page-btn pe-active">1</button>
              <button className="pe-page-btn">&raquo;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Show Edit Popup */}
      {showEditPopup && <EditEvent onClose={handleClosePopup} />}
    </>
  );
};

export default AdminPendingEvent;
