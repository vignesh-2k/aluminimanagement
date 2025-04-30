import React from "react";
import "../../../styles/Event/MyTicket.css";
import { TopBar } from "../../../layout/Topbar";
import { Navbar } from "../../../layout/Navbar";
import { FaSearch } from "react-icons/fa";

const MyTicket = () => {
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
                <td>
                  <span className="mt-type-badge">Free</span>
                </td>
                <td>2025-05-01 15:17:00</td>
                <td>anna university, tirchy</td>
                <td>
                  <a href="#" className="mt-download-link">
                    Download
                  </a>
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
    </>
  );
};

export default MyTicket;
