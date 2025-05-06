import React, { useEffect, useState } from "react";
import "../../../../styles/AlumniFlow/Event/AllEvent.css";
import { TopBar } from "../../../../layout/AlumniFlow/Topbar";
import { Navbar } from "../../../../layout/AlumniFlow/Navbar";
import { FaSearch } from "react-icons/fa";
import { getAllEvent } from "../../../services/almEvent";

const AllEvent = () => {
  const [entries, setEntries] = useState(10);
  const [event, setEvent] = useState([]);


  const getEvent = async ( req, res ) => {
    try{
      const response = await getAllEvent();
      setEvent(response.data);
    } catch(error) {
      console.log(error , "error fetching event Data");
    }
  }

  useEffect( ( ) => {
    getEvent();
  } , [ ]);

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
                <th>S.No</th>
                <th>Event Title</th>
                <th>Category</th>
                <th>Type</th>
                <th>Date & Time</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {event.map( (eve , index) => {
                return (
                    <tr key={eve.eventId}>
                    <td>{index+1}</td>
                    <td>{eve.eventTitle}</td>
                    <td><span className="allevt-category">{eve.eventCategory}</span></td>
                    <td><span className="allevt-type">{eve.eventType}</span></td>
                    <td>{eve.eventDate}</td>
                    <td>{eve.location}</td>
                    <td><a href="/eventdetails" className="allevt-reservation">Reservation</a></td>
                  </tr>
                )  }
            )}
              
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
