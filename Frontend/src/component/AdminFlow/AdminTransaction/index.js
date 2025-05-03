import React from 'react';
import { Navbar } from "../../../layout/AdminFlow/Navbar";
import { TopBar } from "../../../layout/AdminFlow/Topbar";
// import "../../styles/Transaction/Transaction.css";
import "../../../styles/AdminFlow/AdminTransaction/AdminTransaction.css"
import { FiSearch } from 'react-icons/fi'; // Using react-icons for search icon

const AdminTransaction = () => {
  return (
    <>
    <div >
          <Navbar />
          <TopBar />
    <div className="transaction-container">
      <h2 className="transaction-title">Transaction History</h2>
      <div className="transaction-box">
        <div className="transaction-search-box">
          <FiSearch className="transaction-search-icon" />
          <input type="text" placeholder="Search here" />
        </div>
        <div className="transaction-table-controls">
          <label>Show</label>
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span>entries</span>
        </div>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Purpose</th>
              <th>Transaction ID</th>
              <th>Payment Method</th>
              <th>Date and Time</th>
              <th>Amount</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7" className="no-data">No data available in table</td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="pagination-buttons">
            <button>{'<<'}</button>
            <button>{'>>'}</button>
          </div>
        </div>
      </div>
      </div>
      </div>
      </>
  );
};

export default AdminTransaction;
