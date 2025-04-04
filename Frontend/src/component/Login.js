import React, { useState } from 'react';
import '../styles/Login.css';
import { FaGoogle, FaFacebook, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      {/* Left Side with Background Image */}
      <div className="login-left">
        <div className="login-header">
          <h1>Anna University Alumni</h1>
          <p className="welcome-text">Welcome Back</p>
          <p className="register-text">
            Register now to see people who have attended or graduated from a particular school, college or university.
          </p>
        </div>
      </div>

      {/* Right Side with Login Form */}
      <div className="login-right">
        <div className="login-form">
          <h2>Log In</h2>
          <p className="signup-text">
            Don't have an account? <strong><a href="/signup">Sign up</a></strong>
          </p>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Your Email" />
            <div className="divider"></div>
          </div>

          <div className="form-group password-container">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="***********"
            />
            <div className="divider"></div>
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="login-button">Log In</button>

          <div className="social-login">
            <p>Or continue with</p>
            <div className="social-icons">
              <FaGoogle className="social-icon" />
              <FaFacebook className="social-icon" />
              <FaApple className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;