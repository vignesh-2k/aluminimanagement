import React, { useEffect, useState } from "react";
import "../../../../styles/AlumniFlow/Event/EventDetails.css";
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import { getAllEvent } from "../../../services/almEvent";

const EventDetails = () => {
  const [event, setEvent] = useState([]);

  const getEvent = async () => {
    try {
      const response = await getAllEvent();
      setEvent(response.data); 
    } catch (error) {
      console.error("Error fetching event data", error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="ed-container">
        <h3 className="ed-title">Event Details</h3>

        {event.map((eve) => (
          <div className="ed-card" key={eve.eventId}>
            <p className="ed-date">
              {new Date(eve.eventDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}, {eve.location}
            </p>

            <h2 className="ed-heading">{eve.eventTitle}</h2>

            <div className="ed-image-wrapper">
              <img
                src={eve.eventImg || "/default-event.jpg"} 
                alt="event"
                className="ed-image"
              />
            </div>

            <div className="ed-ticket-info">
              <span className="ed-available-label">Available Tickets :</span>
              <span className="ed-available-count">{eve.noOfTicket}</span>
            </div>

            <div className="ed-description">
              <ol className="ed-list">
                <li>{eve.description}</li>
              </ol>
            </div>

            <button className="ed-purchase-btn">Purchase Ticket</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventDetails;
