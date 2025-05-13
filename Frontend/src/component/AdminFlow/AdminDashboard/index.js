import React from 'react';
import '../../../styles/AdminFlow/AdminDashboard.css';
import AdminMetricCard from './AdminMetricCard';
import { Navbar } from '../../../layout/AdminFlow/Navbar';
import { TopBar } from '../../../layout/AdminFlow/Topbar';
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { BsCalendar4Event } from "react-icons/bs";
import { FaLocationDot, FaMoneyBill, FaBriefcase } from "react-icons/fa6";
import { PiCalendarFill } from "react-icons/pi";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <TopBar />
      <div className="add-dashboard">
        <h2 className="add-heading">Dashboard</h2>

        {/* Metrics Section */}
        <div className="add-metrics">
          <div className="add-metric-card">
            <div className="add-metric-icon"><HiOutlineUserGroup /></div>
            <div className="add-metric-content">
              <p className="add-metric-title">Total Alumni</p>
              <p className="add-metric-value">0</p>
            </div>
          </div>

          <div className="add-metric-card">
            <div className="add-metric-icon"><MdWorkOutline /></div>
            <div className="add-metric-content">
              <p className="add-metric-title">Total Jobs</p>
              <p className="add-metric-value">0</p>
            </div>
          </div>

          <div className="add-metric-card">
            <div className="add-metric-icon"><BsCalendar4Event /></div>
            <div className="add-metric-content">
              <p className="add-metric-title">Upcoming Events</p>
              <p className="add-metric-value">0</p>
            </div>
          </div>
        </div>

        {/* Events & Jobs */}
        <div className="add-columns">
          {/* Upcoming Events */}
          <div className="add-section">
            <div className="add-header">
              <h2>Upcoming Events</h2>
              <span className="add-seeall">See All →</span>
            </div>
            <div className="add-event-card">
              <img
                className="add-event-image"
                src="https://img.freepik.com/free-photo/group-graduates-throwing-caps-air_53876-102626.jpg"
                alt="event"
              />
              <div className="add-tags">
                <span className="add-tag add-free">Free</span>
                <span className="add-tag add-workshop">Workshop</span>
              </div>
              <div className="add-event-details">
                <p className="add-event-date">May 10, 12:00 AM</p>
                <p className="add-event-title">Quiz</p>
                <p className="add-location">
                  <FaLocationDot className="add-icon" /> Chennai
                </p>
                <a href="#" className="add-link">Reservation</a>
              </div>
            </div>
          </div>

          {/* Jobs */}
          <div className="add-section add-jobs-section">
            <div className="add-header">
              <h2>Jobs</h2>
              <span className="add-seeall">See All →</span>
            </div>
            <div className="add-job-card">
              <div className="add-job-header">
                <img
                  className="add-job-avatar"
                  src="https://img.freepik.com/free-photo/group-graduates-throwing-caps-air_53876-102626.jpg"
                  alt="avatar"
                />
                <div>
                  <p className="add-job-title">Java Developer</p>
                  <p className="add-job-date">
                    <PiCalendarFill className="add-icon" />
                    Monday, May 5, 2025
                  </p>
                </div>
              </div>
              <p className="add-job-desc">Job description goes here.</p>
              <div className="add-job-meta">
                <p><FaBriefcase className="add-icon" /> Full Time</p>
                <p><FaLocationDot className="add-icon" /> Trichy</p>
                <p><FaMoneyBill className="add-icon" /> ₹45,000</p>
              </div>
              <a href="#" className="add-link">More Details</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
