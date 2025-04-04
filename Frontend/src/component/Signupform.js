import React, { useState } from 'react';
import '../styles/Signupform.css';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {

  const navigation = useNavigate();


  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    department: '',
    id: '',
    birthDate: '',
    password: '',
    batch: '',
    email: '',
    passingYear: '',
    gender: 'male',
    confirmPassword: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('http://localhost:4000/auth/register' , {
        formData
      })
    } catch (error) {
      console.log(error)
    }
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Create Account</h1>
        <p className="existing-account">
          Already have an account? <a href="/login">Sign in</a>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Left Column */}
            <div className="form-column">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="eg: (+880) 1754936599"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Department *</label>
                <select name="department" required onChange={handleChange}>
                  <option value="">Select Department</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="electrical">Electrical Engineering</option>
                </select>
              </div>

              <div className="form-group">
                <label>ID/Roll Number *</label>
                <input
                  type="text"
                  name="id"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Gender *</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      onChange={handleChange}
                    />
                    Other
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  onChange={handleChange}
                />
              </div>

              
            </div>

            {/* Right Column */}
            <div className="form-column">
              <div className="form-group">
                <label>Batch Name *</label>
                <select name="batch" required onChange={handleChange}>
                  <option value="">Select Batch</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Passing Year *</label>
                <select name="passingYear" required onChange={handleChange}>
                  <option value="">Select Passing Year</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                </select>
              </div>

              
              <div className="form-group">
                <label>Birth Date *</label>
                <input
                  type="date"
                  name="birthDate"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Password *</label>
                <input
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                />
              </div>
             
            </div>
          </div>

          <button type="submit" className="submit-btn">Create Account</button>
        </form>
      </div>

      <div className="welcome-container">
        <div className="signup-header">
        <h1>Anna University Alumni</h1>

        <p className="welcome-font">Welcome Back</p>
        <p className="register-font">
          Register now to see people who have attended or graduated from a particular school, college or university.
        </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;