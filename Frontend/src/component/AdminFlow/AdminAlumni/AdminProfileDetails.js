import React, { useState } from "react";
// import "../../styles/Alumni/AlumniProfile.css";
import "../../../styles/AdminFlow/AdminAlumni/AdminProfileDetails.css";
import { Navbar } from "../../../layout/AdminFlow/Navbar";
import { TopBar } from "../../../layout/AdminFlow/Topbar";

export default function AdminProfileDetails() {
  const [dob, setDob] = useState("2001-03-30");

  return (
    <>
      <div>
        {/* Topbar and Navbar */}
        <TopBar />
        <Navbar />
        

        {/* Combined Alumni Profile Section */}
        <div className="ap-alumni-container">
          <div className="ap-alumni-profile pl-single-section">
            <h2 style={{ 
                marginBottom: "-20px",
                fontSize: "18px",
                color: "#333",
                textAlign: "left"
              }}>Personal Info</h2>

            {/* Profile Info */}
            <div className="ap-profile-info">
              <div className="ap-avatar">
                <div className="ap-profile-pic">
                  <img src="" alt="Profile" />
                </div>
                <button className="ap-edit-btn">✎</button>
              </div>
              <div className="ap-info-fields">
                <div className="ap-field-group">
                  <input type="text" defaultValue="sreeram" />
                  <label>Full Name</label>
                </div>

                {/* Batch Dropdown */}
                <div className="ap-field-group">
                  <select defaultValue="Batch-2023">
                    <option value="Batch-2020">Batch-2020</option>
                    <option value="Batch-2021">Batch-2021</option>
                    <option value="Batch-2022">Batch-2022</option>
                    <option value="Batch-2023">Batch-2023</option>
                  </select>
                  <label>Batch</label>
                </div>

                {/* Passing Year Dropdown */}
                <div className="ap-field-group">
                  <select defaultValue="2025">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                  <label>Passing Year</label>
                </div>

                {/* Department Dropdown */}
                <div className="ap-field-group">
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
                <div className="ap-field-group">
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
                <div className="ap-field-group">
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
            <div className="ap-info-fields">
              <div className="ap-field-group">
                <input type="text" defaultValue="8056616753" />
                <label>Phone Number</label>
              </div>
              <div className="ap-field-group">
                <input type="text" defaultValue="sreeram@gmail.com" />
                <label>Email</label>
              </div>
              <div className="ap-field-group">
                <input type="text" defaultValue="Your LinkedIn Profile Url" />
                <label>LinkedIn URL</label>
              </div>
            </div>

            <h2>Professional Info</h2>

            {/* Professional Info */}
            <div className="ap-info-fields">
              <div className="ap-field-group">
                <input type="text" defaultValue="Your Current Company" />
                <label>Company Name</label>
              </div>
              <div className="ap-field-group">
                <input type="text" defaultValue="Your Current Designation" />
                <label>Designation</label>
              </div>
            </div>

            <h2>Address Info</h2>

            {/* Address Info */}
            <div className="ap-info-fields">
              <div className="ap-field-group">
                <input type="text" defaultValue="Current City" />
                <label>City</label>
              </div>
              <div className="ap-field-group">
                <input type="text" defaultValue="Current State" />
                <label>State</label>
              </div>
              <div className="ap-field-group">
                <input type="text" defaultValue="Current Country" />
                <label>Country</label>
              </div>
              <div className="ap-field-group">
                <input type="text" defaultValue="Current Zip Code" />
                <label>Zip Code</label>
              </div>
            </div>

            {/* Save Button */}
            <div className="ap-save-container">
              <button className="ap-save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
