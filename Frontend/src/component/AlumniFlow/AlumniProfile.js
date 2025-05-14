import React, { useEffect, useState } from "react";
import "../../styles/AlumniFlow/AlumniProfile.css";
import { Navbar } from "../../layout/AlumniFlow/Navbar";
import { TopBar } from "../../layout/AlumniFlow/Topbar";
import { useNavigate } from "react-router-dom";
import { getuser } from "../services/register";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getuser();
      if (response?.userData) {
        setUserData(response.userData);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Navbar />
      <TopBar />
      <div className="alup-profile-container">
        <h2 className="alup-profile-title">Profile</h2>
        <div className="alup-tabs">
          <button className="alup-tab alup-active">Profile</button>
          <button className="alup-tab" onClick={() => navigate("/alumniprofileedit")}>
            Edit Profile
          </button>
        </div>

        <div className="alup-profile-card">
          <div className="alup-profile-header">
            <div className="alup-profile-image-placeholder">
              <img
                src="/assets/default-user.jpg"
                alt="Profile"
                className="alup-profile-image"
              />
            </div>
            <h3 className="alup-profile-name">{userData?.name || "Alumni"}</h3>
            <p className="alup-profile-email">{userData?.email}</p>
          </div>

          <div className="alup-profile-content">
            <div className="alup-profile-bio">
              <div className="alup-profile-section">
                <h4>Profile Bio</h4>
                <ul>
                  <li><strong>Full Name :</strong> {userData?.name || "-"}</li>
                  <li><strong>Nick Name :</strong> {userData?.nickName || "-"}</li>
                  <li><strong>Email :</strong> {userData?.email || "-"}</li>
                  <li><strong>Phone :</strong> {userData?.mobileNumber || "-"}</li>
                  <li><strong>Batch :</strong> {userData?.batch || "-"}</li>
                  <li><strong>Department :</strong> {userData?.department || "-"}</li>
                  <li><strong>Passing Year :</strong> {userData?.passingYear || "-"}</li>
                  <li><strong>Roll Number :</strong> {userData?.rollNumber || "-"}</li>
                  <li><strong>Date of Birth :</strong> {userData?.dob || "-"}</li>
                  <li><strong>Gender :</strong> {userData?.gender || "-"}</li>
                  <li><strong>City :</strong> {userData?.city || "-"}</li>
                  <li><strong>State :</strong> {userData?.state || "-"}</li>
                  <li><strong>Country :</strong> {userData?.country || "-"}</li>
                  <li><strong>Zip Code :</strong> {userData?.zipCode || "-"}</li>
                  <li>
                    <strong>Attachment :</strong>{" "}
                    {userData?.attachmentUrl ? (
                      <a href={userData.attachmentUrl} target="_blank" rel="noopener noreferrer">View</a>
                    ) : "-"}
                  </li>
                </ul>
              </div>
            </div>

            <div className="alup-profile-extra">
              <div className="alup-professional-info alup-profile-section">
                <h4>Professional Info</h4>
                <ul>
                  <li><strong>Company Name :</strong> {userData?.companyName || "-"}</li>
                  <li><strong>Designation :</strong> {userData?.designation || "-"}</li>
                  <li><strong>Office Address :</strong> {userData?.officeAddress || "-"}</li>
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
