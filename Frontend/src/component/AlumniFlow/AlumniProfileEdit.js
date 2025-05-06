import React, { useState } from "react";
import "../../styles/AlumniFlow/AlumniProfileEdit.css";
import { Navbar } from "../../layout/AlumniFlow/Navbar";
import { TopBar } from "../../layout/AlumniFlow/Topbar";
import { useNavigate } from "react-router-dom";

export default function AdminProfileEdit() {
  const navigate = useNavigate();
  const [dob, setDob] = useState("2001-03-30");

  return (
    <>
      <div>
        <TopBar />
        <Navbar />

        <div className="alupe-alumni-container">
          <h2 className="alupe-profile-title">Profile</h2>
          <div className="alupe-tabs">
            <button className="alupe-tab" onClick={() => navigate("/alumniprofile")}>
              Profile
            </button>
            <button className="alupe-tab alupe-active">Edit Profile</button>
          </div>

          <div className="alupe-profile-card">
            <div className="alupe-alumni-profile alupe-single-section">
              <h2>Personal Info</h2>

              <div className="alupe-profile-info">
                <div className="alupe-avatar">
                  <div className="alupe-profile-pic">
                    <img src="" alt="Profile" />
                  </div>
                  <button className="alupe-edit-btn">✎</button>
                </div>

                <div className="alupe-info-fields">
                  <div className="alupe-field-group">
                    <input type="text" defaultValue="sreeram" />
                    <label>Full Name</label>
                  </div>

                  <div className="alupe-field-group">
                    <select defaultValue="Batch-2023">
                      <option value="Batch-2020">Batch-2020</option>
                      <option value="Batch-2021">Batch-2021</option>
                      <option value="Batch-2022">Batch-2022</option>
                      <option value="Batch-2023">Batch-2023</option>
                    </select>
                    <label>Batch</label>
                  </div>

                  <div className="alupe-field-group">
                    <select defaultValue="2025">
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                    </select>
                    <label>Passing Year</label>
                  </div>

                  <div className="alupe-field-group">
                    <select defaultValue="MCA">
                      <option value="CSE">CSE</option>
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="MCA">MCA</option>
                      <option value="IT">IT</option>
                    </select>
                    <label>Department</label>
                  </div>

                  <div className="alupe-field-group">
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

                  <div className="alupe-field-group">
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
              <div className="alupe-info-fields">
                <div className="alupe-field-group">
                  <input type="text" defaultValue="8056616753" />
                  <label>Phone Number</label>
                </div>
                <div className="alupe-field-group">
                  <input type="text" defaultValue="sreeram@gmail.com" />
                  <label>Email</label>
                </div>
                <div className="alupe-field-group">
                  <input type="text" defaultValue="Your LinkedIn Profile Url" />
                  <label>LinkedIn URL</label>
                </div>
              </div>

              <h2>Professional Info</h2>
              <div className="alupe-info-fields">
                <div className="alupe-field-group">
                  <input type="text" defaultValue="Your Current Company" />
                  <label>Company Name</label>
                </div>
                <div className="alupe-field-group">
                  <input type="text" defaultValue="Your Current Designation" />
                  <label>Designation</label>
                </div>
              </div>

              <h2>Address Info</h2>
              <div className="alupe-info-fields">
                <div className="alupe-field-group">
                  <input type="text" defaultValue="Current City" />
                  <label>City</label>
                </div>
                <div className="alupe-field-group">
                  <input type="text" defaultValue="Current State" />
                  <label>State</label>
                </div>
                <div className="alupe-field-group">
                  <input type="text" defaultValue="Current Country" />
                  <label>Country</label>
                </div>
                <div className="alupe-field-group">
                  <input type="text" defaultValue="Current Zip Code" />
                  <label>Zip Code</label>
                </div>
              </div>

              <div className="alupe-save-container">
                <button className="alupe-save-btn">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
