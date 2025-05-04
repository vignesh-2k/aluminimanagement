import React, { useState } from 'react';
import '../../styles/AlumniFlow/Signupform.css'; 
import API from '../../api';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateofbirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password Mismatch");
      return;
    }

    const registerData = {
      name,
      email,
      mobileNumber,
      password,
    };

    try {
      const response = await API.post('http://localhost:4000/auth/register', registerData);
      navigate('/login');
      return response.data;
    } catch (error) {
      console.log("Error in Registering Data", error);
    }
  };

  return (
    <div className="suf-container">
      <div className="suf-form-container">
        <h1>Create Account</h1>
        <p className="suf-existing-account">
          Already have an account? <a href="/login">Sign in</a>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="suf-form-grid">
            <div className="suf-form-column">
              <div className="suf-form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="suf-form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="eg: (+880) 1754936599"
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>

              <div className="suf-form-group">
                <label>Department *</label>
                <select name="department">
                  <option value="">Select Department</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="electrical">Electrical Engineering</option>
                </select>
              </div>

              <div className="suf-form-group">
                <label>ID/Roll Number *</label>
                <input
                  type="text"
                  name="id"
                  required
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                />
              </div>

              <div className="suf-form-group">
                <label>Gender *</label>
                <div className="suf-radio-group">
                  <label>
                    <input type="radio" name="gender" /> Male
                  </label>
                  <label>
                    <input type="radio" name="gender" /> Female
                  </label>
                  <label>
                    <input type="radio" name="gender" /> Other
                  </label>
                </div>
              </div>

              <div className="suf-form-group">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="suf-form-column">
              <div className="suf-form-group">
                <label>Batch Name *</label>
                <select name="batch">
                  <option value="">Select Batch</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>

              <div className="suf-form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="suf-form-group">
                <label>Passing Year *</label>
                <select name="passingYear">
                  <option value="">Select Passing Year</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                </select>
              </div>

              <div className="suf-form-group">
                <label>Birth Date *</label>
                <input
                  type="date"
                  name="birthDate"
                  required
                  value={dateOfBirth}
                  onChange={(e) => setDateofbirth(e.target.value)}
                />
              </div>

              <div className="suf-form-group">
                <label>Password *</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="suf-submit-btn">Create Account</button>
        </form>
      </div>

      <div className="suf-welcome-container">
        <div className="suf-signup-header">
          <h1>Anna University Alumni</h1>
          <p className="suf-welcome-font">Welcome Back</p>
          <p className="suf-register-font">
            Register now to see people who have attended or graduated from a particular school, college or university.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
