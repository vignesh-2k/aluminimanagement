import React, { useState } from 'react';
import '../../../../styles/AlumniFlow/JobPost/CreateJobPost.css';
import { TopBar } from '../../../../layout/AlumniFlow/Topbar';
import { Navbar } from '../../../../layout/AlumniFlow/Navbar';
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

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="alumni-cjp-container">
        <h1 className="alumni-cjp-title">Create Job Post</h1>
        <form className="alumni-cjp-form">
          {/* Row 1 */}
          <div className="alumni-cjp-form-row">
            <div className="alumni-cjp-field-group floating">
              <input type="text" required />
              <label>Job Title <span className="required">*</span></label>
            </div>

            <div className="alumni-cjp-field-group floating-dropdown">
              <div className="alumni-cjp-dropdown" onClick={() => setStatusOpen(!statusOpen)}>
                <div className="alumni-cjp-dropdown-header">
                  {employeeStatus}
                  <IoChevronDown />
                </div>
                {statusOpen && (
                  <div className="alumni-cjp-dropdown-options">
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
              <label>Employee Status <span className="required">*</span></label>
            </div>
          </div>

          {/* Row 2 */}
          <div className="alumni-cjp-form-row">
            <div className="alumni-cjp-field-group floating">
              <input type="text" required defaultValue="As per company policy" />
              <label>Compensation & Benefits <span className="required">*</span></label>
            </div>

            <div className="alumni-cjp-field-group floating ">
              <input type="file" accept="image/*" required />
              <label>Upload Company Logo <span className="required">*</span></label>
            </div>
          </div>

          {/* Row 3 */}
          <div className="alumni-cjp-form-row">
            <div className="alumni-cjp-field-group floating">
              <input type="text" required defaultValue="$45k" />
              <label>Salary <span className="required">*</span></label>
            </div>

            <div className="alumni-cjp-field-group floating">
              <input type="text" required placeholder="Location" />
              <label>Location <span className="required">*</span></label>
            </div>
          </div>

          {/* Row 4 */}
          <div className="alumni-cjp-form-row">
            <div className="alumni-cjp-field-group floating">
              <input type="datetime-local" required defaultValue="2025-04-23T00:00" />
              <label>Application Deadline <span className="required">*</span></label>
            </div>

            <div className="alumni-cjp-field-group floating">
              <input type="url" required placeholder="Apply URL" />
              <label>URL <span className="required">*</span></label>
            </div>
          </div>

          {/* Rich Text Fields */}
          <div className="alumni-cjp-editor-group floating-quill">
            <label>Job Context <span className="required">*</span></label>
            <ReactQuill value={jobContext} onChange={setJobContext} modules={modules} placeholder="" />
          </div>

          <div className="alumni-cjp-editor-group floating-quill">
            <label>Job Responsibility <span className="required">*</span></label>
            <ReactQuill value={jobResponsibility} onChange={setJobResponsibility} modules={modules} placeholder="" />
          </div>

          <div className="alumni-cjp-editor-group floating-quill">
            <label>Educational Requirements <span className="required">*</span></label>
            <ReactQuill value={eduRequirements} onChange={setEduRequirements} modules={modules} placeholder="" />
          </div>

          <div className="alumni-cjp-editor-group floating-quill">
            <label>Additional Requirements <span className="required">*</span></label>
            <ReactQuill value={additionalRequirements} onChange={setAdditionalRequirements} modules={modules} placeholder="" />
          </div>

          <button type="submit" className="alumni-cjp-submit-btn">Post</button>
        </form>
      </div>
    </>
  );
};

export default CreateJobPost;
