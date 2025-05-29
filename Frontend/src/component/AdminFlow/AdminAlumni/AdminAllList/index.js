import { useState, useEffect } from "react";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import "../../../../styles/AdminFlow/AdminAlumni/AdminAllList.css";
import { FaSearch, FaPhone, FaEnvelope, FaEye } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";
import {
  getuser,
  getBatchList,
  getPassedOutYearList,
  getDepartmentList,
} from "../../../services/adminflow/pendinguser";

export default function AllList() {
  const [alumniData, setAlumniData] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    batch: "",
    passingYear: "",
    department: "",
  });

  // Dropdown options
  const [batches, setBatches] = useState([]);
  const [passingYears, setPassingYears] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Load dropdown data
    const loadDropdownData = async () => {
      try {
        const batchRes = await getBatchList();
        const yearRes = await getPassedOutYearList();
        const deptRes = await getDepartmentList();

        if (batchRes?.data) setBatches(batchRes.data);
        if (yearRes?.data) setPassingYears(yearRes.data);
        if (deptRes?.data) setDepartments(deptRes.data);
      } catch (error) {
        console.error("Dropdown loading error", error);
      }
    };

    // Fetch alumni data
    const fetchUsers = async () => {
      const data = await getuser();
      if (data && data.users) {
        const mapped = data.users.map((user) => ({
          id: user.id,
          fullName: user.name,
          batch: user.batchNameId,
          passingYear: user.passedOutYearId,
          department: user.departmentId,
          image: "profile-placeholder.png",
        }));
        setAlumniData(mapped);
        setFilteredAlumni(mapped);
      }
    };

    loadDropdownData();
    fetchUsers();
  }, []);

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    const filtered = alumniData.filter(
      (alumni) =>
        (!filters.batch || alumni.batch.toString() === filters.batch) &&
        (!filters.passingYear ||
          alumni.passingYear.toString() === filters.passingYear) &&
        (!filters.department ||
          alumni.department.toString() === filters.department)
    );
    setFilteredAlumni(filtered);
  };

  const getBatchName = (id) => {
    const batch = batches.find((b) => b.id === id);
    return batch?.batchName || "Unknown";
  };

  const getPassingYear = (id) => {
    const year = passingYears.find((y) => y.id === id);
    return year?.passedOutYear || "Unknown";
  };

  const getDepartmentName = (id) => {
    const dept = departments.find((d) => d.id === id);
    return dept?.department || "Unknown";
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
                {batches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.batchName}
                  </option>
                ))}
              </select>

              <select
                name="passingYear"
                value={filters.passingYear}
                onChange={handleFilterChange}
                className="adal-filter-dropdown"
              >
                <option value="">All Passing Year</option>
                {passingYears.map((y) => (
                  <option key={y.id} value={y.id}>
                    {y.passedOutYear}
                  </option>
                ))}
              </select>

              <select
                name="department"
                value={filters.department}
                onChange={handleFilterChange}
                className="adal-filter-dropdown"
              >
                <option value="">All Department</option>
                {departments.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.department}
                  </option>
                ))}
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
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlumni.map((alumni) => (
              <tr key={alumni.id}>
                <td>
                  {alumni.fullName}
                </td>
                <td>{getBatchName(alumni.batch)}</td>
                <td>{getPassingYear(alumni.passingYear)}</td>
                <td>{getDepartmentName(alumni.department)}</td>
                <td className="adal-action-icons">
                  <button>
                    <FaPhone className="adal-icon adal-phone-icon" />
                  </button>
                  <button>
                    <FaEnvelope className="adal-icon" />
                  </button>
                  <button>
                    <FaEye className="adal-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="adal-table-footer">
          Showing {filteredAlumni.length} entries
        </div>

        <div className="adal-pagination">
          <button className="adal-page-btn">«</button>
          <button className="adal-page-btn adal-active">1</button>
          <button className="adal-page-btn">»</button>
        </div>
      </div>
    </div>
  );
}