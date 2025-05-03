import React from 'react';

const MetricCard = ({ title, value, icon }) => (
  <div className="metric-card">
    <div className="metric-content">
      <span>{title}</span>
      <h3>{value}</h3>
    </div>
    <div className="metric-icon">{icon}</div>
  </div>
);

export default MetricCard;
