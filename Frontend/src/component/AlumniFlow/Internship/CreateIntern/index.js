import React, { useState } from 'react';
import '../../../../styles/AlumniFlow/Internship/CreateIntern.css';
import { TopBar } from '../../../../layout/AlumniFlow/Topbar';
import { Navbar } from '../../../../layout/AlumniFlow/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoChevronDown } from "react-icons/io5";

const CreateIntern = () => {
  const [internContext, setInternContext] = useState('');
  const [internResponsibility, setInternResponsibility] = useState('');
  const [eduRequirements, setEduRequirements] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [internType, setInternType] = useState('Remote');
  const [typeOpen, setTypeOpen] = useState(false);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
    ],
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="aluci-container">
        <h1 className="aluci-title">Create Internship Post</h1>
        <form className="aluci-form">
          {/* Row 1 */}
          <div className="aluci-form-row">
            <div className="aluci-field-group aluci-floating">
              <input type="text" required placeholder='Enter the Title' />
              <label>Internship Title <span className="aluci-required">*</span></label>
            </div>
            <div className="aluci-field-group aluci-floating-dropdown">
              <div
                className="aluci-dropdown"
                onClick={() => setTypeOpen(!typeOpen)}
              >
                <div className="aluci-dropdown-header">
                  {internType}
                  <IoChevronDown />
                </div>
                {typeOpen && (
                  <div className="aluci-dropdown-options">
                    {['Remote', 'On-site', 'Hybrid'].map(option => (
                      <div key={option} onClick={() => {
                        setInternType(option);
                        setTypeOpen(false);
                      }}>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <label>Internship Type <span className="aluci-required">*</span></label>
            </div>
          </div>

          {/* Row 2 */}
          <div className="aluci-form-row">
            <div className="aluci-field-group aluci-floating">
              <input type="text" required placeholder='As per company policy' />
              <label>Stipend & Perks <span className="aluci-required">*</span></label>
            </div>

            <div className="aluci-field-group aluci-floating aluci-file-input">
              <input type="file" accept="image/*" required />
              <label>Upload Company Logo <span className="aluci-required">*</span></label>
            </div>
          </div>

          {/* Row 3 */}
          <div className="aluci-form-row">
            <div className="aluci-field-group aluci-floating">
              <input type="text" required placeholder="Eg: ₹5,000" />
              <label>Stipend <span className="aluci-required">*</span></label>
            </div>

            <div className="aluci-field-group aluci-floating">
              <input type="text" required placeholder="Location" />
              <label>Location <span className="aluci-required">*</span></label>
            </div>
          </div>

          {/* Row 4 */}
          <div className="aluci-form-row">
            <div className="aluci-field-group aluci-floating">
              <input type="datetime-local" required />
              <label>Application Deadline <span className="aluci-required">*</span></label>
            </div>

            <div className="aluci-field-group aluci-floating">
              <input type="url" required placeholder="Apply URL" />
              <label>Application URL <span className="aluci-required">*</span></label>
            </div>
          </div>

          {/* Rich Text Editors */}
          <div className="aluci-editor-group aluci-floating-quill">
            <label>Internship Context <span className="aluci-required">*</span></label>
            <ReactQuill value={internContext} onChange={setInternContext} modules={modules} placeholder='Write context...' />
          </div>

          <div className="aluci-editor-group aluci-floating-quill">
            <label>Responsibilities <span className="aluci-required">*</span></label>
            <ReactQuill value={internResponsibility} onChange={setInternResponsibility} modules={modules} placeholder='Write responsibilities...' />
          </div>

          <div className="aluci-editor-group aluci-floating-quill">
            <label>Educational Requirements <span className="aluci-required">*</span></label>
            <ReactQuill value={eduRequirements} onChange={setEduRequirements} modules={modules} placeholder='Write education requirements...' />
          </div>

          <div className="aluci-editor-group aluci-floating-quill">
            <label>Additional Requirements <span className="aluci-required">*</span></label>
            <ReactQuill value={additionalRequirements} onChange={setAdditionalRequirements} modules={modules} placeholder='Write additional requirements...' />
          </div>

          <button type="submit" className="aluci-submit-btn">Post Internship</button>
        </form>
      </div>
    </>
  );
};

export default CreateIntern;
