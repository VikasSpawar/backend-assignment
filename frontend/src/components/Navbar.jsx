import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="glass p-4 rounded-b-xl shadow-xl sticky top-0 z-50">
      <div className="max-w-2xl mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-bold text-white">Tasks</Link>
        <button onClick={logout} className="btn-secondary text-sm px-3 py-1">
          Logout
        </button>
      </div>
    </nav>
  );
}
