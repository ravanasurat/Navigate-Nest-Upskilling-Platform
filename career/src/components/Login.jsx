import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Logo from "../assets/logo.png";
import Image from "../assets/login.png";
import Google from "../assets/google.svg";

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
  </svg>
);

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, googleSignIn } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(username, password);
      navigate('/');
    } catch (error) {
      setError('Failed to sign in: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    try {
      setError('');
      setLoading(true);
      await googleSignIn();
      navigate('/');
    } catch (error) {
      setError('Failed to sign in with Google: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen w-full">
     
      <div className="relative hidden md:flex md:w-1/2 overflow-hidden">
        <img 
          src={Image}
          alt="Students in classroom" 
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 p-8 text-white bg-gradient-to-t from-black/70 to-transparent w-full">
        </div>
      </div>

 
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
        <img src={Logo} alt="Nest Logo" className="mb-6 mx-auto w-100 h-50" />
          
 
          <div className="flex bg-gray-100 rounded-full mb-8 overflow-hidden">
            <button className="w-1/2 py-3 font-medium bg-teal-400 text-white rounded-full">
              Login
            </button>
            <Link to="/signup" className="w-1/2 py-3 font-medium text-center text-gray-700">
              Register
            </Link>
          </div>
          
          <p className="text-center text-gray-600 mb-8">
          </p>
          
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-6 text-center">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-full text-gray-800"
                placeholder="Enter your User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border border-gray-200 rounded-full text-gray-800"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-teal-400 focus:ring-teal-400 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-teal-400 hover:underline">
                Forgot Password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-teal-400 text-white font-semibold rounded-full hover:bg-teal-500 transition-colors disabled:bg-gray-300"
              disabled={loading}
            >
              Login
            </button>
            
            <div className="relative flex items-center mt-8 mb-8">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-600">OR</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            <button
              type="button"
              className="w-full py-3 px-4 border border-gray-200 rounded-full flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <img src={Google} alt="Google" className="w-6 w-5" />
              <span>Sign in with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}