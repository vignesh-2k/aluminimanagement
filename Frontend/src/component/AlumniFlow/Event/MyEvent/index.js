import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaEye, FaArrowLeft, FaDownload } from 'react-icons/fa';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import EditEvent from '../EditEvent';
import "../../../../styles/AlumniFlow/Event/MyEvent.css";

const MyEvent = () => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showTicketPopup, setShowTicketPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleEditClick = () => setShowEditPopup(true);
  const handleCloseEditPopup = () => setShowEditPopup(false);

  const handleViewClick = () => setShowTicketPopup(true);
  const handleCloseTicketPopup = () => setShowTicketPopup(false);

  const handleDeleteClick = () => setShowDeletePopup(true);
  const handleCloseDeletePopup = () => setShowDeletePopup(false);
  const handleConfirmDelete = () => {
    // deletion logic here
    setShowDeletePopup(false);
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
                    <button className="me-icon-btn" onClick={handleDeleteClick}><FaTrash /></button>
                    <button className="me-icon-btn" onClick={handleViewClick}><FaEye /></button>
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

      {showEditPopup && <EditEvent onClose={handleCloseEditPopup} />}

      {showTicketPopup && (
        <div className="me-tp-overlay">
          <div className="me-tp-popup">
            <div className="me-tp-header">
              <button className="me-tp-back" onClick={handleCloseTicketPopup}>
                <FaArrowLeft /> Back To Dashboard
              </button>
              <button className="me-tp-download">
                Download <FaDownload />
              </button>
            </div>
            <div className="me-tp-content">
              <div className="me-tp-left">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/10/07/18/graduation-2386974_1280.png"
                  alt="Event"
                  className="me-tp-image"
                />
              </div>
              <div className="me-tp-middle">
                <h2 className="me-tp-title">AI-tools</h2>
                <p className="me-tp-ticket-id">Ticket#60001</p>
                <p className="me-tp-reserved">Reserved by Administrator Doe, 29 Apr 2025</p>
                <p className="me-tp-location-label">Location</p>
                <p className="me-tp-location">Anna University, Trichy</p>
              </div>
              <div className="me-tp-right">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket#60001"
                  alt="QR Code"
                  className="me-tp-qr"
                />
                <p className="me-tp-scan-text">Scan to verify</p>
                <img
                  src="https://barcode.tec-it.com/barcode.ashx?data=60001&code=Code128&translate-esc=false"
                  alt="Barcode"
                  className="me-tp-barcode"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {showDeletePopup && (
        <div className="me-del-overlay">
          <div className="me-del-popup">
            <h3 className="me-del-title">Delete Confirmation</h3>
            <p className="me-del-message">Are you sure you want to delete this event?</p>
            <div className="me-del-buttons">
              <button className="me-del-cancel" onClick={handleCloseDeletePopup}>Cancel</button>
              <button className="me-del-confirm" onClick={handleConfirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyEvent;
