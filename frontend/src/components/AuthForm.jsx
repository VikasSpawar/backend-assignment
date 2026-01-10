import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { authAPI } from '../services/api';

export default function AuthForm({ type }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await (type === 'login' ? authAPI.login(formData) : authAPI.register(formData));
      localStorage.setItem('token', data.token);
      toast.success(type === 'login' ? 'Welcome back' : 'Account created');
      navigate('/dashboard', { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="glass p-8 rounded-xl w-full max-w-sm shadow-xl">
      
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50"
          >
            {loading ? 'Loading...' : type === 'login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          {type === 'login' ? "Don't have an account?" : 'Have an account?'}{' '}
          <Link to={type === 'login' ? '/register' : '/login'} className="text-blue-400 hover:text-blue-300">
            {type === 'login' ? 'Sign up' : 'Sign in'}
          </Link>
        </p>
      </div>
    </div>
  );
}
