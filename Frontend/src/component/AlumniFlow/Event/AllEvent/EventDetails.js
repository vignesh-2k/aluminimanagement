import React, { useEffect, useState } from "react";
import "../../../../styles/AlumniFlow/Event/EventDetails.css";
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import { getEventById } from "../../../services/almEvent";
import { useLocation } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();
  const { eventData } = location.state || {};
  const [event, setEvent] = useState(eventData || null);

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

  useEffect(() => {
    if (!eventData) {
      fetchEvent();
    }
  }, []);

  if (!event) {
    return <div>Loading event details...</div>;
  }

  const formatImgUrl = (path) => {
    if (!path) return "/default-event.jpg";
    const formattedPath = path.replace(/\\/g, "/");
    return `${process.env.REACT_APP_BASE_URL}/${formattedPath}`;
  };

  const handlePurchase = () => {
    const purchasedEvents = JSON.parse(localStorage.getItem("purchasedTickets")) || [];
    if (purchasedEvents.includes(event.eventId)) {
      alert("You are already reserved");
    } else {
      purchasedEvents.push(event.eventId);
      localStorage.setItem("purchasedTickets", JSON.stringify(purchasedEvents));
      alert("Ticket purchased successfully!");
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="aled-container">
        <h3 className="aled-title">Event Details</h3>

        <div className="aled-card" key={event.eventId}>
          <p className="aled-date">
            {new Date(event.eventDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}, {event.location}
          </p>

          <h2 className="aled-heading">{event.eventTitle}</h2>

          <div className="aled-image-wrapper">
            <img
              src={formatImgUrl(event.eventImg)}
              alt="event"
              className="aled-image"
            />
          </div>

          <div className="aled-ticket-info">
            <span className="aled-available-label">Available Tickets :</span>
            <span className="aled-available-count">{event.noOfTicket}</span>
          </div>

          <div className="aled-description">
            <ol className="aled-list">
              <li dangerouslySetInnerHTML={{ __html: event.description }}></li>
            </ol>
          </div>

          <button className="aled-purchase-btn" onClick={handlePurchase}>
            Purchase Ticket
          </button>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
