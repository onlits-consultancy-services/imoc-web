import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Account from './components/account/Account';
import AccountGroup from './components/account-group/AccountGroup';
import Attendance from './components/attendance/Attendance';
import Batch from './components/batch/Batch';
import Dashboard from './components/Dashboard';
import Enrollment from './components/enrollment/Enrollment';
import Lead from './components/lead/Lead';
import Learner from './components/learner/Learner';
import Login from './components/authentication/Login';
import NewOrganization from './components/organization/NewOrganization';
import Organization from './components/organization/Organization';
import Program from './components/program/Program';

function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route
            path='/Account'
            element={<Account />}
          />

          <Route
            path='/AccountGroup'
            element={<AccountGroup />}
          />

          <Route
            path='/Attendance'
            element={<Attendance />}
          />

          <Route
            path='/Batch'
            element={<Batch />}
          />

          <Route
            path='/Dashboard'
            element={<Dashboard />}
          />

          <Route
            path='/Enrollment'
            element={<Enrollment />}
          />

          <Route
            path='/Lead'
            element={<Lead />}
          />

          <Route
            path='/Learner'
            element={<Learner />}
          />

          <Route
            exact
            path='/'
            element={<Login />}
          />

          <Route 
            path='/Organization/New'
            element={<NewOrganization />}
          />
          
          <Route
            path='/Organization'
            element={<Organization />}
          />

          <Route
            path='/Program'
            element={<Program />}
          />

        </Routes>

      </Router>
    </>
  );
}

export default App;
