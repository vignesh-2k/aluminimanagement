import React from 'react';
import '../../../styles/AdminFlow/AdminDashboard.css';
import AdminMetricCard from './AdminMetricCard';
import AdminPaymentSummary from './AdminPaymentSummary';
import AdminEventTicketSummary from './AdminEventTicketSummary';
import AdminTransactionTable from './AdminTransactionTable';
import { Navbar } from '../../../layout/AdminFlow/Navbar';
import { TopBar } from '../../../layout/AdminFlow/Topbar';
import { HiOutlineUserGroup  } from "react-icons/hi";
import { MdOutlinePersonPin } from "react-icons/md";
import { BsCalendar4Event } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";


const Dashboard = () => {
  return (
    <>
     <div>
                <Navbar />
                <TopBar />
              </div>
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="metrics">
      <AdminMetricCard title="Total Alumni" value="0" icon={<HiOutlineUserGroup />} />
      <AdminMetricCard title="Current Members" value="0" icon={<MdOutlinePersonPin />} />
        <AdminMetricCard title="Upcoming Event" value="0" icon={<BsCalendar4Event />} />
        <AdminMetricCard title="Member" value="0" icon={<MdOutlinePersonPin />} />
        <AdminMetricCard title="Transaction" value="₹0.00" icon={<FaMoneyBillTrendUp />} />
      </div>
      <div className="summary-section">
        <AdminPaymentSummary />
        <AdminEventTicketSummary />
      </div>
      <AdminTransactionTable />
    </div>
   </> 
  );
};

export default Dashboard;
