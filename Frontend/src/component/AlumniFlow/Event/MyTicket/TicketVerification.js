import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // ✅ Import the check circle icon
import "../../../../styles/AlumniFlow/Event/TicketVerification.css";
import annalogo from "../../../../assets/images/anna_logo.png"


const TicketVerification = () => {
  return (
    <div className="tv-container">
      <div className="tv-card">
        <div className="tv-header">
          
          <div className="tv-logo-title">
            <img src={annalogo} alt="Anna University" className="tv-logo" />
            <h2 className="tv-head-title">Anna University</h2>
          </div>

          <h2 className="tv-title">Ticket Verification</h2>
        </div>
        <div className="tv-body">
          <FaCheckCircle className="tv-check-icon" />
          <h3 className="tv-success">Successfully Verified</h3>
          <p className="tv-info"><strong>Ticket No:</strong> 80001</p>
          <p className="tv-info"><strong>Participant:</strong> arun</p>
          <p className="tv-footer">bootcamp</p>
        </div>
      </div>
    </div>
  );
};

export default TicketVerification;
