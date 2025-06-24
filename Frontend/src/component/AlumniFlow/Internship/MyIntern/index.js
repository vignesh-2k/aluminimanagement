import React, { useEffect, useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import "../../../../styles/AlumniFlow/Internship/MyIntern.css";
import { useNavigate } from 'react-router-dom';
import EditIntern from '../EditIntern';
import { getAllIntern, deleteIntern } from '../../../services/almIntern';

const MyIntern = () => {
  const navigate = useNavigate();
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [interns, setInterns] = useState([]);
  const [filteredInterns, setFilteredInterns] = useState([]);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchInterns();
  }, []);

  useEffect(() => {
    // Filter internships based on search term
    const filtered = interns.filter(intern => 
      intern.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.internshipTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.internshipType.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInterns(filtered);
  }, [searchTerm, interns]);

  const fetchInterns = async () => {
    try {
      const response = await getAllIntern();
      if (Array.isArray(response.data)) {
        setInterns(response.data);
        setFilteredInterns(response.data);
      } else if (response.data) {
        setInterns([response.data]);
        setFilteredInterns([response.data]);
      }
    } catch (error) {
      console.error("Error fetching internships:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (intern) => {
    setSelectedIntern(intern);
    setShowEditPopup(true);
  };

  const handleDeleteClick = (intern) => {
    setSelectedIntern(intern);
    setShowDeletePopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
    fetchInterns();
  };

  const handleCloseDeletePopup = () => setShowDeletePopup(false);

  const handleConfirmDelete = async () => {
    try {
      await deleteIntern(selectedIntern.internshipId);
      setInterns(interns.filter(intern => intern.internshipId !== selectedIntern.internshipId));
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setShowDeletePopup(false);
    }
  };

  const handleViewDetails = (intern) => {
    navigate('/interndetails', { state: { internId: intern.internshipId } });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <div className="almi-loading">
        <div className="almi-spinner"></div>
        <p>Loading internships...</p>
      </div>
    );
  }

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
              <input 
                type="text" 
                placeholder="Search internship post" 
                className="almi-search-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredInterns.length > 0 ? (
                  filteredInterns.map((intern) => (
                    <tr key={intern.internshipId}>
                      <td>{intern.companyName}</td>
                      <td>{intern.internshipTitle}</td>
                      <td>
                        <span className="almi-status-badge">
                          {intern.internshipType}
                        </span>
                      </td>
                      <td>{intern.stipend}/month</td>
                      <td>{new Date(intern.applicationDeadline).toLocaleDateString()}</td>
                      <td className="almi-action-icons">
                        <button 
                          className="almi-icon-btn" 
                          onClick={() => handleEditClick(intern)}
                          aria-label="Edit internship"
                        >
                          <FaEdit />
                        </button>
                        <button 
                          className="almi-icon-btn" 
                          onClick={() => handleDeleteClick(intern)}
                          aria-label="Delete internship"
                        >
                          <FaTrash />
                        </button>
                        <button 
                          className="almi-icon-btn" 
                          onClick={() => handleViewDetails(intern)}
                          aria-label="View details"
                        >
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="almi-no-data">
                      No internships found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="almi-table-footer">
            <span>Showing {filteredInterns.length} of {interns.length} entries</span>
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
          <EditIntern 
            onClose={handleCloseEditPopup} 
            intern={selectedIntern} 
          />
        </div>
      )}

      {showDeletePopup && (
        <div className="almi-delete-popup-overlay">
          <div className="almi-delete-popup">
            <div className="almi-delete-popup-icon">!</div>
            <h2>Sure! You want to delete?</h2>
            <p>You won't be able to revert this!</p>
            <div className="almi-delete-popup-buttons">
              <button 
                className="almi-delete-confirm-btn" 
                onClick={handleConfirmDelete}
              >
                Yes, Delete It!
              </button>
              <button 
                className="almi-delete-cancel-btn" 
                onClick={handleCloseDeletePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyIntern;