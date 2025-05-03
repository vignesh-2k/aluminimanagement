import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', amount: 400 },
  { name: 'Feb', amount: 300 },
  { name: 'Mar', amount: 500 },
  { name: 'Apr', amount: 200 },
  { name: 'May', amount: 450 },
  { name: 'Jun', amount: 350 },
];

const PaymentSummary = () => (
  <div className="summary-box">
    <h4>Payment Summary</h4>
    <div style={{ width: '100%', height: '180px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#4a90e2" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default PaymentSummary;
