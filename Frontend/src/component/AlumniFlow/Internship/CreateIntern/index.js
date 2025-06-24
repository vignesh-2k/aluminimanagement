import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../../../styles/AlumniFlow/Internship/CreateIntern.css';
import { TopBar } from '../../../../layout/AlumniFlow/Topbar';
import { Navbar } from '../../../../layout/AlumniFlow/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addIntern } from '../../../services/almIntern';

const CreateIntern = () => {
  const navigate = useNavigate(); // Initialize navigate function
  // Form state
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
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Handle rich text editor changes
  const handleEditorChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'internshipTitle', 'internshipType', 'stipendPerks', 'companyName',
      'stipend', 'location', 'applicationDeadline', 'applicationUrl',
      'internshipContext', 'internshipResponsibilities', 'educationalRequirements'
    ];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'This field is required';
      }
    });

    // Validate URL format
    if (formData.applicationUrl && !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(formData.applicationUrl)) {
      newErrors.applicationUrl = 'Please enter a valid URL';
    }

    // Validate date is in the future
    if (formData.applicationDeadline) {
      const selectedDate = new Date(formData.applicationDeadline);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.applicationDeadline = 'Deadline must be in the future';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await addIntern(formData);
      
      // Navigate to /myintern after successful creation
      navigate('/myintern');
    } catch (error) {
      console.error('Error posting internship:', error);
      setErrors({ submit: 'Failed to post internship. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quill editor modules
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
        
        {errors.submit && (
          <div className="aluci-error-message">
            {errors.submit}
          </div>
        )}
        
        <form className="aluci-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="aluci-form-row">
            <div className="aluci-field-group aluci-floating">
              <input
                type="text"
                name="internshipTitle"
                value={formData.internshipTitle}
                onChange={handleChange}
                required
                placeholder="Enter the Title"
                className={errors.internshipTitle ? 'aluci-input-error' : ''}
              />
              <label>Internship Title <span className="aluci-required">*</span></label>
              {errors.internshipTitle && <span className="aluci-error">{errors.internshipTitle}</span>}
            </div>
            
            <div className="aluci-field-group aluci-floating">
              <input
                type="text"
                name="internshipType"
                value={formData.internshipType}
                onChange={handleChange}
                required
                placeholder="Eg: Remote"
                className={errors.internshipType ? 'aluci-input-error' : ''}
              />
              <label>Internship Type <span className="aluci-required">*</span></label>
              {errors.internshipType && <span className="aluci-error">{errors.internshipType}</span>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="aluci-form-row">
            <div className="aluci-field-group aluci-floating">
              <input
                type="text"
                name="stipendPerks"
                value={formData.stipendPerks}
                onChange={handleChange}
                required
                placeholder="As per company policy"
                className={errors.stipendPerks ? 'aluci-input-error' : ''}
              />
              <label>Stipend & Perks <span className="aluci-required">*</span></label>
              {errors.stipendPerks && <span className="aluci-error">{errors.stipendPerks}</span>}
            </div>

            <div className="aluci-field-group aluci-floating">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="Company Name"
                className={errors.companyName ? 'aluci-input-error' : ''}
              />
              <label>Company Name <span className="aluci-required">*</span></label>
              {errors.companyName && <span className="aluci-error">{errors.companyName}</span>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="aluci-form-row">
            <div className="aluci-field-group aluci-floating">
              <input
                type="text"
                name="stipend"
                value={formData.stipend}
                onChange={handleChange}
                required
                placeholder="Eg: ₹5,000"
                className={errors.stipend ? 'aluci-input-error' : ''}
              />
              <label>Stipend <span className="aluci-required">*</span></label>
              {errors.stipend && <span className="aluci-error">{errors.stipend}</span>}
            </div>

            <div className="aluci-field-group aluci-floating">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Location"
                className={errors.location ? 'aluci-input-error' : ''}
              />
              <label>Location <span className="aluci-required">*</span></label>
              {errors.location && <span className="aluci-error">{errors.location}</span>}
            </div>
          </div>

          {/* Row 4 */}
          <div className="aluci-form-row">
            <div className="aluci-field-group aluci-floating">
              <input
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className={errors.applicationDeadline ? 'aluci-input-error' : ''}
              />
              <label>Application Deadline <span className="aluci-required">*</span></label>
              {errors.applicationDeadline && <span className="aluci-error">{errors.applicationDeadline}</span>}
            </div>

            <div className="aluci-field-group aluci-floating">
              <input
                type="url"
                name="applicationUrl"
                value={formData.applicationUrl}
                onChange={handleChange}
                required
                placeholder="https://example.com/apply"
                className={errors.applicationUrl ? 'aluci-input-error' : ''}
              />
              <label>Application URL <span className="aluci-required">*</span></label>
              {errors.applicationUrl && <span className="aluci-error">{errors.applicationUrl}</span>}
            </div>
          </div>

          {/* Rich Text Editors */}
          <div className="aluci-editor-group aluci-floating-quill">
            <label>Internship Context <span className="aluci-required">*</span></label>
            <ReactQuill
              value={formData.internshipContext}
              onChange={(value) => handleEditorChange('internshipContext', value)}
              modules={modules}
              placeholder="Write context..."
              className={errors.internshipContext ? 'aluci-editor-error' : ''}
            />
            {errors.internshipContext && <span className="aluci-error">{errors.internshipContext}</span>}
          </div>

          <div className="aluci-editor-group aluci-floating-quill">
            <label>Responsibilities <span className="aluci-required">*</span></label>
            <ReactQuill
              value={formData.internshipResponsibilities}
              onChange={(value) => handleEditorChange('internshipResponsibilities', value)}
              modules={modules}
              placeholder="Write responsibilities..."
              className={errors.internshipResponsibilities ? 'aluci-editor-error' : ''}
            />
            {errors.internshipResponsibilities && <span className="aluci-error">{errors.internshipResponsibilities}</span>}
          </div>

          <div className="aluci-editor-group aluci-floating-quill">
            <label>Educational Requirements <span className="aluci-required">*</span></label>
            <ReactQuill
              value={formData.educationalRequirements}
              onChange={(value) => handleEditorChange('educationalRequirements', value)}
              modules={modules}
              placeholder="Write education requirements..."
              className={errors.educationalRequirements ? 'aluci-editor-error' : ''}
            />
            {errors.educationalRequirements && <span className="aluci-error">{errors.educationalRequirements}</span>}
          </div>

          <div className="aluci-editor-group aluci-floating-quill">
            <label>Additional Requirements</label>
            <ReactQuill
              value={formData.additionalRequirements}
              onChange={(value) => handleEditorChange('additionalRequirements', value)}
              modules={modules}
              placeholder="Write additional requirements..."
            />
          </div>

          <button
            type="submit"
            className="aluci-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Posting...' : 'Post Internship'}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateIntern;