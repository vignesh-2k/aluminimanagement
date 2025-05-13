import React from "react";
import "../../../../styles/AlumniFlow/JobPost/PostDetails.css";
import { TopBar } from '../../../../layout/AlumniFlow/Topbar';
import { Navbar } from '../../../../layout/AlumniFlow/Navbar';
import { useLocation } from "react-router-dom";

const PostDetails = () => {
  const location = useLocation();
  const { job } = location.state || {};  // Get the job data from location state

  if (!job) {
    return <div>Loading...</div>;
  }

  const formatDate = (isoDate) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="alumni-pd-container">
        <h3 className="alumni-pd-title">Post Details</h3>
        <div className="alumni-pd-box">
          <div className="alumni-pd-row">
            <strong>{job.jobTitle}</strong>
            <p>{job.employeeStatus === 1 ? 'Full Time' : 'Part Time'}</p>
          </div>
          <div className="alumni-pd-row">
            <strong>Job Context</strong>
            <p dangerouslySetInnerHTML={{ __html: job.jobContext }} />
          </div>
          <div className="alumni-pd-row">
            <strong>Job Responsibility</strong>
            <p dangerouslySetInnerHTML={{ __html: job.jobResponsibility }} />
          </div>
          <div className="alumni-pd-row">
            <strong>Educational Requirements</strong>
            <p dangerouslySetInnerHTML={{ __html: job.educationalRequirements }} />
          </div>
          <div className="alumni-pd-row">
            <strong>Job Location</strong>
            <p>{job.location}</p>
          </div>
          <div className="alumni-pd-row">
            <strong>Salary</strong>
            <p>{job.salary}</p>
          </div>
          <div className="alumni-pd-row">
            <strong>Compensation & Benefits</strong>
            <p>{job.compensation}</p>
          </div>
          <div className="alumni-pd-row">
            <strong>Application Deadline</strong>
            <p>{formatDate(job.applicationDeadline)}</p>
          </div>
          <button className="alumni-pd-apply-btn">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
