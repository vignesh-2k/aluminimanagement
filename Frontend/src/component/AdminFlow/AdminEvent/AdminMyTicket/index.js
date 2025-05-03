import React, { useState } from "react";
// import "../../../styles/Event/MyTicket.css";
import "../../../../styles/AdminFlow/AdminEvent/AdminMyTicket.css"
import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { FaSearch, FaDownload, FaArrowLeft } from "react-icons/fa";

const MyTicket = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="mt-container">
        <h1 className="mt-title">My Ticket</h1>
        <div className="mt-card">
          <div className="mt-header">
            <div className="mt-search-box">
              <i className="mt-search-icon"><FaSearch /></i>
              <input
                type="text"
                placeholder="Search event"
                className="mt-search-input"
              />
            </div>
            <div className="mt-show-entries">
              <label>Show</label>
              <select className="mt-select">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>entries</span>
            </div>
          </div>

          <table className="mt-table">
            <thead>
              <tr>
                <th>Event Title</th>
                <th>Ticket Id</th>
                <th>Type</th>
                <th>Date &amp; Time</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI-tools</td>
                <td>60001</td>
                <td><span className="mt-type-badge">Free</span></td>
                <td>2025-05-01 15:17:00</td>
                <td>anna university, tirchy</td>
                <td>
                  <button onClick={handleOpenPopup} className="mt-download-link">
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="mt-pagination">
              <button>{'«'}</button>
              <button className="mt-active">1</button>
              <button>{'»'}</button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="tp-overlay">
          <div className="tp-popup">
            <div className="tp-header">
              <button className="tp-back" onClick={handleClosePopup}>
                <FaArrowLeft /> Back To Dashboard
              </button>
              <button className="tp-download">
                Download <FaDownload />
              </button>
            </div>

            <div className="tp-content">
              <div className="tp-left">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/10/07/18/graduation-2386974_1280.png"
                  alt="Event"
                  className="tp-image"
                />
              </div>

              <div className="tp-middle">
                <h2 className="tp-title">AI-tools</h2>
                <p className="tp-ticket-id">Ticket#60001</p>
                <p className="tp-reserved">
                  Reserved by Administrator Doe, 29 Apr 2025
                </p>
                <p className="tp-location-label">Location</p>
                <p className="tp-location">anna university, tirchy</p>
              </div>

              <div className="tp-right">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket#60001"
                  alt="QR Code"
                  className="tp-qr"
                />
                <p className="tp-scan-text">Scan to verify</p>
                <img
                  src="https://barcode.tec-it.com/barcode.ashx?data=60001&code=Code128&translate-esc=false"
                  alt="Barcode"
                  className="tp-barcode"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyTicket;
