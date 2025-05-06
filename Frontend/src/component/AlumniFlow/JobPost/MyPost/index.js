import React, { useState } from 'react';
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
} from 'react-icons/fa';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import "../../../../styles/AlumniFlow/JobPost/MyPost.css";

import { useNavigate } from 'react-router-dom';
import EditPost from '../EditPost';

const MyPost = () => {
  const navigate = useNavigate();

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleEditClick = () => setShowEditPopup(true);
  const handleCloseEditPopup = () => setShowEditPopup(false);

  const handleDeleteClick = () => setShowDeletePopup(true);
  const handleCloseDeletePopup = () => setShowDeletePopup(false);

  const handleConfirmDelete = () => {
    // Add deletion logic here
    setShowDeletePopup(false);
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="almp-container">
        <h2 className="almp-title">My Posts</h2>

        <div className="almp-table-wrapper">
          <div className="almp-top-bar">
            <label className="almp-search-container">
              <FaSearch className="almp-search-icon" />
              <input
                type="text"
                placeholder="Search job post"
                className="almp-search-input"
              />
            </label>

            <div className="almp-entries-container">
              <label className="almp-entries-label">
                Show
                <select className="almp-entries-select">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>

          <div className="almp-table-responsive">
            <table className="almp-post-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Job Title</th>
                  <th>Employment Status</th>
                  <th>Salary</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google</td>
                  <td>Frontend Developer</td>
                  <td><span className="almp-status-badge">Full-Time</span></td>
                  <td>90,000/year</td>
                  <td>30th May, 2025</td>
                  <td><span className="almp-badge-pending">Pending</span></td>
                  <td className="almp-action-icons">
                    {/* <button className="almp-icon-btn" onClick={() => navigate ('/editpost')}><FaEdit /></button> */}
                    <button className="almp-icon-btn" onClick={handleEditClick}><FaEdit /></button>

                    <button className="almp-icon-btn" onClick={handleDeleteClick}><FaTrash /></button>
                    <button className="almp-icon-btn" onClick={() => navigate('/postdetails')}><FaEye /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="almp-table-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="almp-pagination">
              <button className="almp-page-btn">&laquo;</button>
              <button className="almp-page-btn almp-active">1</button>
              <button className="almp-page-btn">&raquo;</button>
            </div>
          </div>
        </div>
      </div>
  

      {showEditPopup && (
      <div className="almp-modal-overlay">
      <EditPost onClose={handleCloseEditPopup} />
      </div> 
       )}

     

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="almp-delete-popup-overlay">
          <div className="almp-delete-popup">
            <div className="almp-delete-popup-icon">!</div>
            <h2 style={ { 
              marginBottom: "10px",
              fontSize: "25px",
              alignItems: "center",
              color: "#333"
            }}>Sure! You want to delete?</h2>
            <p style={ { 
               color: "#777",
               marginBottom: "20px"
            }}>You won't be able to revert this!</p>
            <div className="almp-delete-popup-buttons">
              <button className="almp-delete-confirm-btn" onClick={handleConfirmDelete}>
                Yes, Delete It!
              </button>
              <button className="almp-delete-cancel-btn" onClick={handleCloseDeletePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPost;
