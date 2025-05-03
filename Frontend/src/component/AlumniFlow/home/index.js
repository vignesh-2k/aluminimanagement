import React from 'react';
import "../../../styles/AlumniFlow/home.css";
import annastatueImage from '../../../assets/images/annastatue.jpg';
import annalogo from '../../../assets/images/anna_logo.png';
import aluminiImage from '../../../assets/images/aluminibg2.jpg';
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer"


export default function Home () {

    const navigate = useNavigate();
  return (
    <>

<div className="home-app">
      {/* Top Header */}
      <div className="home-top-header">
        <div className="home-header-contacts">
          <span><MdEmail />Email : annauniversityalumni@example.com</span>
          <span><IoMdCall />Hotline : +00000000000</span>
        </div>
        <div className="home-header-auth">
          <button className="home-cta-btn"  onClick={() => navigate('/login')}>Login </button>
          <button className="home-cta-btn"  onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="home-navbar">
        <div className="home-nav-logo">
          <img src={annalogo}  className="home-logo-img" />
        </div>
        <div className="home-nav-links"> 
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
      <main className="home-main-content" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${annastatueImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="home-content-wrapper">
          <h1>We are the proud student of anna university alumni forever</h1>
          <p>
            Anna university Alumni is a user friendly that helps alumni easily connect and manage their activities. 
            Alumni can sign up and get approved by submitting necessary documents, which allows them 
            to join the alumni community
          </p>

          <div className="home-cta-buttons">
            <button 
              className="home-cta-btn"
              onClick={() => navigate('/login')}
            >About Us →</button>
            <button 
              className="home-cta-btn"
              onClick={() => navigate('/signup')}
            >All Events →</button>
          </div>
        </div> 
      </main>
    </div>

    <section className="home-community-section">
      <img src={aluminiImage} className="home-alumini-img" />
      <div className="home-community-container">
        <h2 className="home-section-title">Join With Community</h2>
        <h3 className="home-section-subtitle">Why you should join us</h3>

        <div className="home-benefits-grid">
          <div className="home-benefit-card">
            <div className="home-benefit-icon">🎯</div>
            <h4 className="home-benefit-title">Attend Events</h4>
            <p className="home-benefit-description">
            Discover and join exciting college events, 
            from fests to workshops, 
            and make the most of your campus life!.
            </p>
          </div>

          <div className="home-benefit-card">
            <div className="home-benefit-icon">💼</div>
            <h4 className="home-benefit-title">Advance Your Career</h4>
            <p className="home-benefit-description">
             
            Boost your professional journey with internships, skill-building workshops, networking opportunities, and career guidance tailored for college students.
          
            </p>
          </div>

          <div className="home-benefit-card">
            <div className="home-benefit-icon">👥</div>
            <h4 className="home-benefit-title">Reconnect with Friends</h4>
            <p className="home-benefit-description">
            Catch up with old friends, share memories,
             and stay connected through college events 
             and alumni networks.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="home-about-us-container">
      <div className="home-about-us-content">
        <h1 className="home-about-us-title">About Us</h1>
        <h2 className="home-about-anna-alumni">VISION</h2>
        <p className="home-about-description">
          To transform students into responsible citizens and competent professionals by focusing on
          assimilation, analysis, synthesis and dissemination of knowledge to meet the social needs.
        </p>
        <p className="home-about-description">
          <h2 className="home-about-anna-alumni">MISSION</h2>
            To impart quality education to meet the needs of the profession and society
            To attract and develop talented and committed human resource and provide an
            environment conducive for innovation and research
            To facilitate effective interactions among students and faculty with premier
            educational institutions, RD laboratories, industries, alumni and other stakeholders
        </p>
      </div>
    </div>

    <Footer />
  </>
  );
} 
