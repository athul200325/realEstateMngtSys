import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import login from '../assets/login.jpg'

const SignIn = () => {
  return (
    <>
    <Header/>
    <section className="h-screen flex items-center justify-center bg-gray-50">
  <div className="w-4/5 mx-10 h-full px-6 py-24 flex flex-col md:flex-row items-center justify-center">
    {/* Left column with image */}
    <div className="mb-12 md:mb-0 md:w-7/12 lg:w-5/12">
      <img
        src={login}
        className="w-full rounded-lg shadow-md"
        alt="Phone image"
      />
    </div>

    {/* Right column with form */}
    <div className="md:w-6/12 lg:w-5/12 lg:ml-12">
      <h1 className="text-4xl text-center font-bold mb-8 text-slate-700">
        <span className="text-indigo-700">Start</span> Your Hunt
      </h1>
      
      <form>
        {/* Email input */}
        <input
          type="email"
          placeholder="Email address"
          className="mb-4 w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Remember me and Sign up */}
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

        {/* Sign in button */}
        <button
          className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
        >
          Sign in
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <p className="px-4 text-gray-500 font-semibold">OR</p>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social login with Google */}
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
  )
}

export default SignIn