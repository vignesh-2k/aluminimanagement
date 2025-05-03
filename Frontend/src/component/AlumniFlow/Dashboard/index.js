import React from 'react';
import '../../../styles/AlumniFlow/Dashboard.css';
import MetricCard from './MetricCard';
import PaymentSummary from './PaymentSummary';
import EventTicketSummary from './EventTicketSummary';
import TransactionTable from './TransactionTable';
import { Navbar } from '../../../layout/AlumniFlow/Navbar';
import { TopBar } from '../../../layout/AlumniFlow/Topbar';
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
      <MetricCard title="Total Alumni" value="0" icon={<HiOutlineUserGroup />} />
      <MetricCard title="Current Members" value="0" icon={<MdOutlinePersonPin />} />
        <MetricCard title="Upcoming Event" value="0" icon={<BsCalendar4Event />} />
        <MetricCard title="Member" value="0" icon={<MdOutlinePersonPin />} />
        <MetricCard title="Transaction" value="₹0.00" icon={<FaMoneyBillTrendUp />} />
      </div>
      <div className="summary-section">
        <PaymentSummary />
        <EventTicketSummary />
      </div>
      <TransactionTable />
    </div>
   </> 
  );
};

export default Dashboard;
