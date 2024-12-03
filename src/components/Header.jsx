import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import profileImg from '../assets/profile.jpg'; // Import the default profile image
import { useSelector } from 'react-redux';
import SERVER_URL from '../services/serverUrl';

const Header = ({ insideHome, bgHeader, existingProfileImg }) => {
  const { currentUser } = useSelector((state) => state.user);

  // Determine the profile image to display
  const profileImage = existingProfileImg
    ? `${SERVER_URL}/uploads/${existingProfileImg}`
    : currentUser?.avatar
    ? currentUser.avatar
    : profileImg; // Default to `profile.jpg` if no avatar exists

  return (
    <header
      className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-l-gray-50 bg-white/50 py-3 shadow backdrop-blur-md md:top-6 md:rounded-3xl lg:max-w-screen-lg"
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link to={'/'}>
              <h1 className="font-bold flex text-sm sm:text-xl">
                <img width={'25'} src={logo} alt="Logo" />
                <span className="text-slate-800">EALTOR</span>
              </h1>
            </Link>
          </div>
          {insideHome && (
            <ul className="flex font-semibold gap-4">
              <div className="mt-2 me-10">
                <Link to={'/'}>
                  <li className="hidden bg-transparent text-black border-1 rounded-md p-2 px-3 ms-8 sm:inline">
                    Home
                  </li>
                </Link>
                <Link to={'/about'}>
                  <li className="hidden bg-transparent text-black border-1 rounded-md p-2 px-3 mx-4 sm:inline">
                    About
                  </li>
                </Link>
              </div>
            </ul>
          )}

          <div className="flex items-center justify-end gap-3">
            {currentUser ? (
              <Link to={'/profile'}>
                <img
                  className="w-12 h-12 rounded-full cursor-pointer object-cover"
                  src={profileImage}
                  alt="Profile"
                />
              </Link>
            ) : (
              <>
                <Link
                  className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                  to={'/sign-up'}
                >
                  Sign up
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  to={'/sign-in'}
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
