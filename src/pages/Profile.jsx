import React from 'react'
import { FaArrowDown, FaEdit, FaSignOutAlt, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { RiArrowDownWideFill } from "react-icons/ri";

const Profile = () => {
  return (

    <>
    <Header insideHome={true} bgHeader={true}/>
   <div className="min-h-screen bg-gradient-to-b pt-20 from-gray-100 to-gray-100 flex items-center justify-center px-6 ">
  <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg  overflow-hidden">
    {/* Profile Header */}
    <div className="relative bg-gradient-to-r from-indigo-500 to-indigo-700 h-32">
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
        <input type="file" id="uploadImage" hidden accept="image/*" />
        <label htmlFor="uploadImage" className="cursor-pointer">
          <img
            src="https://itherapy.com/wp-content/uploads/itherapy_profile-placeholders_m13.png"
            alt="profile"
            className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-md hover:shadow-lg transition duration-300"
          />
        </label>
      </div>
    </div>

    {/* User Information Section */}
    <div className="mt-16 p-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
      <p className="text-gray-500 text-sm">johndoe@example.com</p>
    </div>

    {/* Editable Profile Form */}
    <form className="px-6 pt-4 pb-8">
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Update Username"
          className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Update Email"
          className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="New Password"
          className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 shadow-md transition duration-300">
          Save Changes
        </button>
        <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 shadow-md transition duration-300">
          Delete Account
        </button>
      </div>
    </form>

    {/* Listings Section */}
    <div className="px-6 pb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Listings</h2>
      <div className="space-y-4">
        {/* Listing Item */}
        <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex justify-between items-center">
          <img
            src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="listing cover"
            className="h-16 w-16 rounded-md object-cover"
          />
          <div className="flex-1 ml-4">
            <h3 className="text-gray-800 font-semibold truncate">Luxury Apartment</h3>
            <p className="text-gray-500 text-sm">New York, NY</p>
          </div>
          <div className="flex gap-3">
            <button className="text-green-600 hover:text-green-700">
              <FaEdit className="text-xl" />
            </button>
            <button className="text-red-600 hover:text-red-700">
              <FaTrash className="text-xl" />
            </button>
          </div>
        </div>

        {/* Add More Listings Button */}
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 shadow-md transition duration-300">
          <Link to={'/create-listing'}>Add New Listing</Link>
        </button>
      </div>
    </div>
  </div>
</div>


    </>
      )
}

export default Profile