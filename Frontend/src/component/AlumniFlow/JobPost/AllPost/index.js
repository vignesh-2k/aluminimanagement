import React, { useEffect, useState } from 'react';
import '../../../../styles/AlumniFlow/JobPost/AllPost.css';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import { FaEye, FaSearch, FaTimes } from 'react-icons/fa';
import { getAllJob } from '../../../services/almJob';
import { useNavigate } from "react-router-dom";


const AllPost = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState(10);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
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
    setSelectedJob(job);
    setShowDetails(true);
    navigate(`/postdetails`, { state: { job: job } }); // Pass job data to the PostDetails page
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedJob(null);
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
      <div className="alumni-ajp-container">
        <h1 className="alumni-ajp-title">All Job Post</h1>
        <div className="alumni-ajp-box">
          <div className="alumni-ajp-topbar">
            <div className="alumni-ajp-search">
              <FaSearch className="alumni-ajp-search-icon" />
              <input
                type="text"
                placeholder="Search Job Posts"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="alumni-ajp-entries-container">
              <label className="alumni-ajp-entries-label">
                Show
                <select
                  className="alumni-ajp-entries-select"
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

          <table className="alumni-ajp-table">
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
                      className="alumni-ajp-action-btn"
                      onClick={() => handleViewDetails(job)}
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="alumni-ajp-footer">
            <span>
              Showing {filteredJobs.length > 0 ? 1 : 0} to {Math.min(filteredJobs.length, entries)} of {filteredJobs.length} entries
            </span>
            <div className="alumni-ajp-pagination">
              <button className="alumni-ajp-page-btn">{'«'}</button>
              <button className="alumni-ajp-page-btn active">1</button>
              <button className="alumni-ajp-page-btn">{'»'}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;
