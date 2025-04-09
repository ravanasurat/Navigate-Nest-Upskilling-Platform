import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import Logo from "../assets/logo.png";
import Image from "../assets/signup.png";
import Google from "../assets/google.svg";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [proficientDomain, setProficientDomain] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signup, googleSignIn } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      
      // Create the user with Firebase auth
      await signup(email, password);
      
      navigate('/');
    } catch (error) {
      setError('Failed to create an account: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    try {
      setError('');
      setLoading(true);
      
      // Sign in with Google
      await googleSignIn();
      
      navigate('/');
    } catch (error) {
      setError('Failed to sign in with Google: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left section - Fixed */}
      <div className="relative w-1/2 h-screen hidden md:block">
        <img 
          src={Image}
          alt="Students in classroom" 
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 p-8 text-white bg-gradient-to-t from-black/70 to-transparent w-full">
        </div>
      </div>

      {/* Right section - Scrollable */}
      <div className="w-full md:w-1/2 overflow-y-auto h-screen">
        <div className="flex flex-col items-center px-6 py-4">
          <div className="w-full max-w-md">
            <img src={Logo} alt="Navigate Nest Logo" className="w-64 mx-auto" />
            
            <div className="flex bg-gray-100 rounded-full mb-4 overflow-hidden">
              <Link to="/login" className="w-1/2 py-3 font-medium text-center text-gray-700">
                Login
              </Link>
              <button className="w-1/2 py-3 font-medium bg-teal-400 text-white rounded-full">
                Register
              </button>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-md mb-6 text-center">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-full text-gray-800"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">User name</label>
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
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">Proficient Domain</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-full text-gray-800"
                  placeholder="Enter your Proficient Domain (e.g., Web Development)"
                  value={proficientDomain}
                  onChange={(e) => setProficientDomain(e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-teal-400 text-white font-semibold rounded-full hover:bg-teal-500 transition-colors disabled:bg-gray-300"
                disabled={loading}
              >
                Register
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
                <img src={Google} alt="Google" className="w-5 h-5" />
                <span>Sign up with Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}