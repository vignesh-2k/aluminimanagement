import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//AlumniFlow
import Home from './component/AlumniFlow/home';
import Login from './component/AlumniFlow/Login';
import SignupForm from './component/AlumniFlow/Signupform';
import  Dashboard  from './component/AlumniFlow/Dashboard';
import AllList from './component/AlumniFlow/Alumini/AllList';
import Pendinglist from './component/AlumniFlow/Alumini/Pendinglist';
import AlumniProfileDetails from './component/AlumniFlow/Alumini/AlumniProfileDetails';
import AlumniProfile from './component/AlumniFlow/AlumniProfile';
import AlumniProfileEdit from './component/AlumniFlow/AlumniProfileEdit';
import CreateEvent from './component/AlumniFlow/Event/CreateEvent';
import EventTicketSummary from './component/AlumniFlow/Dashboard/EventTicketSummary';
import MetricCard from './component/AlumniFlow/Dashboard/MetricCard';
import PaymentSummary from './component/AlumniFlow/Dashboard/PaymentSummary';
import TransactionTable from './component/AlumniFlow/Dashboard/TransactionTable';
import AllEvent from './component/AlumniFlow/Event/AllEvent';
import MyEvent from './component/AlumniFlow/Event/MyEvent';
import EditEvent from './component/AlumniFlow/Event/EditEvent';
import CreateJobPost from './component/AlumniFlow/JobPost/CreateJobPost';
import ChangePassword from './component/AlumniFlow/Settings/ChangePassword';
import Transaction from './component/AlumniFlow/Transaction';
import AllPost from './component/AlumniFlow/JobPost/AllPost';
import EditPost from './component/AlumniFlow/JobPost/EditPost';
import EventDetails from './component/AlumniFlow/Event/AllEvent/EventDetails';
import MyTicket from './component/AlumniFlow/Event/MyTicket';
import MyPost from './component/AlumniFlow/JobPost/MyPost';

//AdminFlow
import AdminDashboard from './component/AdminFlow/AdminDashboard';
import AdminAllList from './component/AdminFlow/AdminAlumni/AdminAllList';
import AdminPendinglist from './component/AdminFlow/AdminAlumni/AdminPendinglist';
import AdminProfileDetails from './component/AdminFlow/AdminAlumni/AdminProfileDetails';
import AdminProfile from './component/AdminFlow/AdminProfile';
import AdminProfileEdit from './component/AdminFlow/AdminProfileEdit';
import AdminCreateEvent from './component/AdminFlow/AdminEvent/AdminCreateEvent';
import AdminEventDetails from './component/AdminFlow/AdminEvent/AdminAllEvent/AdminEventDetails';
import AdminMyTicket from './component/AdminFlow/AdminEvent/AdminMyTicket';
import AdminEventTicketSummary from './component/AdminFlow/AdminDashboard/AdminEventTicketSummary';
import AdminMetricCard from './component/AdminFlow/AdminDashboard/AdminMetricCard';
import AdminPaymentSummary from './component/AdminFlow/AdminDashboard/AdminPaymentSummary';
import AdminTransactionTable from './component/AdminFlow/AdminDashboard/AdminTransactionTable';
import AdminAllEvent from './component/AdminFlow/AdminEvent/AdminAllEvent';
import AdminMyEvent from './component/AdminFlow/AdminEvent/AdminMyEvent';
import AdminEditEvent from './component/AdminFlow/AdminEvent/AdminEditEvent';
import AdminCreateJobPost from './component/AdminFlow/AdminJobPost/AdminCreateJobPost';
import AdminChangePassword from './component/AdminFlow/AdminSettings/AdminChangePassword';
import AdminBatchSetting from './component/AdminFlow/AdminSettings/AdminBatchSetting';
import AdminDepartmentSetting from './component/AdminFlow/AdminSettings/AdminDepartmentSetting';
import AdminPassingYearSetting from './component/AdminFlow/AdminSettings/AdminPassingYearSetting';
import AdminTransaction from './component/AdminFlow/AdminTransaction';
import AdminAllPost from './component/AdminFlow/AdminJobPost/AdminAllPost';
import AdminEditPost from './component/AdminFlow/AdminJobPost/AdminEditPost';
import AdminPendingEvent from './component/AdminFlow/AdminEvent/AdminPendingEvent';
import AdminPendingPost from './component/AdminFlow/AdminJobPost/AdminPendingPost';


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
            <Route path="/alumini/alumniprofiledetails" element={<AlumniProfileDetails />} />
            <Route path="/alumniprofile" element={<AlumniProfile />} />
            <Route path="/alumniprofileedit" element={<AlumniProfileEdit />} />
            <Route path="/createevent" element={<CreateEvent />} />
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
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/allpost" element={<AllPost />} />
            <Route path="/editpost" element={<EditPost />} />
            <Route path="/mypost" element={<MyPost />} />
          </Routes>
        </div>

        <div className='admin-content'>
          <Routes>
            <Route path="/adminflow/admindashboard" element={<AdminDashboard />} />    
            <Route path='/adminflow/adminalumni/adminalllist' element={<AdminAllList />} />
            <Route path="/adminflow/adminalumni/adminpendinglist" element={<AdminPendinglist />} />
            <Route path="/adminflow/adminalumni/alumniprofiledetails" element={<AdminProfileDetails />} />
            <Route path="/adminflow/adminprofile" element={<AdminProfile />} />
            <Route path="/adminflow/adminprofileedit" element={<AdminProfileEdit />} />
            <Route path="/adminflow/admincreateevent" element={<AdminCreateEvent />} />
            <Route path="/adminflow/admineventdetails" element={<AdminEventDetails />} />
            <Route path="/adminflow/adminpendingevent" element= {<AdminPendingEvent />} />
            <Route path="/adminflow/adminmyticket" element={<AdminMyTicket />} />
            <Route path="/adminflow/admineventticketsummary" element={<AdminEventTicketSummary />} />
            <Route path="/adminflow/adminmetriccard" element={<AdminMetricCard />} />
            <Route path="/adminflow/adminpaymentsummary" element={<AdminPaymentSummary />} />
            <Route path="/adminflow/admintransactiontable" element={<AdminTransactionTable />} />
            <Route path="/adminflow/Adminallevent" element={<AdminAllEvent />} />
            <Route path="/adminflow/Adminmyevent" element={<AdminMyEvent />} />
            <Route path="/adminflow/Admineditevent" element={<AdminEditEvent />} />
            <Route path="/adminflow/admincreatejobpost" element={<AdminCreateJobPost />} />
            <Route path="/adminflow/adminsettings/adminchangepassword" element={<AdminChangePassword />} />
            <Route path="/adminflow/adminsettings/adminbatchsetting" element={<AdminBatchSetting />} />
            <Route path="/adminflow/adminsettings/admindepartmentsetting" element={<AdminDepartmentSetting />} />
            <Route path="/adminflow/adminsettings/adminpassingyearsetting" element={<AdminPassingYearSetting />} />
            <Route path="/adminflow/admintransaction" element={<AdminTransaction />} />
            <Route path="/adminflow/adminallpost" element={<AdminAllPost />} />
            <Route path="/adminflow/admineditpost" element={<AdminEditPost />} />
            <Route path="/adminflow/adminjobpost/adminpendingpost" element={<AdminPendingPost />} />
 
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
