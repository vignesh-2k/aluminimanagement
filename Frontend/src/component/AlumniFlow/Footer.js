import React from 'react';
import '../../styles/AlumniFlow/Footer.css';

function Footer() {  // Changed component name to start with uppercase
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Anna University Alumni</h2>  {/* Fixed typo in "Alumni" */}
          <p className="footer-description">
           Anna university was established on 4th Septemper , 1978 as a university type of university. This University was named after late Dr.C.N.Annadurai, former Chief Minister of Tamil Nadu.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Useful Links</h3>
          <div className="footer-links">
            <div className="links-column">
              <a href="#" className="footer-link">Notice</a>
              <a href="#" className="footer-link">Events</a>
              <a href="#" className="footer-link">Stories</a>
              <a href="#" className="footer-link">News</a>
            </div>
            <div className="links-column">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Cookie Policy</a>
              <a href="#" className="footer-link">Terms & Condition</a>
              <a href="#" className="footer-link">Refund Policy</a>
            </div>
            <div className="links-column">
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">Trichy, Tamilnadu</a>
              <a href="#" className="footer-link">Phone: +00000000000</a>
              <a href="#" className="footer-link">Email: annauniversityalumni@example.com</a>  {/* Fixed typo in "alumni" */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;  // Changed to match the component name