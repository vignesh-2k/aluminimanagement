import React, { useState } from "react";
import "../../styles/AdminFlow/AdminProfileEdit.css";
import { Navbar } from "../../layout/AdminFlow/Navbar";
import { TopBar } from "../../layout/AdminFlow/Topbar";
import { useNavigate } from "react-router-dom";

export default function AdminProfileEdit() {
  const navigate = useNavigate();
  const [dob, setDob] = useState("2001-03-30");

  return (
    <div >
      <TopBar />
      <Navbar />

      <div className="ape-content-container">
        <div className="ape-header">
          <h2 className="ape-title">Profile</h2>
          <div className="ape-tabs">
            <button 
              className="ape-tab" 
              onClick={() => navigate('/adminflow/adminprofile')}
            >
              Profile
            </button>
            <button className="ape-tab ape-active">Edit Profile</button>
          </div>
        </div>

        <div className="ape-profile-section">
          <h3 className="ape-section-title">Personal Info</h3>
          
          <div className="ape-profile-info">
            <div className="ape-avatar-container">
              <div className="ape-avatar">
                <div className="ape-profile-pic">
                  <img src="" alt="Profile" />
                </div>
                <button className="ape-edit-btn">✎</button>
              </div>
            </div>
            
            <div className="ape-info-grid">
              <div className="ape-field-group">
                <input type="text" defaultValue="sreeram" />
                <label>Full Name</label>
              </div>

              <div className="ape-field-group">
                <select defaultValue="MCA">
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="MCA">MCA</option>
                  <option value="IT">IT</option>
                </select>
                <label>Department</label>
              </div>

              <div className="ape-field-group">
                <select defaultValue="A+">
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <label>Blood Group</label>
              </div>

              <div className="ape-field-group">
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <label>DOB</label>
              </div>
            </div>
          </div>

          <h3 className="ape-section-title">Contact Info</h3>
          <div className="ape-info-grid">
            <div className="ape-field-group">
              <input type="text" defaultValue="8056616753" />
              <label>Phone Number</label>
            </div>
            <div className="ape-field-group">
              <input type="text" defaultValue="sreeram@gmail.com" />
              <label>Email</label>
            </div>
            <div className="ape-field-group">
              <input type="text" defaultValue="Your LinkedIn Profile Url" />
              <label>LinkedIn URL</label>
            </div>
          </div>

          <h3 className="ape-section-title">Address Info</h3>
          <div className="ape-info-grid">
            <div className="ape-field-group">
              <input type="text" defaultValue="Current City" />
              <label>City</label>
            </div>
            <div className="ape-field-group">
              <input type="text" defaultValue="Current State" />
              <label>State</label>
            </div>
            <div className="ape-field-group">
              <input type="text" defaultValue="Current Country" />
              <label>Country</label>
            </div>
            <div className="ape-field-group">
              <input type="text" defaultValue="Current Zip Code" />
              <label>Zip Code</label>
            </div>
          </div>

          <div className="ape-save-container">
            <button className="ape-save-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}