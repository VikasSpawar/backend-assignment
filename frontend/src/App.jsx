import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<PrivateDashboard />}
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

// ✅ Move token logic INSIDE component
function PrivateDashboard() {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
