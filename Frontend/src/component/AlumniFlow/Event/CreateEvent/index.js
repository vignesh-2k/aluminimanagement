import React, { useEffect, useState } from 'react';
import '../../../../styles/AlumniFlow/Event/CreateEvent.css';
import { TopBar } from '../../../../layout/AlumniFlow/Topbar';
import { Navbar } from '../../../../layout/AlumniFlow/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdCloudUpload, IoIosArrowDown } from 'react-icons/io';
import { addEvent, getEventType } from '../../../services/almEvent';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [noOfTicket, setNoOfTicket] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [uploadImage, setUploadImage] = useState(null);
  const [ticketImage, setTicketImage] = useState(null);
  const [eventTypes, setEventTypes] = useState([]);
  const [selectedEventType, setSelectedEventType] = useState('');
  const [selectedEventTypeId, setSelectedEventTypeId] = useState(null);
  const [eventTypeOpen, setEventTypeOpen] = useState(false);

  const navigate = useNavigate();

  const getEventTypes = async () => {
    try {
      const response = await getEventType();
      setEventTypes(response.data); 
    } catch (error) {
      console.error(error);
      setEventTypes([]);
    }
  };

  useEffect(() => {
    getEventTypes();
  }, []);

  const handleImageChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(file); // Set the actual file instead of a blob URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append('eventTitle', eventTitle);
    formData.append('eventDate', eventDate);
    formData.append('eventType', selectedEventTypeId);
    formData.append('eventCategory', eventCategory);
    formData.append('noOfTicket', noOfTicket);
    formData.append('location', location);
    formData.append('description', description);

    // Append image files to the formData
    if (uploadImage) {
      formData.append('eventImg', uploadImage);
    }
    if (ticketImage) {
      formData.append('ticketImg', ticketImage);
    }

    try {
      // Use your addEvent API service
      await addEvent(formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Navigate to the event list page if successful
      navigate('/allevent');
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="alumni-ce-create-event-container">
        <h2 className="alumni-ce-heading">Create Event</h2>
        <form className="alumni-ce-event-form" onSubmit={handleSubmit}>
          <div className="alumni-ce-form-row">
            <div className="alumni-ce-field-group">
              <label>
                Event Title <span className="alumni-ce-required-star">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter the Title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </div>
            <div className="alumni-ce-field-group">
              <label>
                Date <span className="alumni-ce-required-star">*</span>
              </label>
              <input
                type="datetime-local"
                required
                className="alumni-ce-datetime"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>
          </div>

          <div className="alumni-ce-form-row">
            <div className="alumni-ce-field-group">
              <label>
                Event Category <span className="alumni-ce-required-star">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Eg: Bootcamp"
                value={eventCategory}
                onChange={(e) => setEventCategory(e.target.value)}
              />
            </div>

            <div className="alumni-ce-field-group alumni-ce-custom-dropdown-wrapper">
              <label>
                Event Type <span className="alumni-ce-required-star">*</span>
              </label>
              <div
                className="alumni-ce-custom-dropdown"
                onClick={() => setEventTypeOpen(!eventTypeOpen)}
              >
                <div className="alumni-ce-dropdown-header">
                  {selectedEventType || 'Select type'}
                  <IoIosArrowDown className="alumni-ce-dropdown-arrow" />
                </div>
                {eventTypeOpen && (
                  <div className="alumni-ce-dropdown-options">
                    {eventTypes.map((type) => (
                      <div
                        key={type.id}
                        className="alumni-ce-dropdown-option"
                        onClick={() => {
                          setSelectedEventType(type.category);
                          setSelectedEventTypeId(type.id);
                          setEventTypeOpen(false);
                        }}
                      >
                        {type.category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="alumni-ce-form-row">
            <div className="alumni-ce-field-group">
              <label>
                Number of Tickets <span className="alumni-ce-required-star">*</span>
              </label>
              <input
                type="text"
                placeholder="Eg: 100"
                required
                value={noOfTicket}
                onChange={(e) => setNoOfTicket(e.target.value)}
              />
            </div>
          </div>

          <div className="alumni-ce-field-group alumni-ce-full-width">
            <label>
              Location <span className="alumni-ce-required-star">*</span>
            </label>
            <textarea
              placeholder="Write location..."
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></textarea>
          </div>

          <div className="alumni-ce-field-group alumni-ce-full-width alumni-ce-description-field">
            <label>
              Description <span className="alumni-ce-required-star">*</span>
            </label>
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
              <label>
                Upload Image (jpg, jpeg, png) <span className="alumni-ce-required-star">*</span>
              </label>
              <div className="alumni-ce-upload-content">
                {uploadImage ? (
                  <img
                    src={URL.createObjectURL(uploadImage)}
                    alt="Uploaded"
                    className="alumni-ce-upload-preview"
                  />
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
              <label>
                Ticket Image (jpg, jpeg, png) <span className="alumni-ce-required-star">*</span>
              </label>
              <div className="alumni-ce-upload-content">
                {ticketImage ? (
                  <img
                    src={URL.createObjectURL(ticketImage)}
                    alt="Ticket"
                    className="alumni-ce-upload-preview"
                  />
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

          <button type="submit" className="alumni-ce-publish-btn">
            Publish Now
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
