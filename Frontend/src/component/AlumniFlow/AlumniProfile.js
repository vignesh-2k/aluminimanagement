import React from "react";
import "../../styles/AlumniFlow/AlumniProfile.css";
import { Navbar } from "../../layout/AlumniFlow/Navbar";
import { TopBar } from "../../layout/AlumniFlow/Topbar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <TopBar />
      <div className="alup-profile-container">
        <h2 className="alup-profile-title">Profile</h2>
        <div className="alup-tabs">
          <button className="alup-tab alup-active">Profile</button>
          <button className="alup-tab" onClick={() => navigate('/alumniprofileedit')}>
            Edit Profile
          </button>
        </div>

        <div className="alup-profile-card">
          <div className="alup-profile-header">
            <div className="alup-profile-image-placeholder">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="alup-profile-image"
              />
            </div>
            <h3 className="alup-profile-name">Alumni</h3>
          </div>

          <div className="alup-profile-content">
            <div className="alup-profile-bio">
              <div className="alup-profile-section">
                <h4>Profile Bio</h4>
                <ul>
                  <li><strong>Full Name :</strong> Alumni</li>
                  <li><strong>Nick Name :</strong></li>
                  <li><strong>Email :</strong> alumni@gmail.com</li>
                  <li><strong>Phone :</strong> 0</li>
                  <li><strong>Batch :</strong></li>
                  <li><strong>Department :</strong></li>
                  <li><strong>Passing Year :</strong></li>
                  <li><strong>Roll Number :</strong></li>
                  <li><strong>Date of Birth :</strong></li>
                  <li><strong>Gender :</strong></li>
                  <li><strong>City :</strong></li>
                  <li><strong>State :</strong></li>
                  <li><strong>Country :</strong></li>
                  <li><strong>Zip Code :</strong></li>
                  <li><strong>Attachment :</strong> <a >View</a></li>
                </ul>
              </div>
            </div>

            <div className="alup-profile-extra">
              <div className="alup-professional-info alup-profile-section">
                <h4>Professional Info</h4>
                <ul>
                  <li><strong>Company Name :</strong></li>
                  <li><strong>Designation :</strong></li>
                  <li><strong>Office Address :</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
