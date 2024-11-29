import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import login from '../assets/login.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice.js';

const SignIn = () => {
  const [formData, setFormDta] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const {loading,error}=useSelector((state) => state.user);

  const dispatch=useDispatch()
  const handleChange = (e) => {
    setFormDta({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      dispatch(signInFailure('Please enter a valid email address.'))
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      dispatch(signInFailure('Password must be at least 6 characters long.'))
      return;
    }

    

    try {
      dispatch(signInStart())
      const res = await fetch('/realestate/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message || 'Signin failed. Please try again.'))
        return;
      }

      dispatch(signInSuccess(data))
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message || 'An unexpected error occurred. Please try again.'))
    }
  };

  return (
    <>
      <Header />
      <section className="h-screen flex items-center justify-center bg-gray-50">
        <div className="w-4/5 mx-10 h-full px-6 py-24 flex flex-col md:flex-row items-center justify-center">
          <div className="mb-12 md:mb-0 md:w-7/12 lg:w-5/12">
            <img
              src={login}
              className="w-full rounded-lg shadow-md"
              alt="Phone image"
            />
          </div>

          <div className="md:w-6/12 lg:w-5/12 lg:ml-12">
            <h1 className="text-4xl text-center font-bold mb-8 text-slate-700">
              <span className="text-indigo-700">Start</span> Your Hunt
            </h1>

            <form onSubmit={handleSubmit}>
              <input
                id="email"
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                className="mb-4 w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                id="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="mb-4 w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="mr-2"
                    defaultChecked
                  />
                  <label htmlFor="rememberMe" className="text-md font-medium text-gray-600">
                    Remember me
                  </label>
                </div>
                <span className="font-medium text-gray-600">
                  New User?
                  <Link
                    to="/sign-up"
                    className="text-indigo-700 ml-1 font-medium hover:text-indigo-600 focus:text-blue-600"
                  >
                    Sign Up
                  </Link>
                </span>
              </div>

              <button
                disabled={loading}
                className={`w-full py-3 rounded-lg text-lg font-semibold shadow-md transition duration-200 ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-500 focus:ring-red-500 text-white'
                }`}
              >
                {loading ? 'Loading...' : 'Sign In'}
              </button>

              {error && (
                <p className="text-center text-red-800 font-semibold" aria-live="polite">
                  {error}
                </p>
              )}

              <div className="flex items-center my-6">
                <hr className="flex-1 border-gray-300" />
                <p className="px-4 text-gray-500 font-semibold">OR</p>
                <hr className="flex-1 border-gray-300" />
              </div>

              <button
                className="w-full bg-blue-600 flex items-center justify-center py-3 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                <FaGoogle className="mr-3" />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
