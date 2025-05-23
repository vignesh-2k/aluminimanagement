import React, { useEffect, useState } from 'react';
import '../styles/Signupform.css';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import {
  getBatchList,
  getDepartmentList,
  getGenderList,
  getPassedOutYearList,
  getUserTypes,
} from './services/register';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [departmentId, setDepartmentId] = useState('');
  const [department, setDepartment] = useState([]);

  const [genderId, setGenderId] = useState('');
  const [gender, setGender] = useState([]);

  const [userTypeId, setUserTypeId] = useState('');
  const [userTypes, setUserTypes] = useState([]);

  const [batchNameId, setBatchNameId] = useState('');
  const [batchNames, setBatchNames] = useState([]);

  const [passedOutYearId, setPassedOutYearId] = useState('');
  const [passingYear, setPassingYear] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadUserTypeData();
    loadBatchNameData();
    loadPassingYearData();
    loadDepartment();
    loadGender();
  }, []);

  const loadUserTypeData = async () => {
    try {
      const response = await getUserTypes();
      setUserTypes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadBatchNameData = async () => {
    try {
      const response = await getBatchList();
      setBatchNames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadPassingYearData = async () => {
    try {
      const response = await getPassedOutYearList();
      setPassingYear(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadDepartment = async () => {
    try {
      const response = await getDepartmentList();
      setDepartment(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadGender = async () => {
    try {
      const response = await getGenderList();
      setGender(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password mismatch');
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
      address: 'Andipatty',
      city: 'Andipatty',
      state: 'Tamilnadu',
      pinCode: '625512',
      linkedInUrl: 'linkedin.com/yourprofile',
      companyName: 'Company',
      companyDesignation: 'Designation',
      companyAddress: 'Company Address',
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
      console.error('Registration failed:', error);
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
                <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required>
                  <option value="">Select Department</option>
                  {department.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.department}
                    </option>
                  ))}
                </select>
              </div>

              <div className="suf-form-group">
                <label>ID/Roll Number *</label>
                <input type="text" required value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
              </div>

              <div className="suf-form-group">
                <label>Gender *</label>
                <select value={genderId} onChange={(e) => setGenderId(e.target.value)} required>
                  <option value="">Select Gender</option>
                  {gender.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.gender}
                    </option>
                  ))}
                </select>
              </div>

              <div className="suf-form-group">
                <label>Confirm Password *</label>
                <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>

            <div className="suf-form-column">
              <div className="suf-form-group">
                <label>User Type *</label>
                <select value={userTypeId} onChange={(e) => setUserTypeId(e.target.value)} required>
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
                <select value={batchNameId} onChange={(e) => setBatchNameId(e.target.value)} required>
                  <option value="">Select Batch</option>
                  {batchNames.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.batchName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="suf-form-group">
                <label>Email Address *</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="suf-form-group">
                <label>Passing Year *</label>
                <select value={passedOutYearId} onChange={(e) => setPassedOutYearId(e.target.value)} required>
                  <option value="">Select Year</option>
                  {passingYear.map((py) => (
                    <option key={py.id} value={py.id}>
                      {py.passedOutYear}
                    </option>
                  ))}
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
