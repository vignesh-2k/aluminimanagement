import React, { useEffect, useState } from 'react';
import '../styles/Signupform.css';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import { getUserTypes } from './services/register';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [genderId, setGenderId] = useState('');
  const [userTypeId, setUserTypeId] = useState('');
  const [userTypes, setUserTypes] = useState([ ]);
  const [batchNameId, setBatchNameId] = useState('');
  const [passedOutYearId, setPassedOutYearId] = useState('');

  const navigate = useNavigate();
  useEffect( ( ) => {
    loadUserTypeData();
  } , [ ])

  const loadUserTypeData = async ( req, res) => {
    try {
      const response = await getUserTypes();
      setUserTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password mismatch");
      return;
    }

    const registerData = {
      userTypeId: parseInt(userTypeId),
      email,
      password,
      name,
      mobileNumber,
      dateOfBirth,
      rollNumber,
      address: "Andipatty",
      city: "Andipatty",
      state: "Tamilnadu",
      pinCode: "625512",
      linkedInUrl: "linkedin.com/yourprofile",
      companyName: "Company",
      companyDesignation: "Designation",
      companyAddress: "Company Address",
      batchNameId: parseInt(batchNameId),
      departmentId: parseInt(departmentId),
      passedOutYearId: parseInt(passedOutYearId),
      genderId: parseInt(genderId),
      bloodGroupId: 1,
    };

    try {
      await API.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, registerData);
      navigate('/login');
    } catch (error) {
      console.error("Registration failed:", error);
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
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="suf-form-group">
                <label>Phone Number *</label>
                <input type="tel" required value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
              </div>

              <div className="suf-form-group">
                <label>Department *</label>
                <select required value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}>
                  <option value="">Select Department</option>
                  <option value="1">Computer Science</option>
                  <option value="2">Electrical Engineering</option>
                </select>
              </div>

              <div className="suf-form-group">
                <label>ID/Roll Number *</label>
                <input type="text" required value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
              </div>

              <div className="suf-form-group">
                <label>Gender *</label>
                <select required value={genderId} onChange={(e) => setGenderId(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </select>
              </div>

              <div className="suf-form-group">
                <label>Confirm Password *</label>
                <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>

            <div className="suf-form-column">
              {/* <div className="suf-form-group">
                <label>User Type *</label>
                <select required value={userTypeId} onChange={(e) => setUserTypeId(e.target.value)}>
                  <option value="">Select User</option>
                  <option value="1">Admin</option>
                  <option value="2">Alumni</option>
                </select>
              </div> */}
              <div className="suf-form-column">
            <label >User Type *</label>
            <select
              value={userTypeId}
              onChange={(e) => setUserTypeId(e.target.value)}
            >
              <option value="">Select User</option>
              {userTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.usertype}
                </option>
              ))}
            </select>
          </div>

              <div className="suf-form-group">
                <label>Batch Name *</label>
                <select required value={batchNameId} onChange={(e) => setBatchNameId(e.target.value)}>
                  <option value="">Select Batch</option>
                  <option value="1">2023</option>
                  <option value="2">2022</option>
                </select>
              </div>

              <div className="suf-form-group">
                <label>Email Address *</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="suf-form-group">
                <label>Passing Year *</label>
                <select required value={passedOutYearId} onChange={(e) => setPassedOutYearId(e.target.value)}>
                  <option value="">Select Year</option>
                  <option value="1">2025</option>
                  <option value="2">2024</option>
                </select>
              </div>

              <div className="suf-form-group">
                <label>Birth Date *</label>
                <input type="date" required value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
              </div>

              <div className="suf-form-group">
                <label>Password *</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
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
