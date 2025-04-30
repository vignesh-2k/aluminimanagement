import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Login from './component/Login';
import SignupForm from './component/Signupform';
import  Dashboard  from './component/Dashboard';
import AllList from './component/Alumini/AllList';
import Pendinglist from './component/Alumini/Pendinglist';
import AlumniProfile from './component/Alumini/AlumniProfile';
import ChatApp from './component/ChatApp';
import AdminProfile from './component/AdminProfile';
import AdminProfileEdit from './component/AdminProfileEdit';
import CreateEvent from './component/Event/CreateEvent';
import PendingEvent from './component/Event/PendingEvent';
import EventTicketSummary from './component/Dashboard/EventTicketSummary';
import MetricCard from './component/Dashboard/MetricCard';
import PaymentSummary from './component/Dashboard/PaymentSummary';
import TransactionTable from './component/Dashboard/TransactionTable';
import AllEvent from './component/Event/AllEvent';
import MyEvent from './component/Event/MyEvent';
import EditEvent from './component/Event/EditEvent';
import CreateJobPost from './component/JobPost/CreateJobPost';
import ChangePassword from './component/Settings/ChangePassword';
import BatchSetting from './component/Settings/BatchSetting';
import DepartmentSetting from './component/Settings/DepartmentSetting';
import PassingYearSetting from './component/Settings/PassingYearSetting';
import Transaction from './component/Transaction';
import AllPost from './component/JobPost/AllPost';
import PendingPost from './component/JobPost/PendingPost';
import EditPost from './component/JobPost/EditPost';
import EventDetails from './component/Event/AllEvent/EventDetails';
import MyTicket from './component/Event/MyTicket';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />          
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/alumini/alllist' element={<AllList />} />
            <Route path="/alumini/pendinglist" element={<Pendinglist />} />
            <Route path="/alumini/alumniprofile" element={<AlumniProfile />} />
            <Route path="/chatapp" element={<ChatApp />} />
            <Route path="/adminprofile" element={<AdminProfile />} />
            <Route path="/adminprofileedit" element={<AdminProfileEdit />} />
            <Route path="/createevent" element={<CreateEvent />} />
            <Route path="/pendingevent" element={<PendingEvent />} />
            <Route path="/eventdetails" element={<EventDetails/>} />
            <Route path="/myticket" element={<MyTicket />} />

            <Route path="/eventticketsummary" element={<EventTicketSummary />} />
            <Route path="/metriccard" element={<MetricCard />} />
            <Route path="/paymentsummary" element={<PaymentSummary />} />
            <Route path="/transactiontable" element={<TransactionTable />} />
            <Route path="/allevent" element={<AllEvent />} />
            <Route path="/myevent" element={<MyEvent />} />
            <Route path="/editevent" element={<EditEvent />} />
            <Route path="/createjobpost" element={<CreateJobPost />} />
            <Route path="/settings/changepassword" element={<ChangePassword />} />
            <Route path="/settings/batchsetting" element={<BatchSetting />} />
            <Route path="/settings/departmentsetting" element={<DepartmentSetting />} />
            <Route path="/settings/passingyearsetting" element={<PassingYearSetting />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/allpost" element={<AllPost />} />
            <Route path="/pendingpost" element={<PendingPost />} />
            <Route path="/editpost" element={<EditPost />} />


          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
