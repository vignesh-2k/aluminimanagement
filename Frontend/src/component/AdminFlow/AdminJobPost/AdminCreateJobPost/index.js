import React, { useState } from 'react';
// import '../../../styles/JobPost/CreateJobPost.css';
import "../../../../styles/AdminFlow/AdminJobPost/AdminCreateJobPost.css";

import { TopBar } from '../../../../layout/AdminFlow/Topbar';
import { Navbar } from '../../../../layout/AdminFlow/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoChevronDown } from "react-icons/io5";

const CreateJobPost = () => {
  const [jobContext, setJobContext] = useState('');
  const [jobResponsibility, setJobResponsibility] = useState('');
  const [eduRequirements, setEduRequirements] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [employeeStatus, setEmployeeStatus] = useState('Full Time');
  const [statusOpen, setStatusOpen] = useState(false);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
    ]
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '14px',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    backgroundColor: '#f9fafb',
    transition: 'border-color 0.3s',
  };

  const fileInputStyle = {
    ...inputStyle,
    backgroundColor: '#edf2f7',
    cursor: 'pointer',
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="jobp-container">
        <h1 className="jobp-title">Create Job Post</h1>
        <form className="jobp-form">
          {/* Row 1 */}
          <div className="jobp-form-row">
            <div className="jobp-field-group">
              <label>Job Title <span className="required">*</span></label>
              <input type="text" required style={inputStyle} />
            </div>

            <div className="jobp-field-group">
              <label>Employee Status <span className="required">*</span></label>
              <div className="jobp-dropdown" onClick={() => setStatusOpen(!statusOpen)}>
                <div className="jobp-dropdown-header">
                  {employeeStatus}
                  <IoChevronDown />
                </div>
                {statusOpen && (
                  <div className="jobp-dropdown-options">
                    {['Full Time', 'Part Time', 'Contract'].map(option => (
                      <div key={option} onClick={() => {
                        setEmployeeStatus(option);
                        setStatusOpen(false);
                      }}>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="jobp-form-row">
            <div className="jobp-field-group">
              <label>Compensation & Benefits <span className="required">*</span></label>
              <input type="text" defaultValue="As per company policy" required style={inputStyle} />
            </div>

            <div className="jobp-field-group">
              <label>Upload Company Logo <span className="required">*</span></label>
              <input type="file" accept="image/*" required style={fileInputStyle} />
            </div>
          </div>

          {/* Row 3 */}
          <div className="jobp-form-row">
            <div className="jobp-field-group">
              <label>Salary <span className="required">*</span></label>
              <input type="text" defaultValue="$45k" required style={inputStyle} />
            </div>

            <div className="jobp-field-group">
              <label>Location <span className="required">*</span></label>
              <input type="text" placeholder="Location" required style={inputStyle} />
            </div>
          </div>

          {/* Row 4 */}
          <div className="jobp-form-row">
            <div className="jobp-field-group">
              <label>Application Deadline <span className="required">*</span></label>
              <input type="datetime-local" defaultValue="2025-04-23T00:00" required style={inputStyle} />
            </div>
            <div className="jobp-field-group">
              <label>URL <span className="required">*</span></label>
              <input type="url" placeholder="Apply URL" required style={inputStyle} />
            </div>
          </div>

          {/* Rich Text Fields */}
          <div className="jobp-editor-group">
            <label>Job Context <span className="required">*</span></label>
            <ReactQuill
              value={jobContext}
              onChange={setJobContext}
              modules={modules}
              placeholder="Write description..."
            />
          </div>

          <div className="jobp-editor-group">
            <label>Job Responsibility <span className="required">*</span></label>
            <ReactQuill
              value={jobResponsibility}
              onChange={setJobResponsibility}
              modules={modules}
              placeholder="Write description..."
            />
          </div>

          <div className="jobp-editor-group">
            <label>Educational Requirements <span className="required">*</span></label>
            <ReactQuill
              value={eduRequirements}
              onChange={setEduRequirements}
              modules={modules}
              placeholder="Write description..."
            />
          </div>

          <div className="jobp-editor-group">
            <label>Additional Requirements <span className="required">*</span></label>
            <ReactQuill
              value={additionalRequirements}
              onChange={setAdditionalRequirements}
              modules={modules}
              placeholder="Write description..."
            />
          </div>

          <button type="submit" className="jobp-submit-btn">Post</button>
        </form>
      </div>
    </>
  );
};

export default CreateJobPost;
