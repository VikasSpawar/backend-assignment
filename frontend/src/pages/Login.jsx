import AuthForm from '../components/AuthForm';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="glass p-6 rounded-2xl shadow-xl max-w-md w-full">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-white mb-2">
            Sign In
          </h2>
          <p className="text-gray-400 text-sm">
            Welcome back to Task Manager
          </p>
        </div>
        <AuthForm type="login" />
      
      </div>
    </div>
  );
}
