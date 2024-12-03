import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-6 border-b border-gray-200">
          <div className="flex items-center">
            <Link to={'/'}>
              <h1 className="font-bold text-xl sm:text-2xl flex items-center text-slate-800">
                <img width={'25'} src={logo} alt="Logo" />
                <span className="ml-2">EALTOR</span>
              </h1>
            </Link>
          </div>
          <a
            href="javascript:;"
            className="flex items-center gap-2 py-2.5 px-7 rounded-full bg-gray-900 shadow-md text-white font-semibold hover:bg-gray-800"
          >
            Contact Us
            <svg
              width="17"
              height="12"
              viewBox="0 0 17 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 6L14.8333 6M10.6667 11L15.0774 6.58926C15.3552 6.31148 15.4941 6.17259 15.4941 6C15.4941 5.82741 15.3552 5.68852 15.0774 5.41074L10.6667 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Main Links Section */}
        <div className="flex flex-col lg:flex-row py-8 gap-12 lg:gap-24 justify-between">
          <div className="flex flex-col sm:flex-row gap-12 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Real Estate</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/properties" className="text-gray-600 hover:text-gray-900">
                    Properties for Sale
                  </Link>
                </li>
                <li>
                  <Link to="/agents" className="text-gray-600 hover:text-gray-900">
                    Meet Our Agents
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/buy" className="text-gray-600 hover:text-gray-900">
                    Buy a Home
                  </Link>
                </li>
                <li>
                  <Link to="/sell" className="text-gray-600 hover:text-gray-900">
                    Sell a Home
                  </Link>
                </li>
                <li>
                  <Link to="/rent" className="text-gray-600 hover:text-gray-900">
                    Rent a Home
                  </Link>
                </li>
                <li>
                  <Link to="/mortgages" className="text-gray-600 hover:text-gray-900">
                    Mortgage Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <a href="javascript:;" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="text-gray-600 hover:text-gray-900">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="text-gray-600 hover:text-gray-900">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-semibold text-2xl text-gray-900 leading-9 mb-8 text-center lg:text-left">
              Join EALTOR for the Latest Listings and Tips
            </h3>
            <div className="flex items-center gap-6">
              <input
                type="email"
                name="email"
                className="py-1 px-6 bg-gray-100 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none w-full max-w-xl"
                placeholder="Your email here..."
              />
              <button
                type="submit"
                className="py-2.5 px-7 bg-indigo-600 shadow-md rounded-full text-white font-semibold hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
            <span className="text-sm text-gray-500">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.
            </span>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-indigo-600"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-indigo-600"
              >
                <FaLinkedinIn className="text-3xl" />
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-indigo-600"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-indigo-600"
              >
                <FaFacebook className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
