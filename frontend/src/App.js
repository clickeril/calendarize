import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/Login';
import DashboardPage from './components/Dashboard/Dashboard';
import LeavePage from './components/Leave/Leave';
import AdminPage from'./components/Admin/Admin';
import ProfilePage from'./components/Profile/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/leave" element={<LeavePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
