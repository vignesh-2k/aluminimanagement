// EditEvent.jsx
import React, { useState } from 'react';
// import "../../../styles/Event/EditEvent.css";
import "../../../../styles/AdminFlow/AdminSettings/AdminEditPost.css"

const EditEvent = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "AI-tools",
    category: "workshop",
    type: "Free",
    numberOfTickets: "100",
    dateTime: "2025-04-22T00:00",
    status: "Publish",
    location: "anna university, tirchy",
    description: "ghshfhfdsfdsfgssdgdsdsggfsdsdfffggth",
    uploadImage: null,
    ticketImage: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Event:", formData);
    alert('Event updated successfully!');
    onClose();
  };

  return (
    <div className="edit-event-overlay">
      <div className="edit-event-modal">
        <button className="edit-event-close" onClick={onClose}>×</button>
        <h2 className="edit-event-title">Update New</h2>
        <form className="edit-event-form" onSubmit={handleSubmit}>
          <div className="edit-event-grid">

            <div className="edit-event-group">
              <label>Event Title *</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="edit-event-group">
              <label>Date *</label>
              <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
            </div>

            <div className="edit-event-group">
              <label>Event Category *</label>
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="conference">Conference</option>
              </select>
            </div>

            <div className="edit-event-group">
              <label>Event Type *</label>
              <select name="type" value={formData.type} onChange={handleChange} required>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </div>

            <div className="edit-event-group">
              <label>Number of Ticket *</label>
              <input type="number" name="numberOfTickets" value={formData.numberOfTickets} onChange={handleChange} required />
            </div>

            <div className="edit-event-group">
              <label>Status *</label>
              <select name="status" value={formData.status} onChange={handleChange} required>
                <option value="Publish">Publish</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="edit-event-group full-width">
              <label>Location *</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </div>

            <div className="edit-event-group full-width">
              <label>Description *</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required />
            </div>

            <div className="edit-event-upload full-width">
              <div className="edit-event-upload-box">
                <label>Upload Image *</label>
                <input type="file" name="uploadImage" accept="image/*" onChange={handleChange} />
              </div>

              <div className="edit-event-upload-box">
                <label>Ticket Image *</label>
                <input type="file" name="ticketImage" accept="image/*" onChange={handleChange} />
              </div>
            </div>

          </div>

          <button type="submit" className="edit-event-submit">Update Now</button>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
