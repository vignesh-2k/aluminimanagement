import React from "react";
// import '../../../styles/JobPost/AllPost.css';
import "../../../../styles/AdminFlow/AdminJobPost/AdminAllPost.css";
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { FiSearch } from 'react-icons/fi'; // Search icon

const AllPost = () => {
  return (
      <>
        <div >
              <Navbar />
              <TopBar />
    <div className="jobpost-container">
      <h2 className="jobpost-title">All Job Post</h2>
      <div className="jobpost-box">
        <div className="jobpost-search-box">
          <FiSearch className="jobpost-search-icon" />
          <input type="text" placeholder="Search Job Posts" />
        </div>
        <div className="jobpost-table-controls">
          <label>Show</label>
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span>entries</span>
        </div>
        <table className="jobpost-table">
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
              <td colSpan="6" className="no-data">No data available in table</td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="pagination-buttons">
            <button>{'<<'}</button>
            <button>{'>>'}</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AllPost;
