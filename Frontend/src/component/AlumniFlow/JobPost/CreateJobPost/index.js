import React, { useEffect, useState } from 'react';
import '../../../../styles/AlumniFlow/JobPost/CreateJobPost.css';
import { TopBar } from '../../../../layout/AlumniFlow/Topbar';
import { Navbar } from '../../../../layout/AlumniFlow/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoChevronDown } from "react-icons/io5";
import { addJob, getEmployeeStatus } from '../../../services/almJob';

const CreateJobPost = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    compensation: '',
    companyName: '',
    salary: '',
    location: '',
    applicationDeadline: '',
    url: '',
  });

  const [jobContext, setJobContext] = useState('');
  const [jobResponsibility, setJobResponsibility] = useState('');
  const [eduRequirements, setEduRequirements] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  const [employeeStatusList, setEmployeeStatusList] = useState([]);
  const [employeeStatus, setEmployeeStatus] = useState('');
  const [statusOpen, setStatusOpen] = useState(false);

  useEffect(() => {
    const fetchStatusList = async () => {
      const res = await getEmployeeStatus();
      if (res?.status === 'success') {
        setEmployeeStatusList(res.data);
        setEmployeeStatus(res.data[0].employeeStatus);
      }
    };
    fetchStatusList();
  }, []);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
    ]
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const statusObj = employeeStatusList.find(
      item => item.employeeStatus === employeeStatus
    );

    const jobData = {
      ...formData,
      jobContext,
      jobResponsibility,
      educationalRequirements: eduRequirements,
      additionalRequirements,
      employeeStatus: statusObj?.employeeStatusId
    };

    const result = await addJob(jobData);
    if (result?.status === 'success') {
      alert("Job posted successfully!");
    } else {
      alert("Failed to post job.");
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="alumni-cjp-container">
        <h1 className="alumni-cjp-title">Create Job Post</h1>
        <form className="alumni-cjp-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="alumni-cjp-form-row">
            <div className="alumni-cjp-field-group alumni-cjp-floating">
              <input type="text" name="jobTitle" required placeholder="Enter the Title" value={formData.jobTitle} onChange={handleChange} />
              <label>Job Title <span className="alumni-cjp-required">*</span></label>
            </div>

            <div className="alumni-cjp-field-group alumni-cjp-floating-dropdown">
              <div className="alumni-cjp-dropdown" onClick={() => setStatusOpen(!statusOpen)}>
                <div className="alumni-cjp-dropdown-header">
                  {employeeStatus}
                  <IoChevronDown />
                </div>
                {statusOpen && (
                  <div className="alumni-cjp-dropdown-options">
                    {employeeStatusList.map(item => (
                      <div key={item.employeeStatusId} onClick={() => {
                        setEmployeeStatus(item.employeeStatus);
                        setStatusOpen(false);
                      }}>
                        {item.employeeStatus}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <label>Employee Status <span className="alumni-cjp-required">*</span></label>
            </div>
          </div>

          {/* Row 2 */}
          <div className="alumni-cjp-form-row">
            <div className="alumni-cjp-field-group alumni-cjp-floating">
              <input type="text" name="compensation" required placeholder='As per company policy' value={formData.compensation} onChange={handleChange} />
              <label>Compensation & Benefits <span className="alumni-cjp-required">*</span></label>
            </div>

            <div className="alumni-cjp-field-group alumni-cjp-floating">
              <input type="text" name="companyName" required placeholder='Company Name' value={formData.companyName} onChange={handleChange} />
              <label>Company Name <span className="alumni-cjp-required">*</span></label>
            </div>
          </div>

          {/* Row 3 */}
          <div className="alumni-cjp-form-row">
            <div className="alumni-cjp-field-group alumni-cjp-floating">
              <input type="text" name="salary" required placeholder="Eg: ₹10,000" value={formData.salary} onChange={handleChange} />
              <label>Salary <span className="alumni-cjp-required">*</span></label>
            </div>

            <div className="alumni-cjp-field-group alumni-cjp-floating">
              <input type="text" name="location" required placeholder="Location" value={formData.location} onChange={handleChange} />
              <label>Location <span className="alumni-cjp-required">*</span></label>
            </div>
          </div>

          {/* Row 4 */}
          <div className="alumni-cjp-form-row">
            <div className="alumni-cjp-field-group alumni-cjp-floating">
              <input type="datetime-local" name="applicationDeadline" required value={formData.applicationDeadline} onChange={handleChange} />
              <label>Application Deadline <span className="alumni-cjp-required">*</span></label>
            </div>

            <div className="alumni-cjp-field-group alumni-cjp-floating">
              <input type="url" name="url" required placeholder="Apply URL" value={formData.url} onChange={handleChange} />
              <label>URL <span className="alumni-cjp-required">*</span></label>
            </div>
          </div>

          {/* Rich Text Fields */}
          <div className="alumni-cjp-editor-group alumni-cjp-floating-quill">
            <label>Job Context <span className="alumni-cjp-required">*</span></label>
            <ReactQuill value={jobContext} onChange={setJobContext} modules={modules} placeholder="Write description..." />
          </div>

          <div className="alumni-cjp-editor-group alumni-cjp-floating-quill">
            <label>Job Responsibility <span className="alumni-cjp-required">*</span></label>
            <ReactQuill value={jobResponsibility} onChange={setJobResponsibility} modules={modules} placeholder="Write description..." />
          </div>

          <div className="alumni-cjp-editor-group alumni-cjp-floating-quill">
            <label>Educational Requirements <span className="alumni-cjp-required">*</span></label>
            <ReactQuill value={eduRequirements} onChange={setEduRequirements} modules={modules} placeholder="Write description..." />
          </div>

          <div className="alumni-cjp-editor-group alumni-cjp-floating-quill">
            <label>Additional Requirements <span className="alumni-cjp-required">*</span></label>
            <ReactQuill value={additionalRequirements} onChange={setAdditionalRequirements} modules={modules} placeholder="Write additional requirements..." />
          </div>

          <button type="submit" className="alumni-cjp-submit-btn">Post</button>
        </form>
      </div>
    </>
  );
};

export default CreateJobPost;
