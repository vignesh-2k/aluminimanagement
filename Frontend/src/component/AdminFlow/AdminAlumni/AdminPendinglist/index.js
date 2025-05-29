import { useEffect, useState } from "react";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import "../../../../styles/AdminFlow/AdminAlumni/AdminProfileDetails.css";
import { FaSearch, FaPhone, FaEnvelope, FaEye, FaEdit } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { 
  getpendinguser, 
  getDepartmentList, 
  getBatchList, 
  getPassedOutYearList,
  approvePendingUser,
  rejectPendingUser
} from "../../../services/adminflow/pendinguser";

export default function PendingList() {
  const navigate = useNavigate();
  const [alumniData, setAlumniData] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ batch: "", passingYear: "", department: "" });

  // Dropdown options
  const [departments, setDepartments] = useState([]);
  const [batches, setBatches] = useState([]);
  const [passingYears, setPassingYears] = useState([]);

  useEffect(() => {
    loadDropdownData();
    fetchPendingUsers();
  }, []);

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
        status: "Pending",
        image: "profile-placeholder.png",
      }));
      setAlumniData(transformed);
      setFilteredAlumni(transformed);
    }
  };

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    const filtered = alumniData.filter((alumni) =>
      (!filters.batch || alumni.batch.toString() === filters.batch) &&
      (!filters.passingYear || alumni.passingYear.toString() === filters.passingYear) &&
      (!filters.department || alumni.department.toString() === filters.department)
    );
    setFilteredAlumni(filtered);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      if (newStatus === "Approved") {
        await approvePendingUser(id);
        navigate('/AdminFlow/AdminAlumni/AdminAllList');  // Navigate to AllList page
      } else if (newStatus === "Rejected") {
        await rejectPendingUser(id);
      }
      // Refresh the pending list after status change
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

  return (
    <div className="pl-app-container">
      <Navbar />
      <TopBar />

      <div className="pl-alumni-container">
        <div className="pl-search-entries">
          <div className="pl-search-box">
            <FaSearch className="pl-search-icon" />
            <input type="text" placeholder="Search Alumni" />
          </div>

          <div className="pl-filter-toggle" onClick={toggleFilters}>
            <HiOutlineAdjustments />
          </div>

          <div className="pl-entries-dropdown">
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
          <div className="pl-filter-options">
            <div className="pl-filter-group">
              <select name="batch" value={filters.batch} onChange={handleFilterChange} className="pl-filter-dropdown">
                <option value="">All Batch</option>
                {batches.map((b) => (
                  <option key={b.id} value={b.id}>{b.batchName}</option>
                ))}
              </select>

              <select name="passingYear" value={filters.passingYear} onChange={handleFilterChange} className="pl-filter-dropdown">
                <option value="">All Passing Year</option>
                {passingYears.map((y) => (
                  <option key={y.id} value={y.id}>{y.passedOutYear}</option>
                ))}
              </select>

              <select name="department" value={filters.department} onChange={handleFilterChange} className="pl-filter-dropdown">
                <option value="">All Department</option>
                {departments.map((d) => (
                  <option key={d.id} value={d.id}>{d.department}</option>
                ))}
              </select>

              <button className="pl-search-btn" onClick={applyFilters}>Search Now</button>
            </div>
          </div>
        )}

        <table className="pl-alumni-table">
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
                <td>{passingYears.find(y => y.id === alumni.passingYear)?.passedOutYear || "Unknown"}</td>
                <td>{getDepartmentName(alumni.department)}</td>
                <td>
                  <select
                    className={`pl-status-dropdown ${alumni.status.toLowerCase()}-status`}
                    value={alumni.status}
                    onChange={(e) => handleStatusChange(alumni.id, e.target.value)}
                  >
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td className="pl-action-icons">
                  <button><FaPhone className="pl-icon pl-phone-icon" /></button>
                  <button><FaEnvelope className="pl-icon" /></button>
                  <button><FaEye className="pl-icon" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pl-table-footer">Showing {filteredAlumni.length} entries</div>

        <div className="pl-pagination">
          <button className="pl-page-btn">«</button>
          <button className="pl-page-btn active">1</button>
          <button className="pl-page-btn">»</button>
        </div>
      </div>
    </div>
  );
}