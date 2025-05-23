import React, { useEffect, useState } from "react";
import "../../styles/AlumniFlow/AlumniProfile.css";
import { Navbar } from "../../layout/AlumniFlow/Navbar";
import { TopBar } from "../../layout/AlumniFlow/Topbar";
import { useNavigate } from "react-router-dom";
import {
  getUserById,
  getBatchList,
  getDepartmentList,
  getPassedOutYearList,
  getGenderList,
  getBloodGroupList,
} from "../services/register";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const [batchNames, setBatchNames] = useState({});
  const [departments, setDepartments] = useState({});
  const [passedOutYears, setPassedOutYears] = useState({});
  const [genders, setGenders] = useState({});
  const [bloodGroups, setBloodGroups] = useState({});

  useEffect(() => {
    const fetchAllData = async () => {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      if (!token) return;

      try {
        const userRes = await getUserById("me");
        if (userRes?.userData) setUserData(userRes.userData);

        const [batchRes, deptRes, yearRes, genderRes, bloodRes] = await Promise.all([
          getBatchList(),
          getDepartmentList(),
          getPassedOutYearList(),
          getGenderList(),
          getBloodGroupList(),
        ]);

        setBatchNames(arrayToMap(batchRes.data, "batchName"));
        setDepartments(arrayToMap(deptRes.data, "department"));
        setPassedOutYears(arrayToMap(yearRes.data, "passedOutYear"));
        setGenders(arrayToMap(genderRes.data, "gender"));
        setBloodGroups(arrayToMap(bloodRes.data, "bloodGroup"));
      } catch (err) {
        console.error("Failed to fetch profile data:", err);
      }
    };

    fetchAllData();
  }, []);

  const arrayToMap = (array, labelKey) => {
    if (!Array.isArray(array)) return {};
    return array.reduce((acc, item) => {
      acc[item.id] = item[labelKey];
      return acc;
    }, {});
  };

  return (
    <div>
      <Navbar />
      <TopBar />
      <div className="alup-profile-container">
        <h2 className="alup-profile-title">Profile</h2>
        <div className="alup-tabs">
          <button className="alup-tab alup-active">Profile</button>
          <button
            className="alup-tab"
            onClick={() => navigate("/alumniprofileedit")}
          >
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
          </div>

          <div className="alup-profile-content">
            <div className="alup-profile-bio">
              <div className="alup-profile-section">
                <h4>Profile Bio</h4>
                <ul>
                  <li><strong>Full Name :</strong> {userData?.name || "-"}</li>
                  {/* <li><strong>Nick Name :</strong> {userData?.nickName || "-"}</li> */}
                  <li><strong>Email :</strong> {userData?.email || "-"}</li>
                  <li><strong>Phone :</strong> {userData?.mobileNumber || "-"}</li>
                  <li><strong>Batch :</strong> {batchNames[userData?.batchNameId] || "-"}</li>
                  <li><strong>Department :</strong> {departments[userData?.departmentId] || "-"}</li>
                  <li><strong>Passing Year :</strong> {passedOutYears[userData?.passedOutYearId] || "-"}</li>
                  <li><strong>Roll Number :</strong> {userData?.rollNumber || "-"}</li>
                  <li><strong>Date of Birth :</strong> {userData?.dateOfBirth || "-"}</li>
                  <li><strong>Gender :</strong> {genders[userData?.genderId] || "-"}</li>
                  <li><strong>Blood Group :</strong> {bloodGroups[userData?.bloodGroupId] || "-"}</li>
                  <li><strong>City :</strong> {userData?.city || "-"}</li>
                  <li><strong>State :</strong> {userData?.state || "-"}</li>
                  <li><strong>Country :</strong> India</li>
                  <li><strong>Zip Code :</strong> {userData?.pinCode || "-"}</li>
                  {/* <li>
                    <strong>Attachment :</strong>{" "}
                    {userData?.attachmentUrl ? (
                      <a
                        href={userData.attachmentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "-"
                    )}
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="alup-profile-extra">
              <div className="alup-professional-info alup-profile-section">
                <h4>Professional Info</h4>
                <ul>
                  <li><strong>Company Name :</strong> {userData?.companyName || "-"}</li>
                  <li><strong>Designation :</strong> {userData?.companyDesignation || "-"}</li>
                  <li><strong>Office Address :</strong> {userData?.companyAddress || "-"}</li>
                  <li>
                    <strong>LinkedIn :</strong>{" "}
                    {userData?.linkedInUrl ? (
                      <a
                        href={
                          userData.linkedInUrl.startsWith("http")
                            ? userData.linkedInUrl
                            : `https://${userData.linkedInUrl}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {userData.linkedInUrl}
                      </a>
                    ) : (
                      "-"
                    )}
                  </li>
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
