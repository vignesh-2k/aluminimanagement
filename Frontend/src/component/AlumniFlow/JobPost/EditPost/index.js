import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoClose, IoChevronDown } from "react-icons/io5";
import '../../../../styles/AlumniFlow/JobPost/EditPost.css';
import { updateJob } from '../../../services/almJob';

const EditPost = ({ onClose, jobData, onUpdateSuccess }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    employeeStatus: '',
    compensation: '',
    companyName: '',
    salary: '',
    location: '',
    applicationDeadline: '',
    url: '',
    jobContext: '',
    jobResponsibility: '',
    educationalRequirements: '',
    additionalRequirements: '',
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    employeeStatus: false,
  });

  const modules = {
    toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], [{ align: [] }]],
  };

  // Helper function to safely convert to datetime-local format
  const convertToDateTimeLocal = (dateValue) => {
    if (!dateValue) return '';
    
    try {
      // Handle Firestore timestamp format
      if (dateValue.seconds) {
        const date = new Date(dateValue.seconds * 1000);
        return date.toISOString().slice(0, 16);
      }
      
      // Handle Date objects
      if (dateValue instanceof Date) {
        return dateValue.toISOString().slice(0, 16);
      }
      
      // Handle ISO strings
      if (typeof dateValue === 'string') {
        const date = new Date(dateValue);
        if (!isNaN(date.getTime())) {
          return date.toISOString().slice(0, 16);
        }
      }
      
      // Handle epoch time
      if (typeof dateValue === 'number') {
        const date = new Date(dateValue);
        if (!isNaN(date.getTime())) {
          return date.toISOString().slice(0, 16);
        }
      }
    } catch (e) {
      console.error("Date conversion error:", e);
    }
    
    return '';
  };

  useEffect(() => {
    if (jobData) {
      setFormData({
        jobTitle: jobData.jobTitle || '',
        employeeStatus: jobData.employeeStatus || '',
        compensation: jobData.compensation || '',
        companyName: jobData.companyName || '',
        salary: jobData.salary || '',
        location: jobData.location || '',
        applicationDeadline: convertToDateTimeLocal(jobData.applicationDeadline),
        url: jobData.url || '',
        jobContext: jobData.jobContext || '',
        jobResponsibility: jobData.jobResponsibility || '',
        educationalRequirements: jobData.educationalRequirements || '',
        additionalRequirements: jobData.additionalRequirements || '',
      });
    }
  }, [jobData]);

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
      // Format date for backend
      const updatedData = { 
        ...formData,
        applicationDeadline: formData.applicationDeadline 
          ? new Date(formData.applicationDeadline).toISOString()
          : null
      };
      
      await updateJob(jobData.jobId, updatedData);
      alert("Job post updated successfully!");
      onUpdateSuccess(); // Refresh job list
      onClose();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed. Please try again.");
    }
  };

  return (
    <div className="alep-container">
      <div className="alep-modal">
        <div className="alep-header">
          <h2>Edit Job Post</h2>
          <button className="alep-close-btn" onClick={onClose}><IoClose /></button>
        </div>

        <form className="alep-form" onSubmit={handleSubmit}>
          <div className="alep-form-row">
            <div className="alep-field-group floating">
              <input 
                type="text" 
                name="jobTitle" 
                value={formData.jobTitle} 
                onChange={handleChange} 
                required 
                placeholder="Enter job title" 
              />
              <label>Job Title <span className="required">*</span></label>
            </div>

            <div className="alep-field-group floating">
              <div className="alep-dropdown" onClick={() => setDropdownOpen(prev => ({ ...prev, employeeStatus: !prev.employeeStatus }))}>
                <div className="alep-dropdown-header">
                  {formData.employeeStatus || 'Select Employee Status'}
                  <IoChevronDown />
                </div>
                {dropdownOpen.employeeStatus && (
                  <div className="alep-dropdown-options">
                    {['Full Time', 'Part Time', 'Contract'].map(option => (
                      <div 
                        key={option} 
                        onClick={() => {
                          setFormData(prev => ({ ...prev, employeeStatus: option }));
                          setDropdownOpen(prev => ({ ...prev, employeeStatus: false }));
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <label>Employee Status <span className="required">*</span></label>
            </div>
          </div>

          <div className="alep-form-row">
            <div className="alep-field-group floating">
              <input 
                type="text" 
                name="compensation" 
                value={formData.compensation} 
                onChange={handleChange} 
                required 
                placeholder="Enter compensation details" 
              />
              <label>Compensation & Benefits <span className="required">*</span></label>
            </div>
            <div className="alep-field-group floating">
              <input 
                type="text" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
                required 
                placeholder="Enter company name" 
              />
              <label>Company Name <span className="required">*</span></label>
            </div>
          </div>

          <div className="alep-form-row">
            <div className="alep-field-group floating">
              <input 
                type="text" 
                name="salary" 
                value={formData.salary} 
                onChange={handleChange} 
                required 
                placeholder="Enter salary range" 
              />
              <label>Salary <span className="required">*</span></label>
            </div>
            <div className="alep-field-group floating">
              <input 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                required 
                placeholder="Enter job location" 
              />
              <label>Location <span className="required">*</span></label>
            </div>
          </div>

          <div className="alep-form-row">
            <div className="alep-field-group floating">
              <input 
                type="datetime-local" 
                name="applicationDeadline" 
                value={formData.applicationDeadline} 
                onChange={handleChange} 
                required 
              />
              <label>Application Deadline <span className="required">*</span></label>
            </div>
            <div className="alep-field-group floating">
              <input 
                type="url" 
                name="url" 
                value={formData.url} 
                onChange={handleChange} 
                required 
                placeholder="https://example.com/jobs" 
              />
              <label>Application URL <span className="required">*</span></label>
            </div>
          </div>

          {[
            { 
              field: 'jobContext', 
              label: 'Job Context', 
              placeholder: 'Describe the job context...' 
            },
            { 
              field: 'jobResponsibility', 
              label: 'Job Responsibility', 
              placeholder: 'List job responsibilities...' 
            },
            { 
              field: 'educationalRequirements', 
              label: 'Educational Requirements', 
              placeholder: 'Specify education requirements...' 
            },
            { 
              field: 'additionalRequirements', 
              label: 'Additional Requirements', 
              placeholder: 'Mention additional requirements...' 
            }
          ].map((item, index) => (
            <div className="alep-field-group floating alep-quill-floating" key={index}>
              <label className="alep-quill-label">{item.label} <span className="required">*</span></label>
              <ReactQuill 
                value={formData[item.field]} 
                onChange={(value) => handleRichTextChange(item.field, value)}
                modules={modules} 
                placeholder={item.placeholder}
                theme="snow"
              />
            </div>
          ))}

          <button type="submit" className="alep-submit-btn">Update Job Post</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;