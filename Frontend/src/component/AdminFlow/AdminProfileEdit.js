import React, { useState } from "react";
// import "../styles/AdminProfileEdit.css";
import "../../styles/AdminFlow/AdminProfileEdit.css";
import { Navbar } from "../../layout/AdminFlow/Navbar";
import { TopBar } from "../../layout/AdminFlow/Topbar";
import { useNavigate } from "react-router-dom";


export default function AdminProfileEdit () {
    const navigate = useNavigate ();

  const [dob, setDob] = useState("2001-03-30");

  return (
    <>
      <div>
        {/* Topbar and Navbar */}
        <TopBar />
        <Navbar />
        

        {/* Combined Alumni Profile Section */}
        <div className="ape-alumni-container">
            <h2 style={{
                
                  marginBottom: "-20px",
                  fontSize: "18px",
                  color: "#333",
                  textAlign: "left"
            
                
            }}className="ape-profile-title">Profile</h2>
            <div className="ape-tabs">
          <button className="ape-tab" onClick={() => navigate('/adminflow/adminprofile')}>Profile</button>
          <button className="ape-tab ape-active" >Edit Profile</button>
        </div>


          <div className="ape-alumni-profile pl-single-section">
            <h2>Personal Info</h2>

            {/* Profile Info */}
            <div className="ape-profile-info">
              <div className="ape-avatar">
                <div className="ape-profile-pic">
                  <img src="" alt="Profile" />
                </div>
                <button className="ape-edit-btn">✎</button>
              </div>
              <div className="ape-info-fields">
                <div className="ape-field-group">
                  <input type="text" defaultValue="sreeram" />
                  <label>Full Name</label>
                </div>

                {/* Batch Dropdown */}
                <div className="ape-field-group">
                  <select defaultValue="Batch-2023">
                    <option value="Batch-2020">Batch-2020</option>
                    <option value="Batch-2021">Batch-2021</option>
                    <option value="Batch-2022">Batch-2022</option>
                    <option value="Batch-2023">Batch-2023</option>
                  </select>
                  <label>Batch</label>
                </div>

                {/* Passing Year Dropdown */}
                <div className="ape-field-group">
                  <select defaultValue="2025">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                  <label>Passing Year</label>
                </div>

                {/* Department Dropdown */}
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

                {/* Blood Group Dropdown */}
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

                {/* DOB Date Picker */}
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

            <h2>Contact Info</h2>

            {/* Contact Info */}
            <div className="ape-info-fields">
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

            <h2>Professional Info</h2>

            {/* Professional Info */}
            <div className="ape-info-fields">
              <div className="ape-field-group">
                <input type="text" defaultValue="Your Current Company" />
                <label>Company Name</label>
              </div>
              <div className="ape-field-group">
                <input type="text" defaultValue="Your Current Designation" />
                <label>Designation</label>
              </div>
            </div>

            <h2>Address Info</h2>

            {/* Address Info */}
            <div className="ape-info-fields">
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

            {/* Save Button */}
            <div className="ape-save-container">
              <button className="ape-save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
