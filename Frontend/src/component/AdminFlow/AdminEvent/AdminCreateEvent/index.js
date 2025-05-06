import React, { useState } from 'react';
import '../../../../styles/AdminFlow/AdminEvent/AdminCreateEvent.css';
import { TopBar } from '../../../../layout/AdminFlow/Topbar';
import { Navbar } from '../../../../layout/AdminFlow/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdCloudUpload } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

const CreateEvent = () => {
  const [description, setDescription] = useState('');
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Event');
  const [selectedType, setSelectedType] = useState('Select Type');

  const categories = ['Conference', 'Meetup', 'Workshop'];
  const types = ['Free', 'Paid'];

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="ce-create-event-container">
        <h2 style={ { 
                fontSize: "28px",
                marginBottom: "25px"
              }}>Create Event</h2>
        <form className="ce-event-form">
          <div className="ce-form-row">
            <div className="ce-field-group">
              <label>Event Title <span className="ce-required-star">*</span></label>
              <input type="text" required />
            </div>
            <div className="ce-field-group">
              <label>Date <span className="ce-required-star">*</span></label>
              <input type="datetime-local" required />
            </div>
          </div>

          <div className="ce-form-row">
            <div className="ce-field-group">
              <label>Event Category <span className="ce-required-star">*</span></label>
              <div className="ce-custom-dropdown" onClick={() => setCategoryOpen(!categoryOpen)}>
                <div className="ce-dropdown-selected">
                  {selectedCategory}
                  <IoChevronDown className="ce-dropdown-icon" />
                </div>
                {categoryOpen && (
                  <div className="ce-dropdown-menu">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="ce-dropdown-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(category);
                          setCategoryOpen(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="ce-field-group">
              <label>Event Type <span className="ce-required-star">*</span></label>
              <div className="ce-custom-dropdown" onClick={() => setTypeOpen(!typeOpen)}>
                <div className="ce-dropdown-selected">
                  {selectedType}
                  <IoChevronDown className="ce-dropdown-icon" />
                </div>
                {typeOpen && (
                  <div className="ce-dropdown-menu">
                    {types.map((type) => (
                      <div
                        key={type}
                        className="ce-dropdown-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedType(type);
                          setTypeOpen(false);
                        }}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="ce-form-row">
            <div className="ce-field-group">
              <label>Number of Tickets <span className="ce-required-star">*</span></label>
              <input type="text" required />
            </div>
          </div>

          <div className="ce-field-group ce-full-width">
            <label>Location <span className="ce-required-star">*</span></label>
            <textarea placeholder="Write location..." required></textarea>
          </div>

          <div className="ce-field-group ce-full-width ce-description-field">
            <label>Description <span className="ce-required-star">*</span></label>
            <div className="ce-quill-wrapper">
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

          <div className="ce-form-row ce-upload-section">
            <div className="ce-upload-box ce-field-group">
              <label>Upload Image (jpg, jpeg, png) <span className="ce-required-star">*</span></label>
              <div className="ce-upload-content">
                <IoMdCloudUpload className="ce-upload-icon" />
                <p>Drag & drop files here</p>
              </div>
            </div>
            <div className="ce-upload-box ce-field-group">
              <label>Ticket Image (jpg, jpeg, png) <span className="ce-required-star">*</span></label>
              <div className="ce-upload-content">
                <IoMdCloudUpload className="ce-upload-icon" />
                <p>Drag & drop files here</p>
              </div>
            </div>
          </div>

          <button type="submit" className="ce-publish-btn">Publish Now</button>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
