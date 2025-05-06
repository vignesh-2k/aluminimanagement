import React, { useState } from 'react';
import '../../../../styles/AlumniFlow/JobPost/AllPost.css';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import { FaEye, FaSearch, FaTimes } from 'react-icons/fa';

const AllPost = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <>
      <Navbar />
      <TopBar />
      <div className="alumni-ajp-container">
        <h1 className="alumni-ajp-title">All Job Post</h1>
        <div className="alumni-ajp-box">
          <div className="alumni-ajp-topbar">
            <div className="alumni-ajp-search">
              <FaSearch className="alumni-ajp-search-icon" />
              <input type="text" placeholder="Search Job Posts" />
            </div>
            <div className="alumni-ajp-entries-container">
              <label className="alumni-ajp-entries-label">
                Show
                <select className="alumni-ajp-entries-select">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>

          <table className="alumni-ajp-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Title</th>
                <th>Employee Status</th>
                <th>Salary</th>
                <th>Application Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://i.ibb.co/Wpd7ZyH/demo-img.jpg"
                    alt="Company"
                    className="alumni-ajp-img"
                  />
                </td>
                <td>java developer</td>
                <td>Full Time</td>
                <td>45000</td>
                <td>Monday, May 5, 2025</td>
                <td>
                  <button className="alumni-ajp-action-btn" onClick={handleViewDetails}>
                    <FaEye />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="alumni-ajp-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="alumni-ajp-pagination">
              <button className="alumni-ajp-page-btn">{'«'}</button>
              <button className="alumni-ajp-page-btn active">1</button>
              <button className="alumni-ajp-page-btn">{'»'}</button>
            </div>
          </div>
        </div>

        {showDetails && (
          <div className="alumni-post-modal-overlay">
            <div className="alumni-post-modal">
              <FaTimes className="alumni-post-close-icon" onClick={closeDetails} />
              <h2 className="alumni-post-modal-title">Post Details</h2>
              <div className="alumni-post-modal-content">
                <div>
                  <strong>java developer</strong>
                  <div>Full Time</div>
                </div>
                <div>
                  <strong>Job Context</strong>
                  <div>wfhwewiufhweud</div>
                </div>
                <div>
                  <strong>Job Responsibility</strong>
                  <div>fevfvfeverf</div>
                </div>
                <div>
                  <strong>Educational Requirements</strong>
                  <div>fwqefqwfwqef</div>
                </div>
                <div>
                  <strong>Job Location</strong>
                  <div>trichy</div>
                </div>
                <div>
                  <strong>Salary</strong>
                  <div>45000</div>
                </div>
                <div>
                  <strong>Compensation & Benefits</strong>
                  <div>bonus 3000</div>
                </div>
                <div>
                  <strong>Application Deadline</strong>
                  <div>Monday, May 5, 2025</div>
                </div>
                <button className="alumni-apply-btn">Apply Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllPost;
