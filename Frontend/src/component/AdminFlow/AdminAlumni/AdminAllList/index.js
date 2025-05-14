import { useState } from "react";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import "../../../../styles/AdminFlow/AdminAlumni/AdminAllList.css"
import { FaSearch, FaPhone, FaEnvelope, FaEye } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";

export default function AllList() {
  const [alumniData] = useState([
    {
      id: 1,
      fullName: "Sreeram",
      batch: "Batch-2023",
      passingYear: 2025,
      location: "Chennai",
      image: "profile-placeholder.png",
    },
    {
      id: 2,
      fullName: "Anish",
      batch: "Batch-2022",
      passingYear: 2024,
      location: "Hyderabad",
      image: "profile-placeholder.png",
    },
    {
      id: 3,
      fullName: "Santhosh",
      batch: "Batch-2021",
      passingYear: 2023,
      location: "Bangalore",
      image: "profile-placeholder.png",
    },
  ]);

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ batch: "", passingYear: "", location: "" });
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    const filtered = alumniData.filter(
      (alumni) =>
        (!filters.batch || alumni.batch === filters.batch) &&
        (!filters.passingYear || alumni.passingYear.toString() === filters.passingYear) &&
        (!filters.location || alumni.location === filters.location)
    );
    setFilteredAlumni(filtered);
  };

  return (
    <div className="adal-app-container">
      <Navbar />
      <TopBar />

      <div className="adal-alumni-container">
        <div className="adal-search-entries">
          <div className="adal-search-box">
            <FaSearch className="adal-search-icon" />
            <input type="text" placeholder="Search Alumni" />
          </div>

          <div className="adal-filter-toggle" onClick={toggleFilters}>
            <HiOutlineAdjustments />
          </div>

          <div className="adal-entries-dropdown">
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
          <div className="adal-filter-options">
            <div className="adal-filter-group">
              <select
                name="batch"
                value={filters.batch}
                onChange={handleFilterChange}
                className="adal-filter-dropdown"
              >
                <option value="">All Batch</option>
                <option value="Batch-2023">Batch-2023</option>
                <option value="Batch-2022">Batch-2022</option>
                <option value="Batch-2021">Batch-2021</option>
              </select>

              <select
                name="passingYear"
                value={filters.passingYear}
                onChange={handleFilterChange}
                className="adal-filter-dropdown"
              >
                <option value="">All Passing Year</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>

              <select
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="adal-filter-dropdown"
              >
                <option value="">All Locations</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
              </select>

              <button className="adal-search-btn" onClick={applyFilters}>
                Search Now
              </button>
            </div>
          </div>
        )}

        <table className="adal-alumni-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Batch</th>
              <th>Passing Year</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlumni.map((alumni) => (
              <tr key={alumni.id}>
                <td className="adal-profile-info">
                  <img src={alumni.image} alt="Profile" className="adal-profile-pic" />
                  {alumni.fullName}
                </td>
                <td>{alumni.batch}</td>
                <td>{alumni.passingYear}</td>
                <td>{alumni.location}</td>
                <td className="adal-action-icons">
                  <button><FaPhone className="adal-icon adal-phone-icon" /></button>
                  <button><FaEnvelope className="adal-icon" /></button>
                  <button><FaEye className="adal-icon" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="adal-table-footer">Showing {filteredAlumni.length} entries</div>

        <div className="adal-pagination">
          <button className="adal-page-btn">«</button>
          <button className="adal-page-btn adal-active">1</button>
          <button className="adal-page-btn">»</button>
        </div>
      </div>
    </div>
  );
}
