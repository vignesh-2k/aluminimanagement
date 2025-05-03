import React from 'react';
import '../../../../styles/AlumniFlow/Settings/ChangePassword.css';
import { TopBar } from '../../../../layout/AlumniFlow/Topbar';
import { Navbar } from '../../../../layout/AlumniFlow/Navbar';

const ChangePassword = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <div className="cp-container">
          <h1 className="cp-heading">Settings</h1>
          <div className="cp-card">
            <div className="cp-title-section">
              <h2 className="cp-title">Change Password</h2>
              <p className="cp-subtitle">Change or reset your account password</p>
            </div>
            <form className="cp-form">
              <div className="cp-form-group">
                <div className="cp-input-wrapper">
                  <label htmlFor="currentPassword" className="cp-label">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    placeholder="Enter Current Password"
                    className="cp-input"
                    required
                  />
                </div>
                <div className="cp-input-wrapper">
                  <label htmlFor="newPassword" className="cp-label">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="Enter New Password"
                    className="cp-input"
                    required
                  />
                </div>
                <div className="cp-input-wrapper">
                  <label htmlFor="confirmPassword" className="cp-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="cp-input"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="cp-button">Save Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
