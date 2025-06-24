import React, { useEffect, useState } from "react";
import "../../../../styles/AlumniFlow/JobPost/PostDetails.css";
import { TopBar } from '../../../../layout/AlumniFlow/Topbar';
import { Navbar } from '../../../../layout/AlumniFlow/Navbar';
import { useLocation } from "react-router-dom";
import { getInternById } from '../../../services/almIntern';

const InternDetails = () => {
  const location = useLocation();
  const { internId } = location.state || {};
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternship = async () => {
      if (internId) {
        try {
          const response = await getInternById(internId);
          setInternship(response.data);
        } catch (error) {
          console.error("Error fetching internship:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchInternship();
  }, [internId]);

  const formatDate = (isoDate) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return <div className="alid-loading">Loading...</div>;
  }

  if (!internship) {
    return <div className="alid-error">Internship not found</div>;
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="alid-container">
        <h3 className="alid-title">Internship Details</h3>
        <div className="alid-box">
          <div className="alid-row">
            <strong>{internship.internshipTitle}</strong>
            <p>{internship.internshipType}</p>
          </div>
          
          <div className="alid-row">
            <strong>Company Name</strong>
            <p>{internship.companyName}</p>
          </div>
          
          <div className="alid-row">
            <strong>Internship Context</strong>
            <p dangerouslySetInnerHTML={{ __html: internship.internshipContext }} />
          </div>
          
          <div className="alid-row">
            <strong>Responsibilities</strong>
            <p dangerouslySetInnerHTML={{ __html: internship.internshipResponsibilities }} />
          </div>
          
          <div className="alid-row">
            <strong>Educational Requirements</strong>
            <p dangerouslySetInnerHTML={{ __html: internship.educationalRequirements }} />
          </div>
          
          {internship.additionalRequirements && (
            <div className="alid-row">
              <strong>Additional Requirements</strong>
              <p dangerouslySetInnerHTML={{ __html: internship.additionalRequirements }} />
            </div>
          )}
          
          <div className="alid-row">
            <strong>Location</strong>
            <p>{internship.location}</p>
          </div>
          
          <div className="alid-row">
            <strong>Stipend Type</strong>
            <p>{internship.stipendPerks}</p>
          </div>
          
          <div className="alid-row">
            <strong>Stipend Amount</strong>
            <p>{internship.stipend}</p>
          </div>
          
          <div className="alid-row">
            <strong>Application Deadline</strong>
            <p>{formatDate(internship.applicationDeadline)}</p>
          </div>
          
          <a 
            href={internship.applicationUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="alid-apply-btn"
          >
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
};

export default InternDetails;