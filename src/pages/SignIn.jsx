import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import login from '../assets/login.jpg'

const SignIn = () => {
  return (
    <>
    <Header/>
    <section className="h-screen">
      <div className="w-4/5 ms-10  h-full px-6 py-24">
        <div className="g-6 flex ms-10 h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-9/12 lg:w-6/12">
            <img
              src={login}
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
          <h1 className='text-4xl text-center mb-8 font-bold'><span className='text-blue-700'>Start</span> Your Hunt</h1>
            <form>
              {/* Email input */}
              <input
                type="email"
                placeholder="Email address"
                className="mb-6 w-full px-4 py-2 text-lg border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Password input */}
              <input
                type="password"
                placeholder="Password"
                className="mb-6 w-full px-4 py-2 text-lg border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Remember me checkbox */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="mr-2"
                    defaultChecked
                  />
                  <label htmlFor="rememberMe" className="text-md font-semibold text-black">
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <span className='font-semibold'>New User?
                  <Link
                    to={'/sign-up'}
                    className="text-md ms-1 font-semibold text-blue-700 hover:text-primary-600 focus:text-primary-600"
                  >
                     Sign Up
                  </Link>
                </span>
              </div>

              {/* Submit button */}
              <button
                
                className="w-90 flex items-center justify-center bg-red-700 mx-auto text-white py-2 px-4 rounded-md text-lg font-medium shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                <p className="mx-4 mb-0 text-center font-semibold text-gray-600">
                  OR
                </p>
              </div>

              {/* Social login buttons */}
              <button
                className="mb-3 flex items-center justify-center w-90 bg-blue-600 mx-auto text-white py-2 px-4 rounded-md text-sm font-medium shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FaGoogle className="mr-2" />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SignIn