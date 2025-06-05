import { useEffect, useState } from "react";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import "../../../../styles/AdminFlow/AdminAlumni/AdminPendingList.css";
import { FaSearch, FaPhone, FaEnvelope, FaEye } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";
import {
  getpendinguser,
  getDepartmentList,
  getBatchList,
  getPassedOutYearList,
  approvePendingUser,
  rejectPendingUser
} from "../../../services/adminflow/pendinguser";

export default function PendingList() {
  const [alumniData, setAlumniData] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ batch: "", passingYear: "", department: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const [departments, setDepartments] = useState([]);
  const [batches, setBatches] = useState([]);
  const [passingYears, setPassingYears] = useState([]);

  const [popupType, setPopupType] = useState(null);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    loadDropdownData();
    fetchPendingUsers();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, filters]);

  const loadDropdownData = async () => {
    try {
      const deptRes = await getDepartmentList();
      const batchRes = await getBatchList();
      const yearRes = await getPassedOutYearList();
      setDepartments(deptRes.data);
      setBatches(batchRes.data);
      setPassingYears(yearRes.data);
    } catch (error) {
      console.error("Dropdown loading error", error);
    }
  };

  const fetchPendingUsers = async () => {
    const data = await getpendinguser();
    if (data?.status === "success") {
      const transformed = data.data.map((user) => ({
        id: user.pendingUserId,
        fullName: user.name,
        batch: user.batchNameId,
        passingYear: user.passedOutYearId,
        department: user.departmentId,
        mobileNumber: user.mobileNumber,
        email: user.email,
        address: user.address,
        city: user.city,
        state: user.state,
        pinCode: user.pinCode,
        linkedInUrl: user.linkedInUrl,
        companyName: user.companyName,
        companyDesignation: user.companyDesignation,
        companyAddress: user.companyAddress,
        dob: user.dateOfBirth,
        genderId: user.genderId,
        status: "Pending",
        image: "profile-placeholder.png",
      }));
      setAlumniData(transformed);
      setFilteredAlumni(transformed);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    const filtered = alumniData.filter((alumni) =>
      (!filters.batch || alumni.batch.toString() === filters.batch) &&
      (!filters.passingYear || alumni.passingYear.toString() === filters.passingYear) &&
      (!filters.department || alumni.department.toString() === filters.department) &&
      (alumni.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredAlumni(filtered);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      if (newStatus === "Approved") {
        await approvePendingUser(id);
      } else if (newStatus === "Rejected") {
        await rejectPendingUser(id);
      }
      fetchPendingUsers();
    } catch (error) {
      console.error("Error changing status", error);
    }
  };

  const getDepartmentName = (id) => {
    const dept = departments.find(d => d.id === id);
    return dept?.department || "Unknown";
  };

  const getBatchName = (id) => {
    const batch = batches.find(b => b.id === id);
    return batch?.batchName || "Unknown";
  };

  const getPassingYear = (id) => {
    const year = passingYears.find(y => y.id === id);
    return year?.passedOutYear || "Unknown";
  };

  const openPopup = (type, data) => {
    setPopupType(type);
    setPopupData(data);
  };

  const closePopup = () => {
    setPopupType(null);
    setPopupData(null);
  };

  return (
    <div className="adpl-app-container">
      <Navbar />
      <TopBar />
      <div className="adpl-alumni-container">
        {/* Search and Filters */}
        <div className="adpl-search-entries">
          <div className="adpl-search-box">
            <input
              type="text"
              placeholder="Search Alumni"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="adpl-search-icon" />
          </div>
          <div className="adpl-filter-toggle" onClick={() => setShowFilters(!showFilters)}>
            <HiOutlineAdjustments />
          </div>
          <div className="adpl-entries-dropdown">
            <label>Show</label>
            <select><option>10</option><option>25</option></select>
            <span>entries</span>
          </div>
        </div>

        {showFilters && (
          <div className="adpl-filter-options">
            <select 
              name="batch" 
              value={filters.batch} 
              onChange={handleFilterChange} 
              className="adpl-filter-dropdown"
            >
              <option value="">All Batch</option>
              {batches.map((b) => (
                <option key={b.id} value={b.id}>{b.batchName}</option>
              ))}
            </select>
            <select 
              name="passingYear" 
              value={filters.passingYear} 
              onChange={handleFilterChange} 
              className="adpl-filter-dropdown"
            >
              <option value="">All Passing Year</option>
              {passingYears.map((y) => (
                <option key={y.id} value={y.id}>{y.passedOutYear}</option>
              ))}
            </select>
            <select 
              name="department" 
              value={filters.department} 
              onChange={handleFilterChange} 
              className="adpl-filter-dropdown"
            >
              <option value="">All Department</option>
              {departments.map((d) => (
                <option key={d.id} value={d.id}>{d.department}</option>
              ))}
            </select>
            <button className="adpl-search-btn" onClick={applyFilters}>
              Search Now
            </button>
          </div>
        )}

        {/* Alumni Table */}
        <table className="adpl-alumni-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Batch</th>
              <th>Passing Year</th>
              <th>Department</th>
              <th>Change Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlumni.map((alumni) => (
              <tr key={alumni.id}>
                <td>{alumni.fullName}</td>
                <td>{getBatchName(alumni.batch)}</td>
                <td>{getPassingYear(alumni.passingYear)}</td>
                <td>{getDepartmentName(alumni.department)}</td>
                <td>
                  <select
                    className={`adpl-status-dropdown ${alumni.status.toLowerCase()}-status`}
                    value={alumni.status}
                    onChange={(e) => handleStatusChange(alumni.id, e.target.value)}
                  >
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td className="adpl-action-icons">
                  <button onClick={() => openPopup("phone", alumni)}>
                    <FaPhone className="adpl-icon" />
                  </button>
                  <button onClick={() => openPopup("email", alumni)}>
                    <FaEnvelope className="adpl-icon" />
                  </button>
                  <button onClick={() => openPopup("view", alumni)}>
                    <FaEye className="adpl-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Popup */}
        {popupType && popupData && (
          <div className="adpl-popup-overlay" onClick={closePopup}>
            <div className="adpl-popup-box" onClick={(e) => e.stopPropagation()}>
              <button className="adpl-popup-close" onClick={closePopup}>×</button>

              {popupType === "phone" && (
                <div>
                  <h3>Phone Number</h3>
                  <p>{popupData.mobileNumber}</p>
                </div>
              )}
              
              {popupType === "email" && (
                <div>
                  <h3>Email Address</h3>
                  <p>{popupData.email}</p>
                </div>
              )}
              
              {popupType === "view" && (
                <div>
                  <h3>Alumni Details</h3>
                  <div className="adpl-view-grid">
                    <div className="adpl-view-item">
                      <span className="adpl-view-label">Full Name:</span>
                      <span className="adpl-view-value">{popupData.fullName}</span>
                    </div>
                    <div className="adpl-view-item">
                      <span className="adpl-view-label">Email:</span>
                      <span className="adpl-view-value">{popupData.email}</span>
                    </div>
                    <div className="adpl-view-item">
                      <span className="adpl-view-label">Mobile:</span>
                      <span className="adpl-view-value">{popupData.mobileNumber}</span>
                    </div>
                    <div className="adpl-view-item">
                      <span className="adpl-view-label">DOB:</span>
                      <span className="adpl-view-value">{popupData.dob}</span>
                    </div>
                    <div className="adpl-view-item">
                      <span className="adpl-view-label">Address:</span>
                      <span className="adpl-view-value">
                        {popupData.address}, {popupData.city}, {popupData.state}, {popupData.pinCode}
                      </span>
                    </div>
                    <div className="adpl-view-item">
                      <span className="adpl-view-label">Company:</span>
                      <span className="adpl-view-value">{popupData.companyName}</span>
                    </div>
                    <div className="adpl-view-item">
                      <span className="adpl-view-label">Designation:</span>
                      <span className="adpl-view-value">{popupData.companyDesignation}</span>
                    </div>
                    <div className="adpl-view-item">
                      <span className="adpl-view-label">LinkedIn:</span>
                      <span className="adpl-view-value">
                        <a href={popupData.linkedInUrl} target="_blank" rel="noopener noreferrer">
                          {popupData.linkedInUrl}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}