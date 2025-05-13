import React from "react";
import "../../../styles/AdminFlow/AdminHome/index.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase, FaMoneyBill } from "react-icons/fa";
import { PiCalendarFill } from "react-icons/pi";
import { Navbar } from "../../../layout/AdminFlow/Navbar";
import { TopBar } from "../../../layout/AdminFlow/Topbar";

const AdminHome = () => {
  return (
    <>
      <Navbar />
      <TopBar />
      <div className="adh-container">
        <div className="adh-columns">
          {/* Column 1 - Events */}
          <div className="adh-section">
            <div className="adh-header">
              <h2>Upcoming Events</h2>
              <span className="adh-seeall">See All →</span>
            </div>
            <div className="adh-event-card">
              <img
                className="adh-event-image"
                src="https://img.freepik.com/free-photo/group-graduates-throwing-caps-air_53876-102626.jpg"
                alt="event"
              />
              <div className="adh-tags">
                <span className="adh-tag adh-free">Free</span>
                <span className="adh-tag adh-workshop">Workshop</span>
              </div>
              <div className="adh-event-details">
                <p className="adh-event-date">May 10, 12:00 AM</p>
                <p className="adh-event-title">Quiz</p>
                <p className="adh-location">
                  <FaLocationDot className="adh-icon" /> Chennai
                </p>
                <a href="#" className="adh-link">
                  Reservation
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Jobs */}
          <div className="adh-section">
            <div className="adh-header">
              <h2>Jobs</h2>
              <span className="adh-seeall">See All →</span>
            </div>
            <div className="adh-job-card">
              <div className="adh-job-header">
                <img
                  className="adh-job-avatar"
                  src="https://img.freepik.com/free-photo/group-graduates-throwing-caps-air_53876-102626.jpg"
                  alt="avatar"
                />
                <div>
                  <p className="adh-job-title">Java Developer</p>
                  <p className="adh-job-date">
                    <PiCalendarFill className="adh-icon" />
                    Monday, May 5, 2025
                  </p>
                </div>
              </div>
              <p className="adh-job-desc">Job description goes here.</p>
              <div className="adh-job-meta">
                <p><FaBriefcase className="adh-icon" /> Full Time</p>
                <p><FaLocationDot className="adh-icon" /> Trichy</p>
                <p><FaMoneyBill className="adh-icon" /> 45000</p>
              </div>
              <a href="#" className="adh-link">More Details</a>
            </div>
          </div>

          {/* Column 3 - Interns */}
          {/* <div className="adh-section">
            <div className="adh-header">
              <h2>Interns</h2>
              <span className="adh-seeall">See All →</span>
            </div>
            <div className="adh-job-card">
              <div className="adh-job-header">
                <img
                  className="adh-job-avatar"
                  src="https://img.freepik.com/free-photo/group-graduates-throwing-caps-air_53876-102626.jpg"
                  alt="avatar"
                />
                <div>
                  <p className="adh-job-title">React Intern</p>
                  <p className="adh-job-date">
                    <PiCalendarFill className="adh-icon" />
                    Tuesday, May 6, 2025
                  </p>
                </div>
              </div>
              <p className="adh-job-desc">Internship opportunity description.</p>
              <div className="adh-job-meta">
                <p><FaBriefcase className="adh-icon" /> Internship</p>
                <p><FaLocationDot className="adh-icon" /> Coimbatore</p>
                <p><FaMoneyBill className="adh-icon" /> 10000</p>
              </div>
              <a href="#" className="adh-link">More Details</a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AdminHome;
