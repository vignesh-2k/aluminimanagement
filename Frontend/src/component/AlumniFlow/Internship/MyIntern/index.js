import React, { useEffect, useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import "../../../../styles/AlumniFlow/Internship/MyIntern.css";
import { useNavigate } from 'react-router-dom';
import Editintern from '../EditIntern';
import { getAllJob, getEmployeeStatus, deleteJobPost } from '../../../services/almJob';

const MyIntern = () => {
  const navigate = useNavigate();
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [interns, setInterns] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [selectedIntern, setSelectedIntern] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const jobData = await getAllJob(); // Replace with getAllInterns() if available
    const statusData = await getEmployeeStatus();
    setInterns(jobData?.data || []);
    setStatuses(statusData?.data || []);
  };

  const getStatusText = (statusId) => {
    const match = statuses.find((s) => s.employeeStatusId === statusId);
    return match ? match.employeeStatus : 'Unknown';
  };

  const handleEditClick = (intern) => {
    setSelectedIntern(intern);
    setShowEditPopup(true);
  };

  const handleDeleteClick = (intern) => {
    setSelectedIntern(intern);
    setShowDeletePopup(true);
  };

  const handleCloseEditPopup = () => setShowEditPopup(false);
  const handleCloseDeletePopup = () => setShowDeletePopup(false);

  const handleConfirmDelete = async () => {
    try {
      await deleteJobPost(selectedIntern.jobId);
      setInterns(interns.filter(intern => intern.jobId !== selectedIntern.jobId));
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setShowDeletePopup(false);
    }
  };

  const handleViewDetails = (intern) => {
    navigate('/postdetails', { state: { job: intern } });
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="almi-container">
        <h2 className="almi-title">My Internships</h2>

        <div className="almi-table-wrapper">
          <div className="almi-top-bar">
            <label className="almi-search-container">
              <FaSearch className="almi-search-icon" />
              <input type="text" placeholder="Search internship post" className="almi-search-input" />
            </label>
            <div className="almi-entries-container">
              <label className="almi-entries-label">
                Show
                <select className="almi-entries-select">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>

          <div className="almi-table-responsive">
            <table className="almi-post-table">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Internship Title</th>
                  <th>Internship Type</th>
                  <th>Stipend</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {interns.map((intern) => (
                  <tr key={intern.jobId}>
                    <td>{intern.companyName}</td>
                    <td>{intern.jobTitle}</td>
                    <td>
                      <span className="almi-status-badge">
                        {getStatusText(intern.employeeStatus)}
                      </span>
                    </td>
                    <td>{intern.salary}/month</td>
                    <td>{new Date(intern.applicationDeadline).toLocaleDateString()}</td>
                    <td><span className="almi-badge-pending">Pending</span></td>
                    <td className="almi-action-icons">
                      <button className="almi-icon-btn" onClick={() => handleEditClick(intern)}><FaEdit /></button>
                      <button className="almi-icon-btn" onClick={() => handleDeleteClick(intern)}><FaTrash /></button>
                      <button className="almi-icon-btn" onClick={() => handleViewDetails(intern)}><FaEye /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="almi-table-footer">
            <span>Showing {interns.length > 0 ? `1 to ${interns.length}` : 0} of {interns.length} entries</span>
            <div className="almi-pagination">
              <button className="almi-page-btn">&laquo;</button>
              <button className="almi-page-btn almi-active">1</button>
              <button className="almi-page-btn">&raquo;</button>
            </div>
          </div>
        </div>
      </div>

      {showEditPopup && (
        <div className="almi-modal-overlay">
          <Editintern onClose={handleCloseEditPopup} job={selectedIntern} />
        </div>
      )}

      {showDeletePopup && (
        <div className="almi-delete-popup-overlay">
          <div className="almi-delete-popup">
            <div className="almi-delete-popup-icon">!</div>
            <h2>Sure! You want to delete?</h2>
            <p>You won't be able to revert this!</p>
            <div className="almi-delete-popup-buttons">
              <button className="almi-delete-confirm-btn" onClick={handleConfirmDelete}>Yes, Delete It!</button>
              <button className="almi-delete-cancel-btn" onClick={handleCloseDeletePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyIntern;
