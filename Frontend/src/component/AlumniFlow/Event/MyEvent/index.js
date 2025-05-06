import React, { useState } from 'react';
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
} from 'react-icons/fa';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import EditEvent from '../EditEvent';
import "../../../../styles/AlumniFlow/Event/MyEvent.css";
import { useNavigate } from 'react-router-dom';

const MyEvent = () => {
  const navigate = useNavigate();

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleEditClick = () => setShowEditPopup(true);
  const handleCloseEditPopup = () => setShowEditPopup(false);

  const handleDeleteClick = () => setShowDeletePopup(true);
  const handleCloseDeletePopup = () => setShowDeletePopup(false);

  const handleConfirmDelete = () => {
    setShowDeletePopup(false);
  };

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
              <input
                type="text"
                placeholder="Search event"
                className="alme-search-input"
              />
            </label>

            <div className="alme-entries-container">
              <label className="alme-entries-label">
                Show
                <select className="alme-entries-select">
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
                  <td><span className="alme-category-badge">Workshop</span></td>
                  <td><span className="alme-type-badge">Free</span></td>
                  <td>22nd April, 12:00:00 AM</td>
                  <td>Anna University, Trichy</td>
                  <td><span className="alme-status-badge">Pending</span></td>
                  <td className="alme-action-icons">
                    <button className="alme-icon-btn" onClick={handleEditClick}><FaEdit /></button>
                    <button className="alme-icon-btn" onClick={handleDeleteClick}><FaTrash /></button>
                    <button className="alme-icon-btn" onClick={() => navigate('/eventdetails')}><FaEye /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="alme-table-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="alme-pagination">
              <button className="alme-page-btn">&laquo;</button>
              <button className="alme-page-btn alme-active">1</button>
              <button className="alme-page-btn">&raquo;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Event Popup */}
      {showEditPopup && <EditEvent onClose={handleCloseEditPopup} />}

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="alme-delete-popup-overlay">
          <div className="alme-delete-popup">
            <div className="alme-delete-popup-icon">!</div>
            <h2 style={ { 
              marginBottom: "10px",
              fontSize: "25px",
              alignItems: "center",
              color: "#333"
            }}>Sure! You want to delete?</h2>

            <p  style={ { 
               color: "#777",
               marginBottom: "20px"
            }}
            >You won't be able to revert this!</p>
            <div className="alme-delete-popup-buttons">
              <button
               className="alme-delete-confirm-btn" onClick={handleConfirmDelete}>
                Yes, Delete It!
              </button>
              <button className="alme-delete-cancel-btn" onClick={handleCloseDeletePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyEvent;
