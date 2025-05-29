import { Link } from "react-router-dom";
import { useState } from 'react';
import '../../styles/layout/AdminFlow/Navbar.css'
import { IoIosSettings } from "react-icons/io";
import { BsCalendar4Event } from "react-icons/bs";
import { MdWorkOutline, MdOutlineDashboard, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaRegIdCard  } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  
  const [openDropdown, setOpenDropdown] = useState("");

  const handleToggle = (menu) => {
    setOpenDropdown(prev => prev === menu ? "" : menu);
  };

  return (
    <nav className="db-nav">
      <ul className="db-nav-list">
        <li className="db-nav-item">
          <Link to="/adminflow/admindashboard" className="db-nav-link">
            <MdOutlineDashboard className="db-nav-icon" />
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <li className="db-nav-item">
          <Link to="/adminflow/adminhome" className="db-nav-link">
            <AiOutlineHome className="db-nav-icon" />
            <span>Home</span>
          </Link>
        </li> */}

        {/* Event Dropdown */}
        {/* <li className="db-nav-item db-nav-dropdown" onClick={() => handleToggle("event")}>
          <div className="db-nav-link">
            <BsCalendar4Event className="db-nav-icon" />
            <span>Event</span>
            <div className="db-nav-arrow">
              {openDropdown === "event" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>
          <ul className={`dropdown-list ${openDropdown === "event" ? "show" : ""}`}>
            <li><Link to="/adminflow/admincreateevent">Create Event</Link></li>
            <li><Link to="/adminflow/adminallevent">All Events</Link></li>
            <li><Link to="/adminflow/adminpendingevent">Pending Events</Link></li>
            <li><Link to="/adminflow/adminmyevent">My Events</Link></li>
            <li><Link to="/adminflow/adminmyticket">My Ticket</Link></li>

          </ul>
        </li> */}

        <li className="db-nav-item">
          <Link to="/adminflow/adminallevent" className="db-nav-link">
            <BsCalendar4Event className="db-nav-icon" />
            <span>All Events</span>
          </Link>
        </li>

        {/* Job Post Dropdown */}
        {/* <li className="db-nav-item db-nav-dropdown" onClick={() => handleToggle("job")}>
          <div className="db-nav-link">
            <MdWorkOutline className="db-nav-icon" />
            <span>Job Post</span>
            <div className="db-nav-arrow">
              {openDropdown === "job" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>
          <ul className={`dropdown-list ${openDropdown === "job" ? "show" : ""}`}>
            <li><Link to="/adminflow/admincreatejobpost">Create Post</Link></li>
            <li><Link to="/adminflow/adminallpost">All Posts</Link></li>
            <li><Link to="/adminflow/adminpendingpost">Pending Posts</Link></li>
            <li><Link to="/adminflow/adminmypost">My Posts</Link></li>
          </ul>
        </li> */}
         <li className="db-nav-item">
          <Link to="/adminflow/adminallpost" className="db-nav-link">
            <MdWorkOutline className="db-nav-icon" />
            <span>All JobPost</span>
          </Link>
        </li>

         {/* Job Post Dropdown */}
         {/* <li className="db-nav-item db-nav-dropdown" onClick={() => handleToggle("intern")}>
          <div className="db-nav-link">
            <FaRegIdCard  className="db-nav-icon" />
            <span>Internship</span>
            <div className="db-nav-arrow">
              {openDropdown === "intern" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>
          <ul className={`dropdown-list ${openDropdown === "intern" ? "show" : ""}`}>
            <li><Link to="/adminflow/adminallpost">All Interns</Link></li>
            <li><Link to="/adminflow/adminpendingpost">Pending Interns</Link></li>
          </ul>
        </li> */}

        

        {/* Alumni Dropdown */}
        <li className="db-nav-item db-nav-dropdown" onClick={() => handleToggle("alumni")}>
          <div className="db-nav-link">
            <HiOutlineUserGroup className="db-nav-icon" />
            <span>Alumni</span>
            <div className="db-nav-arrow">
              {openDropdown === "alumni" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>
          <ul className={`dropdown-list ${openDropdown === "alumni" ? "show" : ""}`}>
            <li><Link to="/adminflow/adminalumni/adminalllist">All List</Link></li>
            <li><Link to="/adminflow/adminalumni/adminpendinglist">Pending List</Link></li>
          </ul>
        </li>
         {/* <li className="db-nav-item">
          <Link to="/adminflow/adminalumni/adminalllist" className="db-nav-link">
            <HiOutlineUserGroup className="db-nav-icon" />
            <span>All Alumni</span>
          </Link>
        </li> */}


        {/* <li className="db-nav-item">
          <Link to="/adminflow/AdminTransaction" className="db-nav-link">
            <FaMoneyBillTrendUp className="db-nav-icon" />
            <span>Transaction List</span>
          </Link>
        </li> */}

        <li className="db-nav-item">
          <Link to="/adminflow/adminprofile" className="db-nav-link">
            <CgProfile className="db-nav-icon" />
            <span>Profile</span>
          </Link>
        </li>
        <li className="db-nav-item">
          <Link to="/adminflow/adminsettings/adminchangepassword" className="db-nav-link">
            <IoIosSettings className="db-nav-icon" />
            <span>Settings</span>
          </Link>
        </li>
        {/* Settings Dropdown */}
        {/* <li className="db-nav-item db-nav-dropdown" onClick={() => handleToggle("settings")}>
          <div className="db-nav-link">
            <IoIosSettings className="db-nav-icon" />
            <span>Settings</span>
            <div className="db-nav-arrow">
              {openDropdown === "settings" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>
          <ul className={`dropdown-list ${openDropdown === "settings" ? "show" : ""}`}>
            <li><Link to="/adminflow/adminsettings/adminchangepassword">Change Password</Link></li>
            <li><Link to="/adminflow/adminsettings/adminbatchsetting">Batch Setting</Link></li>
            <li><Link to="/adminflow/adminsettings/admindepartmentsetting">Department Setting</Link></li>
            <li><Link to="/adminflow/adminsettings/adminpassingyearsetting">Passing Year Setting</Link></li>
          </ul>
        </li> */}
{/* 
        <li className="db-nav-item">
          <Link to="/logout" className="db-nav-link">
            <FiLogOut className="db-nav-icon" />
            <span>Logout</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};
