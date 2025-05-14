import React, { useEffect, useState } from 'react';
import "../../../../styles/AdminFlow/AdminJobPost/AdminAllPost.css";
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { FaEye, FaSearch } from 'react-icons/fa';
import { getAllJob } from '../../../services/almJob';
import { useNavigate } from "react-router-dom";

const AllPost = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await getAllJob();
      if (res?.status === 'success') {
        setJobs(res.data);
      }
    };
    fetchJobs();
  }, []);

  const handleViewDetails = (job) => {
    navigate(`/postdetails`, { state: { job } });
  };

  const formatDate = (isoDate) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString('en-US', options);
  };

  const filteredJobs = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <TopBar />
      <div className="adaljp-container">
        <h1 className="adaljp-title">All Job Post</h1>
        <div className="adaljp-box">
          <div className="adaljp-topbar">
            <div className="adaljp-search">
              <FaSearch className="adaljp-search-icon" />
              <input
                type="text"
                placeholder="Search Job Posts"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="adaljp-entries-container">
              <label className="adaljp-entries-label">
                Show
                <select
                  className="adaljp-entries-select"
                  value={entries}
                  onChange={(e) => setEntries(parseInt(e.target.value))}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>

          <table className="adaljp-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Job Title</th>
                <th>Employee Status</th>
                <th>Salary</th>
                <th>Application Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.slice(0, entries).map((job) => (
                <tr key={job.jobId}>
                  <td>{job.companyName}</td>
                  <td>{job.jobTitle}</td>
                  <td>{job.employeeStatus === 1 ? 'Full Time' : 'Part Time'}</td>
                  <td>{job.salary}</td>
                  <td>{formatDate(job.applicationDeadline)}</td>
                  <td>
                    <button
                      className="adaljp-action-btn"
                      onClick={() => handleViewDetails(job)}
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="adaljp-footer">
            <span>
              Showing {filteredJobs.length > 0 ? 1 : 0} to {Math.min(filteredJobs.length, entries)} of {filteredJobs.length} entries
            </span>
            <div className="adaljp-pagination">
              <button className="adaljp-page-btn">{'«'}</button>
              <button className="adaljp-page-btn active">1</button>
              <button className="adaljp-page-btn">{'»'}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;
