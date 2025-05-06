import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoClose, IoChevronDown } from "react-icons/io5";
import '../../../../styles/AlumniFlow/JobPost/EditPost.css';

const EditPost = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    employeeStatus: 'Full Time',
    salary: '',
    location: '',
    url: '',
    applicationDeadline: '',
    compensation: '',
    jobStatus: 'Pending',
    logo: null
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    employeeStatus: false,
    jobStatus: false
  });

  const [jobContext, setJobContext] = useState('');
  const [jobResponsibility, setJobResponsibility] = useState('');
  const [eduRequirements, setEduRequirements] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  const modules = {
    toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], [{ align: [] }]],
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo' && files.length > 0) {
      setFormData(prev => ({ ...prev, logo: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeData = {
      ...formData,
      jobContext,
      jobResponsibility,
      eduRequirements,
      additionalRequirements
    };
    console.log('Submitted Data:', completeData);
    alert("Job post updated successfully!");
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
              <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="Enter job title" />
              <label>Job Title <span className="required">*</span></label>
            </div>

            <div className="alep-field-group floating">
              <div className="alep-dropdown" onClick={() => setDropdownOpen(prev => ({ ...prev, employeeStatus: !prev.employeeStatus }))}>
                <div className="alep-dropdown-header">
                  {formData.employeeStatus}
                  <IoChevronDown />
                </div>
                {dropdownOpen.employeeStatus && (
                  <div className="alep-dropdown-options">
                    {['Full Time', 'Part Time', 'Contract'].map(option => (
                      <div key={option} onClick={() => {
                        setFormData(prev => ({ ...prev, employeeStatus: option }));
                        setDropdownOpen(prev => ({ ...prev, employeeStatus: false }));
                      }}>{option}</div>
                    ))}
                  </div>
                )}
              </div>
              <label>Employee Status <span className="required">*</span></label>
            </div>
          </div>

          <div className="alep-form-row">
            <div className="alep-field-group floating">
              <input type="text" name="compensation" value={formData.compensation} onChange={handleChange} required placeholder="Enter compensation details" />
              <label>Compensation & Benefits <span className="required">*</span></label>
            </div>
            <div className="alep-field-group floating">
              <input type="file" name="logo" onChange={handleChange} className="alep-file-input" />
              <label>Upload Company Logo <span className="required">*</span></label>
            </div>
          </div>

          <div className="alep-form-row">
            <div className="alep-field-group floating">
              <input type="text" name="salary" value={formData.salary} onChange={handleChange} required placeholder="Enter salary range or amount" />
              <label>Salary <span className="required">*</span></label>
            </div>
            <div className="alep-field-group floating">
              <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="Enter job location" />
              <label>Location <span className="required">*</span></label>
            </div>
          </div>

          <div className="alep-form-row">
            <div className="alep-field-group floating">
              <input type="datetime-local" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} required />
              <label>Application Deadline <span className="required">*</span></label>
            </div>
            <div className="alep-field-group floating">
              <input type="text" name="url" value={formData.url} onChange={handleChange} required placeholder="Enter job URL" />
              <label>URL <span className="required">*</span></label>
            </div>
          </div>

          <div className="alep-form-row">
            <div className="alep-field-group floating">
              <div className="alep-dropdown" onClick={() => setDropdownOpen(prev => ({ ...prev, jobStatus: !prev.jobStatus }))}>
                <div className="alep-dropdown-header">
                  {formData.jobStatus}
                  <IoChevronDown />
                </div>
                {dropdownOpen.jobStatus && (
                  <div className="alep-dropdown-options">
                    {['Pending', 'Approved', 'Cancelled'].map(option => (
                      <div
                        key={option}
                        className={`status-${option.toLowerCase()}`}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, jobStatus: option }));
                          setDropdownOpen(prev => ({ ...prev, jobStatus: false }));
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <label>Job Status <span className="required">*</span></label>
            </div>
          </div>

          {[{ label: 'Job Context', value: jobContext, setter: setJobContext, placeholder: 'Write the job context here...' },
            { label: 'Job Responsibility', value: jobResponsibility, setter: setJobResponsibility, placeholder: 'Describe job responsibilities...' },
            { label: 'Educational Requirements', value: eduRequirements, setter: setEduRequirements, placeholder: 'Specify educational qualifications...' },
            { label: 'Additional Requirements', value: additionalRequirements, setter: setAdditionalRequirements, placeholder: 'List any additional requirements...' }
          ].map(({ label, value, setter, placeholder }, index) => (
            <div className="alep-field-group floating alep-quill-floating" key={index}>
              <label className="alep-quill-label">{label} <span className="required">*</span></label>
              <ReactQuill value={value} onChange={setter} modules={modules} placeholder={placeholder} />
            </div>
          ))}

          <button type="submit" className="alep-submit-btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
