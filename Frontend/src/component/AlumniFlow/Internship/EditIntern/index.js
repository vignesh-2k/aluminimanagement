import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoClose } from "react-icons/io5";
import '../../../../styles/AlumniFlow/Internship/EditIntern.css';
import { updateIntern } from '../../../services/almIntern';

const EditIntern = ({ onClose, intern }) => {
  const [formData, setFormData] = useState({
    internshipTitle: '',
    internshipType: '',
    stipendPerks: '',
    companyName: '',
    stipend: '',
    location: '',
    applicationDeadline: '',
    applicationUrl: '',
    internshipContext: '',
    internshipResponsibilities: '',
    educationalRequirements: '',
    additionalRequirements: '',
  });

  const modules = {
    toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], [{ align: [] }]],
  };

  useEffect(() => {
    if (intern) {
      setFormData({
        internshipTitle: intern.internshipTitle || '',
        internshipType: intern.internshipType || '',
        stipendPerks: intern.stipendPerks || '',
        companyName: intern.companyName || '',
        stipend: intern.stipend || '',
        location: intern.location || '',
        applicationDeadline: formatDateForInput(intern.applicationDeadline),
        applicationUrl: intern.applicationUrl || '',
        internshipContext: intern.internshipContext || '',
        internshipResponsibilities: intern.internshipResponsibilities || '',
        educationalRequirements: intern.educationalRequirements || '',
        additionalRequirements: intern.additionalRequirements || '',
      });
    }
  }, [intern]);

  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRichTextChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateIntern(intern.internshipId, formData);
      onClose();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed. Please try again.");
    }
  };

  return (
    <div className="alei-container">
      <div className="alei-modal">
        <div className="alei-header">
          <h2>Edit Internship</h2>
          <button className="alei-close-btn" onClick={onClose}><IoClose /></button>
        </div>

        <form className="alei-form" onSubmit={handleSubmit}>
          <div className="alei-form-row">
            <div className="alei-field-group fixed">
              <label>Internship Title <span className="required">*</span></label>
              <input
                type="text"
                name="internshipTitle"
                value={formData.internshipTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="alei-field-group fixed">
              <label>Internship Type <span className="required">*</span></label>
              <input
                type="text"
                name="internshipType"
                value={formData.internshipType}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="alei-form-row">
            <div className="alei-field-group fixed">
              <label>Stipend Perks <span className="required">*</span></label>
              <input
                type="text"
                name="stipendPerks"
                value={formData.stipendPerks}
                onChange={handleChange}
                required
              />
            </div>
            <div className="alei-field-group fixed">
              <label>Company Name <span className="required">*</span></label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="alei-form-row">
            <div className="alei-field-group fixed">
              <label>Stipend <span className="required">*</span></label>
              <input
                type="text"
                name="stipend"
                value={formData.stipend}
                onChange={handleChange}
                required
              />
            </div>
            <div className="alei-field-group fixed">
              <label>Location <span className="required">*</span></label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="alei-form-row">
            <div className="alei-field-group fixed">
              <label>Application Deadline <span className="required">*</span></label>
              <input
                type="datetime-local"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                required
              />
            </div>
            <div className="alei-field-group fixed">
              <label>Application URL <span className="required">*</span></label>
              <input
                type="url"
                name="applicationUrl"
                value={formData.applicationUrl}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="alei-field-group fixed alei-quill-floating">
            <label className="alei-quill-label">Internship Context <span className="required">*</span></label>
            <ReactQuill
              value={formData.internshipContext}
              onChange={(value) => handleRichTextChange('internshipContext', value)}
              modules={modules}
              theme="snow"
              placeholder="Enter internship context..."
            />
          </div>

          <div className="alei-field-group fixed alei-quill-floating">
            <label className="alei-quill-label">Responsibilities <span className="required">*</span></label>
            <ReactQuill
              value={formData.internshipResponsibilities}
              onChange={(value) => handleRichTextChange('internshipResponsibilities', value)}
              modules={modules}
              theme="snow"
              placeholder="Enter responsibilities..."
            />
          </div>

          <div className="alei-field-group fixed alei-quill-floating">
            <label className="alei-quill-label">Educational Requirements <span className="required">*</span></label>
            <ReactQuill
              value={formData.educationalRequirements}
              onChange={(value) => handleRichTextChange('educationalRequirements', value)}
              modules={modules}
              theme="snow"
              placeholder="Enter educational requirements..."
            />
          </div>

          <div className="alei-field-group fixed alei-quill-floating">
            <label className="alei-quill-label">Additional Requirements</label>
            <ReactQuill
              value={formData.additionalRequirements}
              onChange={(value) => handleRichTextChange('additionalRequirements', value)}
              modules={modules}
              theme="snow"
              placeholder="Enter additional requirements..."
            />
          </div>

          <div className="alei-form-actions">
            <button type="button" className="alei-cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="alei-submit-btn">Update Internship</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditIntern;