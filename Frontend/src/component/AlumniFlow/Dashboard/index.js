

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/AlumniFlow/Dashboard.css';
import { Navbar } from '../../../layout/AlumniFlow/Navbar';
import { TopBar } from '../../../layout/AlumniFlow/Topbar';
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { BsCalendar4Event } from "react-icons/bs";
import { FaLocationDot, FaMoneyBill, FaBriefcase } from "react-icons/fa6";
import { PiCalendarFill } from "react-icons/pi";
import { getAllJob } from '../../services/almJob';
import { getAllEvent } from '../../services/almEvent';


// Image URL formatter function
const formatImgUrl = (path) => {
  if (!path) return "/default-event.jpg";
  const formattedPath = path.replace(/\\/g, "/");
  return `${process.env.REACT_APP_BASE_URL}/${formattedPath}`;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [events, setEvents] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [errorJobs, setErrorJobs] = useState(null);
  const [errorEvents, setErrorEvents] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await getAllJob();
        setJobs(jobData.data);
      } catch (err) {
        setErrorJobs('Failed to load jobs');
        console.error('Error fetching jobs:', err);
      } finally {
        setLoadingJobs(false);
      }
    };

    const fetchEvents = async () => {
      try {
        const eventData = await getAllEvent();
        setEvents(eventData.data);
      } catch (err) {
        setErrorEvents('Failed to load events');
        console.error('Error fetching events:', err);
      } finally {
        setLoadingEvents(false);
      }
    };

  

    fetchJobs();
    fetchEvents();
  }, []);

  const handleViewJobDetails = (job) => {
    navigate('/postdetails', { state: { job } });
  };

  const handleViewEventDetails = (event) => {
    navigate('/myeventdetails', { state: { event } });
  };

  
  const formatDate = (dateString, includeTime = false) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      ...(includeTime && { hour: '2-digit', minute: '2-digit' })
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
              <p className="ald-metric-value">0</p>
            </div>
          </div>

          <div className="ald-metric-card">
            <div className="ald-metric-icon"><MdWorkOutline /></div>
            <div className="ald-metric-content">
              <p className="ald-metric-title">Total Jobs</p>
              <p className="ald-metric-value">{jobs.length}</p>
            </div>
          </div>

          <div className="ald-metric-card">
            <div className="ald-metric-icon"><BsCalendar4Event /></div>
            <div className="ald-metric-content">
              <p className="ald-metric-title">Upcoming Events</p>
              <p className="ald-metric-value">{events.length}</p>
            </div>
          </div>
        </div>

        {/* Events & Jobs */}
        <div className="ald-columns">
          {/* Upcoming Events Section */}
          <div className="ald-section">
            <div className="ald-header">
              <h2>Upcoming Events</h2>
              <span className="ald-seeall">See All →</span>
            </div>
            
            {loadingEvents ? (
              <p>Loading events...</p>
            ) : errorEvents ? (
              <p>{errorEvents}</p>
            ) : events.length === 0 ? (
              <p>No upcoming events</p>
            ) : (
              events.map(event => (
                <div 
                  className="ald-event-card" 
                  key={event.eventId}
                  onClick={() => handleViewEventDetails(event)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* FIX: Use formatImgUrl for event images */}
                  <img
                    className="ald-event-image"
                    src={formatImgUrl(event.eventImg)}
                    alt={event.eventTitle}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-event.jpg";
                    }}
                  />
                  <div className="ald-tags">
                    <span className="ald-tag ald-free">Free</span>
                    <span className="ald-tag ald-workshop">{event.eventCategory}</span>
                  </div>
                  <div className="ald-event-details">
                    <p className="ald-event-date">
                      {formatDate(event.eventDate, true)}
                    </p>
                    <p className="ald-event-title">{event.eventTitle}</p>
                    <p className="ald-location">
                      <FaLocationDot className="ald-icon" /> {event.location}
                    </p>
                    
                      <span 
                    className="ald-link" 
                    onClick={() => handleViewEventDetails(event)}
                    style={{ cursor: 'pointer' }}
                  >
                    Reservation
                  </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Jobs Section */}
          <div className="ald-section ald-jobs-section">
            <div className="ald-header">
              <h2>Jobs</h2>
              <span className="ald-seeall">See All →</span>
            </div>

            {loadingJobs ? (
              <p>Loading jobs...</p>
            ) : errorJobs ? (
              <p>{errorJobs}</p>
            ) : jobs.length === 0 ? (
              <p>No jobs available</p>
            ) : (
              jobs.map(job => (
                <div className="ald-job-card" key={job.jobId}>
                  <div className="ald-job-header">
                    <img
                      className="ald-job-avatar"
                      src="https://img.freepik.com/free-photo/group-graduates-throwing-caps-air_53876-102626.jpg"
                      alt="avatar"
                    />
                    <div>
                      <p className="ald-job-title">{job.jobTitle}</p>
                      <p className="ald-job-company">{job.companyName}</p>
                      <p className="ald-job-date">
                        <PiCalendarFill className="ald-icon" />
                        {formatDate(job.createdAt)}
                      </p>
                    </div>
                  </div>
                  <p className="ald-job-desc">{job.jobContext.replace(/<[^>]+>/g, '')}</p>
                  <div className="ald-job-meta">
                    <p><FaBriefcase className="ald-icon" /> {job.employeeStatus === 1 ? 'Full Time' : 'Other'}</p>
                    <p><FaLocationDot className="ald-icon" /> {job.location}</p>
                    <p><FaMoneyBill className="ald-icon" /> ₹{job.salary}</p>
                  </div>
                  <span 
                    className="ald-link" 
                    onClick={() => handleViewJobDetails(job)}
                    style={{ cursor: 'pointer' }}
                  >
                    More Details
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;