import { useState } from "react";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
// import "../../../styles/Alumni/AllList.css";
import "../../../../styles/AdminFlow/AdminAlumni/AdminAllList.css"
import { FaSearch, FaPhone, FaEnvelope, FaEye, FaEdit } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function AllList() {

  const navigate = useNavigate();

  const [alumniData] = useState([
    { id: 1, fullName: "Sreeram", batch: "Batch-2023", passingYear: 2025, department: "CSE", status: "Approved", image: "profile-placeholder.png" },
    { id: 2, fullName: "Anish", batch: "Batch-2022", passingYear: 2024, department: "ECE", status: "Pending", image: "profile-placeholder.png" },
    { id: 3, fullName: "Santhosh", batch: "Batch-2021", passingYear: 2023, department: "MECH", status: "Rejected", image: "profile-placeholder.png" },
  ]);

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ batch: "", passingYear: "", department: "" });
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    const filtered = alumniData.filter((alumni) =>
      (!filters.batch || alumni.batch === filters.batch) &&
      (!filters.passingYear || alumni.passingYear.toString() === filters.passingYear) &&
      (!filters.department || alumni.department === filters.department)
    );
    setFilteredAlumni(filtered);
  };

  const handleStatusChange = (id, newStatus) => {
    setFilteredAlumni(prevAlumni =>
      prevAlumni.map(alumni =>
        alumni.id === id ? { ...alumni, status: newStatus } : alumni
      )
    );
  };

  return (
    <div className="app-container">
      <Navbar />
      <TopBar />

      <div className="alumni-container">
        <div className="search-entries">
          <div className="alu-search-box">
            <FaSearch className="alu-search-icon" />
            <input type="text" placeholder="Search Alumni" />
          </div>

          <div className="alumni-filter" onClick={toggleFilters}>
            <HiOutlineAdjustments />
          </div>

          <div className="entries-dropdown">
            <label>Show</label>
            <select>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span>entries</span>
          </div>
        </div>

        {showFilters && (
          <div className="filter-options">
            <div className="filter-group">
              <select name="batch" value={filters.batch} onChange={handleFilterChange} className="filter-dropdown">
                <option value="">All Batch</option>
                <option value="Batch-2023">Batch-2023</option>
                <option value="Batch-2022">Batch-2022</option>
                <option value="Batch-2021">Batch-2021</option>
              </select>

              <select name="passingYear" value={filters.passingYear} onChange={handleFilterChange} className="filter-dropdown">
                <option value="">All Passing Year</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>

              <select name="department" value={filters.department} onChange={handleFilterChange} className="filter-dropdown">
                <option value="">All Department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
                <option value="Civil">Civil</option>
              </select>

              <button className="search-btn" onClick={applyFilters}>Search Now</button>
            </div>
          </div>
        )}

        <table className="alumni-table">
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
                <td className="alumni-profile">
                  <img src={alumni.image} alt="Profile" className="profile-pic" />
                  {alumni.fullName}
                </td>
                <td>{alumni.batch}</td>
                <td>{alumni.passingYear}</td>
                <td>{alumni.department}</td>
                <td>
                  <select
                    className={`status-dropdown ${alumni.status.toLowerCase()}-status`}
                    value={alumni.status}
                    onChange={(e) => handleStatusChange(alumni.id, e.target.value)}
                  >
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td className="action-icons">
                  <button><FaPhone className="icon phone-icon" /></button>
                  <button><FaEnvelope className="icon" /></button>
                  <button><FaEye className="icon" /></button>
                  <button onClick={() => navigate('/alumini/alumniProfile')}><FaEdit className="icon" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">Showing {filteredAlumni.length} entries</div>

        <div className="pagination">
          <button className="page-btn">«</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">»</button>
        </div>
      </div>
    </div>
  );
}
