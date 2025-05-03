import React, { useState } from "react";
// import "../../../styles/Event/AllEvent.css";
import '../../../../styles/AdminFlow/AdminEvent/AdminAllEvent.css';

import { TopBar } from "../../../../layout/AdminFlow/Topbar";
import { Navbar } from "../../../../layout/AdminFlow/Navbar";
import { FaSearch } from "react-icons/fa";

const AllEvent = () => {
  const [entries, setEntries] = useState(10);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="allevt-container">
        <h2 className="allevt-heading">All Event</h2>
        <div className="allevt-box">
          <div className="allevt-topbar">
            <div className="allevt-search">
              <span className="allevt-search-icon-left"><FaSearch /></span>
              <input type="text" placeholder="Search all event" />
            </div>

            <div className="allevt-show-entries">
              <label htmlFor="entries-select">Show</label>
              <select
                id="entries-select"
                value={entries}
                onChange={(e) => setEntries(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <label>entries</label>
            </div>
          </div>

          <table className="allevt-table">
            <thead>
              <tr>
                <th>Event Title</th>
                <th>Category</th>
                <th>Type</th>
                <th>Date & Time</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI-tools</td>
                <td><span className="allevt-category">workshop</span></td>
                <td><span className="allevt-type">Free</span></td>
                <td>1st May, 03:17:00 PM</td>
                <td>anna university, tirchy</td>
                <td><a href="/eventdetails" className="allevt-reservation">Reservation</a></td>
              </tr>
            </tbody>
          </table>

          <div className="allevt-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="allevt-pagination">
              <button>{"«"}</button>
              <button className="allevt-active">1</button>
              <button>{"»"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEvent;
