// import '../styles/Topbar.css';
import "../../styles/layout/AdminFlow/Topbar.css"
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiUser, FiLogOut } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import API from '../../api';
import { useEffect, useState, useRef, useContext } from 'react';
import { FaPowerOff } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";


export const TopBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { logout } = useContext(AuthContext);
    const [users, setUsers] = useState({ })

    const loadUserData = async () => {
        try {
            const response = await API.get('http://localhost:4000/users');
            setUsers(response.data.userData)
            return response.data;
        } catch (error) {
            console.log(error, "error fetching users data");
        }
    };

    const handleLogout = () => {
        logout();
    }

    useEffect(() => {
        loadUserData();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="top-bar">
            <div className="top-search-container">
                {/* <button className="top-find-alumni-btn">
                    Find an Alumni
                </button> */}
            </div>

            <div className="top-user-info" ref={dropdownRef}>
                <HiOutlineUserCircle className="top-user-icon" />

                <div className="top-welcome-text">
                    <span>Welcome</span>
                    {/* <span className="top-user-name">{users.name} </span> */}
                </div>

                <div>
                    <FaPowerOff 
                    size={30}
                    style={{ cursor :'pointer'}}
                    onClick={() => handleLogout()}
                    />
                </div>

                {/* <RiArrowDownSLine className="top-user-icon" onClick={() => setDropdownOpen(!dropdownOpen)} />

                {dropdownOpen && (
                    <div className="top-dropdown-menu">
                        <div className="top-dropdown-item">
                            <FiUser className="top-dropdown-icon" />
                            <span>Profile</span>
                        </div>
                        <div className="top-dropdown-item">
                            <FiLogOut className="top-dropdown-icon" />
                            <span>Logout</span>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
};
