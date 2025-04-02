import React from 'react';
import '../../styles/home.css';
import annastatueImage from '../../assets/images/annastatue.jpg';
import annalogo from '../../assets/images/anna_logo.png';
import aluminiImage from '../../assets/images/aluminibg2.jpg';
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


export default function Home () {

    const navigate = useNavigate();
  return (
    <>





<div className="app">
      {/* Top Header */}
      <div className="top-header">
        <div className="header-contacts">
          <span><MdEmail />Email : annauniversityalumini@example.com</span>
          <span><IoMdCall />Hotline : +00000000000</span>
        </div>
        <div className="header-auth">
          <button className="auth-btn"  onClick={() => navigate('/login')}>Login</button>
          <button className="auth-btn"  onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
       
            <div className="nav-logo">
            <img src={annalogo}  className="logo-img" />
            </div>
        <div className="nav-links"> 
          <a href="/">Home</a>
          <a href="/">Alumni</a>
          <a href="/">Events</a>
          <a href="/">News</a>
          <a href="/">Notice</a>
          <a href="/">Community</a>
          <a href="/">Contact us</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content"  style={{ 
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${annastatueImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
    <div className="content-wrapper">
        <h1>We are the proud student of anna university alumini forever</h1>
        <p>
          Anna university Alumini is a user friendly that helps alumni easily connect and manage their activities. 
          Alumni can sign up and get approved by submitting necessary documents, which allows them 
          to join the alumni community
        </p>
        
        <div className="cta-buttons">
          <button 
          className="cta-btn"
          onClick={() => navigate('/login')}
          >About Us →</button>
          <button 
          className="cta-btn"
          onClick={() => navigate('/signup')}
          >All Events →</button>
        </div>
    </div> 
      </main>
    </div>






    
    <section className="community-section">
    <img
          src={aluminiImage}
          className="alumini-img" />
      <div className="community-container">
        <h2 className="section-title">Join With Community</h2>
        <h3 className="section-subtitle">Why you should join us</h3>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h4 className="benefit-title">Attend Events</h4>
            <p className="benefit-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus elementum metus vitae vulputate. 
              Proin mattis ligula a nunc suscipit.
            </p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">💼</div>
            <h4 className="benefit-title">Advance Your Career</h4>
            <p className="benefit-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus elementum metus vitae vulputate. 
              Proin mattis ligula a nunc suscipit.
            </p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">👥</div>
            <h4 className="benefit-title">Reconnect with Friends</h4>
            <p className="benefit-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus elementum metus vitae vulputate. 
              Proin mattis ligula a nunc suscipit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="about-us-container">
      
      <div className="about-us-content">
      <h1 className="about-us-title">About Us</h1>
        <h2 className="about-anna-alumni">VISION</h2>
        <p className="about-description">
        To transform students into responsible citizens and competent professionals by focusing on
        assimilation, analysis, synthesis and dissemination of knowledge to meet the social needs.
        </p>
        <p className="about-description">
        <h2 className="about-anna-alumni">MISSION</h2>
          To impart quality education to meet the needs of the profession and society

          To attract and develop talented and committed human resource and provide an
          environment conducive for innovation and research

         To facilitate effective interactions among students and faculty with premier
         educational institutions, RD laboratories, industries, alumni and other stakeholders
        </p>
      </div>
    </div>

   
  </>


  );
}

// export default index ;