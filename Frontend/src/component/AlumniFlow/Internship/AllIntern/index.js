import React, { useState } from 'react';
import '../../../../styles/AlumniFlow/Internship/AllInterns.css';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import { FaEye, FaSearch, FaTimes } from 'react-icons/fa';

const AllIntern = () => {
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
      <div className="aluai-container">
        <h1 className="aluai-title">All Internship Post</h1>
        <div className="aluai-box">
          <div className="aluai-topbar">
            <div className="aluai-search">
              <FaSearch className="aluai-search-icon" />
              <input type="text" placeholder="Search Internship Posts" />
            </div>
            <div className="aluai-entries-container">
              <label className="aluai-entries-label">
                Show
                <select className="aluai-entries-select">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>

          <table className="aluai-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Internship Title</th>
                <th>Type</th>
                <th>Stipend</th>
                <th>Application Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  CCs
                </td>
                <td>Frontend Intern</td>
                <td>Remote</td>
                <td>5000</td>
                <td>Monday, May 12, 2025</td>
                <td>
                  <button className="aluai-action-btn" onClick={handleViewDetails}>
                    <FaEye />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="aluai-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="aluai-pagination">
              <button className="aluai-page-btn">{'«'}</button>
              <button className="aluai-page-btn active">1</button>
              <button className="aluai-page-btn">{'»'}</button>
            </div>
          </div>
        </div>

        {showDetails && (
          <div className="aluai-modal-overlay">
            <div className="aluai-modal">
              <FaTimes className="aluai-close-icon" onClick={closeDetails} />
              <h2 className="aluai-modal-title">Internship Details</h2>
              <div className="aluai-modal-content">
                <div>
                  <strong>Frontend Intern</strong>
                  <div>Remote</div>
                </div>
                <div>
                  <strong>Internship Context</strong>
                  <div>Develop and maintain UI components using React.</div>
                </div>
                <div>
                  <strong>Responsibilities</strong>
                  <div>Collaborate with design team to build features.</div>
                </div>
                <div>
                  <strong>Educational Requirements</strong>
                  <div>Pursuing B.Sc/B.Tech in Computer Science</div>
                </div>
                <div>
                  <strong>Location</strong>
                  <div>Remote</div>
                </div>
                <div>
                  <strong>Stipend</strong>
                  <div>5000</div>
                </div>
                <div>
                  <strong>Perks</strong>
                  <div>Certificate, Flexible Hours</div>
                </div>
                <div>
                  <strong>Application Deadline</strong>
                  <div>Monday, May 12, 2025</div>
                </div>
                <button className="aluai-apply-btn">Apply Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllIntern;
