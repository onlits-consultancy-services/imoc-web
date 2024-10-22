import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from './components/Dashboard';
import Login from './components/authentication/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            exact
            path='/'
            element={<Login />}
          />
          <Route 
            path='/Dashboard'
            element={<Dashboard />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
