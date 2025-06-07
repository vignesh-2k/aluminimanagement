import React, { useEffect, useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import "../../../../styles/AlumniFlow/JobPost/MyPost.css";
import { useNavigate } from 'react-router-dom';
import EditPost from '../EditPost';
import { getAllJob, getEmployeeStatus, deleteJobPost } from '../../../services/almJob';

const MyPost = () => {
  const navigate = useNavigate();
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const jobData = await getAllJob();
      const statusData = await getEmployeeStatus();
      setJobs(jobData?.data || []);
      setStatuses(statusData?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getStatusText = (statusId) => {
    const match = statuses.find((s) => s.employeeStatusId === statusId);
    return match ? match.employeeStatus : 'Unknown';
  };

  const handleEditClick = (job) => {
    setSelectedJob(job);
    setShowEditPopup(true);
  };

  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    setShowDeletePopup(true);
  };

  const handleCloseEditPopup = () => setShowEditPopup(false);
  const handleCloseDeletePopup = () => setShowDeletePopup(false);

  const handleConfirmDelete = async () => {
    try {
      await deleteJobPost(selectedJob.jobId);
      setJobs(jobs.filter(job => job.jobId !== selectedJob.jobId));
      alert("Job deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed. Please try again.");
    } finally {
      setShowDeletePopup(false);
    }
  };

  const handleViewDetails = (job) => {
    navigate('/postdetails', { state: { job } });
  };

  const handleUpdateSuccess = () => {
    fetchData(); 
    setShowEditPopup(false);
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
              <input type="text" placeholder="Search job post" className="almp-search-input" />
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.jobId}>
                    <td>{job.companyName}</td>
                    <td>{job.jobTitle}</td>
                    <td>
                      <span className="almp-status-badge">
                        {getStatusText(job.employeeStatus)}
                      </span>
                    </td>
                    <td>{job.salary}/year</td>
                    <td>{job.applicationDeadline ? new Date(job.applicationDeadline).toLocaleDateString() : 'N/A'}</td>
                    <td className="almp-action-icons">
                      <button className="almp-icon-btn" onClick={() => handleEditClick(job)}><FaEdit /></button>
                      <button className="almp-icon-btn" onClick={() => handleDeleteClick(job)}><FaTrash /></button>
                      <button className="almp-icon-btn" onClick={() => handleViewDetails(job)}><FaEye /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="almp-table-footer">
            <span>Showing {jobs.length > 0 ? `1 to ${jobs.length}` : 0} of {jobs.length} entries</span>
            <div className="almp-pagination">
              <button className="almp-page-btn">&laquo;</button>
              <button className="almp-page-btn almp-active">1</button>
              <button className="almp-page-btn">&raquo;</button>
            </div>
          </div>
        </div>
      </div>

      {showEditPopup && selectedJob && (
        <div className="almp-modal-overlay">
          <EditPost 
            onClose={handleCloseEditPopup} 
            jobData={selectedJob} 
            onUpdateSuccess={handleUpdateSuccess} 
          />
        </div>
      )}

      {showDeletePopup && (
        <div className="almp-delete-popup-overlay">
          <div className="almp-delete-popup">
            <div className="almp-delete-popup-icon">!</div>
            <h2>Sure! You want to delete?</h2>
            <p>You won't be able to revert this!</p>
            <div className="almp-delete-popup-buttons">
              <button className="almp-delete-confirm-btn" onClick={handleConfirmDelete}>Yes, Delete It!</button>
              <button className="almp-delete-cancel-btn" onClick={handleCloseDeletePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPost;