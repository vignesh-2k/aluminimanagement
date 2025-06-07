
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdCloudUpload } from 'react-icons/io';
import "../../../../styles/AlumniFlow/Event/EditEvent.css";
import { updateEvent } from '../../../services/almEvent';

const EditEvent = ({ onClose, eventData }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    type: '',
    numberOfTickets: '',
    dateTime: '',
    status: '',
    location: '',
    description: '',
    uploadImage: null,
    ticketImage: null,
  });

  const [uploadImagePreview, setUploadImagePreview] = useState(null);
  const [ticketImagePreview, setTicketImagePreview] = useState(null);

  useEffect(() => {
    if (eventData) {
      setFormData({
        title: eventData.eventTitle || '',
        category: eventData.eventCategory || '',
        type: eventData.eventType || '',
        numberOfTickets: eventData.numberOfTickets || '',
        dateTime: new Date(eventData.eventDate).toISOString().slice(0, 16),
        status: eventData.status || '',
        location: eventData.location || '',
        description: eventData.description || '',
        uploadImage: null,
        ticketImage: null,
      });
    }
  }, [eventData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      if (type === 'uploadImage') {
        setFormData({ ...formData, uploadImage: file });
        setUploadImagePreview(previewURL);
      } else if (type === 'ticketImage') {
        setFormData({ ...formData, ticketImage: file });
        setTicketImagePreview(previewURL);
      }
    }
  };

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...formData };
      await updateEvent(eventData.eventId, updatedData);
      alert("Event updated successfully!");
      onClose();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed.");
    }
  };

  return (
    <div className="alee-overlay">
      <div className="alee-modal">
        <button className="alee-close" onClick={onClose}>×</button>
        <h2 className="alee-title">Update Event</h2>
        <form className="alee-form" onSubmit={handleSubmit}>
          <div className="alee-grid">
            <div className="alee-group">
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
              <label>Event Title *</label>
            </div>

            <div className="alee-group">
              <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
              <label>Date *</label>
            </div>

            <div className="alee-group">
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="conference">Conference</option>
              </select>
              <label>Event Category *</label>
            </div>

            <div className="alee-group">
              <select name="type" value={formData.type} onChange={handleChange} required>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
              <label>Event Type *</label>
            </div>

            <div className="alee-group">
              <input type="number" name="numberOfTickets" value={formData.numberOfTickets} onChange={handleChange} required />
              <label>Number of Tickets *</label>
            </div>

            <div className="alee-group alee-full">
              <input type="text" name="location" value={formData.location} onChange={handleChange} required />
              <label>Location *</label>
            </div>

            <div className="alee-group alee-full">
              <label className="alee-fixed-label">Description *</label>
              <ReactQuill value={formData.description} onChange={handleDescriptionChange} />
            </div>

            <div className="alee-upload-section alee-full">
              <div className="alee-upload-box">
                <label>Upload Image *</label>
                <div className="alee-upload-content">
                  {uploadImagePreview ? <img src={uploadImagePreview} alt="Upload" className="alee-upload-preview" /> : <IoMdCloudUpload className="alee-upload-icon" />}
                  <input type="file" accept="image/*" className="alee-upload-input" onChange={(e) => handleImageChange(e, 'uploadImage')} />
                </div>
              </div>

              <div className="alee-upload-box">
                <label>Ticket Image *</label>
                <div className="alee-upload-content">
                  {ticketImagePreview ? <img src={ticketImagePreview} alt="Ticket" className="alee-upload-preview" /> : <IoMdCloudUpload className="alee-upload-icon" />}
                  <input type="file" accept="image/*" className="alee-upload-input" onChange={(e) => handleImageChange(e, 'ticketImage')} />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="alee-submit">Update Now</button>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
