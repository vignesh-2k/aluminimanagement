import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
// import '../../../styles/JobPost/PendingPost.css';
import "../../../../styles/AdminFlow/AdminJobPost/AdminPendingPost.css";

import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import EditPost from '../AdminEditPost'; //  Correct component import

const PendingPost = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleEdit = (post) => {
    setSelectedPost(post);
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
    setSelectedPost(null);
  };

  return (
    <>
      <div>
        <Navbar />
        <TopBar />
        <div className="pp-container">
          <h2 className="pp-title">Pending Job List</h2>
          <div className="pp-table-card">
            <div className="pp-table-controls">
              <div className="pp-search-bar">
                <FaSearch className="pp-search-icon" />
                <input type="text" placeholder="Search Job Posts" />
              </div>
              <div className="pp-entries-select">
                <span>Show</span>
                <select>
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span>entries</span>
              </div>
            </div>

            <table className="pp-job-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Job Title</th>
                  <th>Employee Status</th>
                  <th>Salary</th>
                  <th>Application Deadline</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="https://i.imgur.com/yVeM7xx.png" alt="company logo" className="pp-company-logo" /></td>
                  <td>hr manager</td>
                  <td>Part Time</td>
                  <td>22</td>
                  <td>Tuesday, April 22, 2025</td>
                  <td><span className="pp-status pp-status-pending">Pending</span></td>
                  <td>
                    <button className="pp-action-btn" onClick={() => handleEdit({
                      title: 'hr manager',
                      jobContext: 'Context content here...',
                      jobResponsibility: 'Responsibility content...',
                      eduRequirements: 'Requirements...',
                      additionalRequirements: 'Additional...',
                      employeeStatus: 'Part Time'
                    })}>
                      <FaEdit />
                    </button>

                    <button className="pp-action-btn"><FaTrash /></button>
                    <button className="pp-action-btn"><FaEye /></button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="pp-table-footer">
              <span>Showing 1 to 1 of 1 entries</span>
              <div className="pp-pagination">
                <button>{'«'}</button>
                <button className="pp-active">1</button>
                <button>{'»'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Render EditPost modal conditionally */}
      {showEdit && (
        <EditPost
          show={showEdit}
          onClose={handleCloseEdit}
          postData={selectedPost}
        />
      )}
    </>
  );
};

export default PendingPost;
