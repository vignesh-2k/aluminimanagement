import React, { useState } from 'react';
import '../../../../styles/AlumniFlow/Event/CreateEvent.css';
import { TopBar } from '../../../../layout/AlumniFlow/Topbar';
import { Navbar } from '../../../../layout/AlumniFlow/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdCloudUpload, IoIosArrowDown } from 'react-icons/io';

const CreateEvent = () => {
  const [description, setDescription] = useState('');
  
  const [uploadImage, setUploadImage] = useState(null);
  const [ticketImage, setTicketImage] = useState(null);
  const [eventTypeOpen, setEventTypeOpen] = useState(false);

  
  const [eventType, setEventType] = useState('');
  const types = [
    { id: 1, name: 'Free' },
    { id: 2, name: 'Paid' },
  ];

  const handleImageChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="alumni-ce-create-event-container">
        <h2 className="alumni-ce-heading">Create Event</h2>
        <form className="alumni-ce-event-form">
          <div className="alumni-ce-form-row">
            <div className="alumni-ce-field-group">
              <label>Event Title <span className="alumni-ce-required-star">*</span></label>
              <input type="text" required placeholder="Enter the Title" />
            </div>
            <div className="alumni-ce-field-group">
              <label>Date <span className="alumni-ce-required-star">*</span></label>
              <input type="datetime-local" required className="alumni-ce-datetime" />
            </div>
          </div>

          <div className="alumni-ce-form-row">
            <div className="alumni-ce-field-group">
              <label>Event Category <span className="alumni-ce-required-star">*</span></label>
              <input type="text" required placeholder="Eg: Bootcamp" />
            </div>
           
            <div className="alumni-ce-field-group alumni-ce-custom-dropdown-wrapper">
                 <label>Event Type <span className="alumni-ce-required-star">*</span></label>
                 <div className="alumni-ce-custom-dropdown" onClick={() => setEventTypeOpen(!eventTypeOpen)}>
                  
                   <div className="alumni-ce-dropdown-header">
                    {eventType || 'Select type'}
                    <IoIosArrowDown className="alumni-ce-dropdown-arrow" />
                    </div>
                    {eventTypeOpen && (
                    <div className="alumni-ce-dropdown-options">
                      {types.map((type) => (
                   <div
                     key={type.id}
                     className="alumni-ce-dropdown-option"
                     onClick={() => {
                        setEventType(type.name);
                        setEventTypeOpen(false);
                     }}
                       >
                   {type.name}
                   </div>
                  ))}
               </div>
              )}
           </div>
      </div>

          </div>

          <div className="alumni-ce-form-row">
            <div className="alumni-ce-field-group">
              <label>Number of Tickets <span className="alumni-ce-required-star">*</span></label>
              <input type="text" placeholder="Eg: 100" required />
            </div>
          </div>

          <div className="alumni-ce-field-group alumni-ce-full-width">
            <label>Location <span className="alumni-ce-required-star">*</span></label>
            <textarea placeholder="Write location..." required></textarea>
          </div>

          <div className="alumni-ce-field-group alumni-ce-full-width alumni-ce-description-field">
            <label>Description <span className="alumni-ce-required-star">*</span></label>
            <div className="alumni-ce-quill-wrapper">
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                placeholder="Write description..."
                modules={{
                  toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ align: [] }],
                  ],
                }}
                formats={['bold', 'italic', 'underline', 'list', 'bullet', 'align']}
              />
            </div>
          </div>

          <div className="alumni-ce-form-row alumni-ce-upload-section">
            <div className="alumni-ce-field-group alumni-ce-upload-box">
              <label>Upload Image (jpg, jpeg, png) <span className="alumni-ce-required-star">*</span></label>
              <div className="alumni-ce-upload-content">
                {uploadImage ? (
                  <img src={uploadImage} alt="Uploaded" className="alumni-ce-upload-preview" />
                ) : (
                  <>
                    <IoMdCloudUpload className="alumni-ce-upload-icon" />
                    <p>Drag & drop files here</p>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="alumni-ce-upload-input"
                  onChange={(e) => handleImageChange(e, setUploadImage)}
                />
              </div>
            </div>

            <div className="alumni-ce-field-group alumni-ce-upload-box">
              <label>Ticket Image (jpg, jpeg, png) <span className="alumni-ce-required-star">*</span></label>
              <div className="alumni-ce-upload-content">
                {ticketImage ? (
                  <img src={ticketImage} alt="Ticket" className="alumni-ce-upload-preview" />
                ) : (
                  <>
                    <IoMdCloudUpload className="alumni-ce-upload-icon" />
                    <p>Drag & drop files here</p>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="alumni-ce-upload-input"
                  onChange={(e) => handleImageChange(e, setTicketImage)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="alumni-ce-publish-btn">Publish Now</button>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
