import React, { useState } from "react";
import "../../../../styles/AlumniFlow/Event/MyTicket.css";
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import { FaSearch, FaDownload, FaArrowLeft } from "react-icons/fa";

const MyTicket = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="almt-container">
        <h1 className="almt-title">My Ticket</h1>
        <div className="almt-card">
          <div className="almt-header">
            <div className="almt-search-box">
              <i className="almt-search-icon"><FaSearch /></i>
              <input
                type="text"
                placeholder="Search event"
                className="almt-search-input"
              />
            </div>
            <div className="almt-show-entries">
              <label>Show</label>
              <select className="almt-select">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>entries</span>
            </div>
          </div>

          <table className="almt-table">
            <thead className="almt-table-head">
              <tr>
                <th className="almt-th-left">Event Title</th>
                <th>Ticket Id</th>
                <th>Type</th>
                <th>Date &amp; Time</th>
                <th>Location</th>
                <th className="almt-th-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI-tools</td>
                <td>60001</td>
                <td><span className="almt-type-badge">Free</span></td>
                <td>2025-05-01 15:17:00</td>
                <td>anna university, tirchy</td>
                <td>
                  <button onClick={handleOpenPopup} className="almt-download-link">
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="almt-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="almt-pagination">
              <button>{'«'}</button>
              <button className="almt-active">1</button>
              <button>{'»'}</button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="almt-overlay">
          <div className="almt-popup">
            <div className="almt-popup-header">
              <button className="almt-back" onClick={handleClosePopup}>
                <FaArrowLeft /> Back To Dashboard
              </button>
              <button className="almt-download">
                Download <FaDownload />
              </button>
            </div>

            <div className="almt-popup-content">
              <div className="almt-left">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/10/07/18/graduation-2386974_1280.png"
                  alt="Event"
                  className="almt-image"
                />
              </div>

              <div className="almt-middle">
                <h2 className="almt-title-popup">AI-tools</h2>
                <p className="almt-ticket-id">Ticket#60001</p>
                <p className="almt-reserved">
                  Reserved by Administrator Doe, 29 Apr 2025
                </p>
                <p className="almt-location-label">Location</p>
                <p className="almt-location">anna university, tirchy</p>
              </div>

              <div className="almt-right">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket#60001"
                  alt="QR Code"
                  className="almt-qr"
                />
                <p className="almt-scan-text">Scan to verify</p>
                <img
                  src="https://barcode.tec-it.com/barcode.ashx?data=60001&code=Code128&translate-esc=false"
                  alt="Barcode"
                  className="almt-barcode"
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
