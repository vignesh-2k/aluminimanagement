import React from "react";
// import "../styles/AdminProfile.css";
import "../../styles/AdminFlow/AdminProfile.css";
import { Navbar } from "../../layout/AdminFlow/Navbar";
import { TopBar } from "../../layout/AdminFlow/Topbar";
// import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
    const navigate = useNavigate ();

  return (
    <div>
      <Navbar />
      <TopBar />
      <div className="adp-profile-container">
        <h2 className="adp-profile-title">Profile</h2>
        <div className="adp-tabs">
          <button className="adp-tab adp-active">Profile</button>
          <button className="adp-tab" onClick={() => navigate('/adminflow/adminprofileedit')}>Edit Profile</button>
        </div>

        <div className="adp-profile-card">
          <div className="adp-profile-header">
            <div className="adp-profile-image-placeholder">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="adp-profile-image"
              />
            </div>
            <h3 className="adp-profile-name">Administrator Doe</h3>
          </div>

          <div className="adp-profile-content">
            <div className="adp-profile-bio">
              <div className="adp-profile-section">
                <h4>Profile Bio</h4>
                <ul>
                  <li><strong>Full Name :</strong> Administrator Doe</li>
                  <li><strong>Nick Name :</strong></li>
                  <li><strong>Email :</strong> admin@gmail.com</li>
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
                  <li><strong>Attachment :</strong> <a href=" ">View</a></li>
                </ul>
              </div>
            </div>

            <div className="adp-profile-extra">
              <div className="adp-professional-info adp-profile-section">
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

export default AdminProfile;
