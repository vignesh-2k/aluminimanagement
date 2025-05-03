import React from "react";
// import "../../../styles/Event/EventDetails.css";
import '../../../../styles/AdminFlow/AdminEvent/AdminEventDetails.css';

import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
// import eventImage from "../../../assets/event-details-full.JPG"; // Update path as needed

const EventDetails = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="ed-container">
        <h3 className="ed-title">Event Details</h3>

        <div className="ed-card">
          <p className="ed-date">1st May, 03:17:00 PM anna university, tirchy</p>
          <h2 className="ed-heading">AI-tools</h2>
          <div className="ed-image-wrapper">
            <img  alt="event" className="ed-image" />
          </div>

          <div className="ed-ticket-info">
            <span className="ed-available-label">Available Tickets :</span>
            <span className="ed-available-count">100</span>
          </div>

          <div className="ed-description">
            <ol className="ed-list">
              <li>
                ghshfidsfsdfsgsdgsdsdsggfdsdsd
                <strong><em>fffgtfh</em></strong>
              </li>
            </ol>
          </div>

          <button className="ed-purchase-btn">Purchase Ticket</button>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
