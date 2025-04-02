import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Login from './component/Login';
import Footer from './component/Footer';
import SignupForm from './component/Signupform';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />          
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;