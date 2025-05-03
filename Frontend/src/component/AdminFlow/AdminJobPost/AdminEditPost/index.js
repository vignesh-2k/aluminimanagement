import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoClose, IoChevronDown } from "react-icons/io5";
// import '../../../styles/JobPost/EditPost.css';
import "../../../../styles/AdminFlow/AdminJobPost/AdminEditPost.css";


const EditPost = ({ show, onClose, postData }) => {
  const [formData, setFormData] = useState({
    title: postData?.title || '',
    employeeStatus: postData?.employeeStatus || 'Full Time',
    salary: postData?.salary || '',
    location: postData?.location || '',
    url: postData?.url || '',
    applicationDeadline: postData?.applicationDeadline || '',
    compensation: postData?.compensation || '',
    jobStatus: postData?.jobStatus || 'Pending'
  });

  const [dropdownOpen, setDropdownOpen] = useState({ employeeStatus: false, jobStatus: false });
  const [jobContext, setJobContext] = useState(postData?.jobContext || '');
  const [jobResponsibility, setJobResponsibility] = useState(postData?.jobResponsibility || '');
  const [eduRequirements, setEduRequirements] = useState(postData?.eduRequirements || '');
  const [additionalRequirements, setAdditionalRequirements] = useState(postData?.additionalRequirements || '');
  const [setLogo] = useState(null);

  const modules = {
    toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], [{ align: [] }]],
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo') {
      setLogo(files[0]);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    onClose();
  };

  if (!show) return null;

  return (
    <div className="ep-modal-overlay">
      <div className="ep-modal">
        <div className="ep-header">
          <h2>Edit Job Post</h2>
          <button onClick={onClose} className="ep-close-btn"><IoClose /></button>
        </div>

        <form className="ep-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="ep-form-row">
            <div className="ep-field-group floating">
              <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="Enter job title" />
              <label>Job Title <span className="required">*</span></label>
            </div>
            <div className="ep-field-group floating">
              <div className="ep-dropdown" onClick={() => setDropdownOpen(prev => ({ ...prev, employeeStatus: !prev.employeeStatus }))}>
                <div className="ep-dropdown-header">
                  {formData.employeeStatus}
                  <IoChevronDown />
                </div>
                {dropdownOpen.employeeStatus && (
                  <div className="ep-dropdown-options">
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

          {/* Row 2 */}
          <div className="ep-form-row">
            <div className="ep-field-group floating">
              <input type="text" name="compensation" value={formData.compensation} onChange={handleChange} required placeholder="Enter compensation details" />
              <label>Compensation & Benefits <span className="required">*</span></label>
            </div>
            <div className="ep-field-group floating">
              <input type="file" name="logo" onChange={handleChange} className="ep-file-input" />
              <label>Upload Company Logo <span className="required">*</span></label>
            </div>
          </div>

          {/* Row 3 */}
          <div className="ep-form-row">
            <div className="ep-field-group floating">
              <input type="text" name="salary" value={formData.salary} onChange={handleChange} required placeholder="Enter salary range or amount" />
              <label>Salary <span className="required">*</span></label>
            </div>
            <div className="ep-field-group floating">
              <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="Enter job location" />
              <label>Location <span className="required">*</span></label>
            </div>
          </div>

          {/* Row 4 */}
          <div className="ep-form-row">
            <div className="ep-field-group floating">
              <input type="datetime-local" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} required />
              <label>Application Deadline <span className="required">*</span></label>
            </div>
            <div className="ep-field-group floating">
              <input type="text" name="url" value={formData.url} onChange={handleChange} required placeholder="Enter job URL" />
              <label>URL <span className="required">*</span></label>
            </div>
          </div>

          {/* Row 5 */}
          <div className="ep-form-row">
            <div className="ep-field-group floating">
              <div className="ep-dropdown" onClick={() => setDropdownOpen(prev => ({ ...prev, jobStatus: !prev.jobStatus }))}>
                <div className="ep-dropdown-header">
                  {formData.jobStatus}
                  <IoChevronDown />
                </div>
                {dropdownOpen.jobStatus && (
                  <div className="ep-dropdown-options">
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

          {/* Rich Text Editors */}
          {[{
            label: 'Job Context', value: jobContext, setter: setJobContext, placeholder: 'Write the job context here...'
          }, {
            label: 'Job Responsibility', value: jobResponsibility, setter: setJobResponsibility, placeholder: 'Describe job responsibilities...'
          }, {
            label: 'Educational Requirements', value: eduRequirements, setter: setEduRequirements, placeholder: 'Specify educational qualifications...'
          }, {
            label: 'Additional Requirements', value: additionalRequirements, setter: setAdditionalRequirements, placeholder: 'List any additional requirements...'
          }].map(({ label, value, setter, placeholder }, i) => (
            <div className="ep-field-group floating quill-floating" key={i}>
              <label className="quill-label">{label} <span className="required">*</span></label>
              <ReactQuill
                value={value}
                onChange={setter}
                modules={modules}
                placeholder={placeholder}
              />
            </div>
          ))}

          <button type="submit" className="ep-submit-btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
