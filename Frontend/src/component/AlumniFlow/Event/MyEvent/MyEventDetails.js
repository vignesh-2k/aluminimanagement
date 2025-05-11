import React, { useEffect, useState } from "react";
import "../../../../styles/AlumniFlow/Event/MyEventDetails.css";
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import { getEventById } from "../../../services/almEvent";
import { useLocation } from "react-router-dom";

const MyEventDetails = () => {
  const location = useLocation();
  const { eventData } = location.state || {};
  const [event, setEvent] = useState(eventData || null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (eventData?.eventId) {
          const response = await getEventById(eventData.eventId);
          setEvent(response.data);
        }
      } catch (error) {
        console.error("Error fetching event data", error);
      }
    };

    if (!eventData) {
      fetchEvent();
    }
  }, [eventData]);

  const formatImgUrl = (path) => {
    if (!path) return "/default-event.jpg";
    const formattedPath = path.replace(/\\/g, "/");
    return `${process.env.REACT_APP_BASE_URL}/${formattedPath}`;
  };

  if (!event) {
    return <div className="almed-loading">Loading event details...</div>;
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="almed-container">
        <h3 className="almed-title">My Event Details</h3>

        <div className="almed-card" key={event.eventId}>
          <p className="almed-date">
            {new Date(event.eventDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })},{" "}
            {event.location}
          </p>

          <h2 className="almed-heading">{event.eventTitle}</h2>

          <div className="almed-image-wrapper">
            <img
              src={formatImgUrl(event.eventImg)}
              alt="event"
              className="almed-image"
            />
          </div>

          <div className="almed-ticket-info">
            <span className="almed-available-label">Available Tickets :</span>
            <span className="almed-available-count">{event.noOfTicket}</span>
          </div>

          <div className="almed-description">
            <h4>Description:</h4>
            <div
              className="almed-description-content"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEventDetails;
