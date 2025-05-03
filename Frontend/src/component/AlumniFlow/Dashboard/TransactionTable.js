import React from 'react';

const TransactionTable = () => (
  <div className="transaction-section">
    <h4>Latest Transaction Summary</h4>
    <input type="text" placeholder="Search transaction" className="search-input" />
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Purpose</th>
          <th>Transaction ID</th>
          <th>Payment Method</th>
          <th>Date and Time</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="6">No data available in table</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TransactionTable;
