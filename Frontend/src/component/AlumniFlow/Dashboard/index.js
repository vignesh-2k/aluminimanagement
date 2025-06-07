import React, { useEffect, useState } from 'react';
import '../../../styles/AlumniFlow/Dashboard.css';
import { Navbar } from '../../../layout/AlumniFlow/Navbar';
import { TopBar } from '../../../layout/AlumniFlow/Topbar';
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { BsCalendar4Event } from "react-icons/bs";
import { FaLocationDot, FaMoneyBill, FaBriefcase } from "react-icons/fa6";
import { PiCalendarFill } from "react-icons/pi";
import { getTotalAlumniCount } from '../../services/almDashboard';

const Dashboard = () => {

  const [totalAlumni , setTotalAlumni] = useState({ count : 0 });

  const loadTotalAlumni = async ( req , res ) => {
    try {
      const response = await getTotalAlumniCount()
      setTotalAlumni(response.data?.data ?? { count: 0 });
    } catch (error) {
      console.log(error , "Error Fetching Total Count of Alumni")
    }
  }

  useEffect( ( ) => {
    loadTotalAlumni();
  } , [ ])
  return (
    <>
      <Navbar />
      <TopBar />
      <div className="ald-dashboard">
        <h2 className="ald-heading">Dashboard</h2>

        {/* Metrics Section */}
        <div className="ald-metrics">
          <div className="ald-metric-card">
            <div className="ald-metric-icon"><HiOutlineUserGroup /></div>
            <div className="ald-metric-content">
              <p className="ald-metric-title">Total Alumni</p>
              <p className="ald-metric-value">{totalAlumni?.count ?? 0}</p>
            </div>
          </div>

          <div className="ald-metric-card">
            <div className="ald-metric-icon"><MdWorkOutline /></div>
            <div className="ald-metric-content">
              <p className="ald-metric-title">Total Jobs</p>
              <p className="ald-metric-value">0</p>
            </div>
          </div>

          <div className="ald-metric-card">
            <div className="ald-metric-icon"><BsCalendar4Event /></div>
            <div className="ald-metric-content">
              <p className="ald-metric-title">Upcoming Events</p>
              <p className="ald-metric-value">0</p>
            </div>
          </div>
        </div>

        {/* Events & Jobs */}
        <div className="ald-columns">
          {/* Upcoming Events */}
          <div className="ald-section">
            <div className="ald-header">
              <h2>Upcoming Events</h2>
              <span className="ald-seeall">See All →</span>
            </div>
            <div className="ald-event-card">
              <img
                className="ald-event-image"
                src="https://img.freepik.com/free-photo/group-graduates-throwing-caps-air_53876-102626.jpg"
                alt="event"
              />
              <div className="ald-tags">
                <span className="ald-tag ald-free">Free</span>
                <span className="ald-tag ald-workshop">Workshop</span>
              </div>
              <div className="ald-event-details">
                <p className="ald-event-date">May 10, 12:00 AM</p>
                <p className="ald-event-title">Quiz</p>
                <p className="ald-location">
                  <FaLocationDot className="ald-icon" /> Chennai
                </p>
                <a href="#" className="ald-link">Reservation</a>
              </div>
            </div>
          </div>

          {/* Jobs */}
          <div className="ald-section ald-jobs-section">
            <div className="ald-header">
              <h2>Jobs</h2>
              <span className="ald-seeall">See All →</span>
            </div>
            <div className="ald-job-card">
              <div className="ald-job-header">
                <img
                  className="ald-job-avatar"
                  src="https://img.freepik.com/free-photo/group-graduates-throwing-caps-air_53876-102626.jpg"
                  alt="avatar"
                />
                <div>
                  <p className="ald-job-title">Java Developer</p>
                  <p className="ald-job-date">
                    <PiCalendarFill className="ald-icon" />
                    Monday, May 5, 2025
                  </p>
                </div>
              </div>
              <p className="ald-job-desc">Job description goes here.</p>
              <div className="ald-job-meta">
                <p><FaBriefcase className="ald-icon" /> Full Time</p>
                <p><FaLocationDot className="ald-icon" /> Trichy</p>
                <p><FaMoneyBill className="ald-icon" /> ₹45,000</p>
              </div>
              <a href="#" className="ald-link">More Details</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
