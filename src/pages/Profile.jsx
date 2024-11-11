import React from 'react'
import { FaArrowDown, FaEdit, FaSignOutAlt, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { RiArrowDownWideFill } from "react-icons/ri";

const Profile = () => {
  return (

    <>
    <Header insideHome={true} bgHeader={true}/>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
        <form className="flex flex-col gap-4">
          <input
            type="file"
            hidden
            accept="image/*"
          />
          <img
            src="https://itherapy.com/wp-content/uploads/itherapy_profile-placeholders_m13.png"  
            alt="profile"
            className="rounded-full h-32 w-32 object-cover cursor-pointer self-center mt-2"
          />
          
  
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded-lg"
          />
  
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
          />
  
          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
          />
  
          <div className="flex justify-center gap-4">
              <button className="bg-blue-800 w-40 font-semibold text-white rounded-lg p-3 hover:opacity-95">
                Update
              </button>

              <Link
                className="bg-green-700 w-40 font-semibold text-white p-3 rounded-lg text-center hover:opacity-95"
                to="/create-listing"
              >
                Create Listing
              </Link>
            </div>
        </form>
  
        <div className="flex justify-between mt-5">
          <span className="text-red-700 font-semibold cursor-pointer inline-flex items-center"><FaTrash className='mr-2'/> Account</span>
          <span className="text-red-700 font-semibold cursor-pointer inline-flex items-center">Sign Out<FaSignOutAlt className='ms-2'/></span>
        </div>
  
        <button className='w-full mx-auto mt-10 font-semibold text-sky-700 justify-center '>
          <h1>Show Listings </h1>
          <RiArrowDownWideFill className='text-3xl mx-auto '/>
          
        </button>
        
  
        <div className="flex flex-col gap-4">
          <h1 className="text-center mt-7 text-2xl font-semibold">Your Listings</h1>
          <div className="border rounded-lg p-3 flex justify-between items-center gap-4">
            <Link to="/listing/1">
              <img
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
                alt="listing cover"
                className="h-16 w-16 object-contain"
              />
            </Link>
            <Link
              className="text-slate-700 font-semibold hover:underline truncate flex-1"
              to='/listing'
            >
              <p>Listing Name</p>
            </Link>
  
            <div className="flex items-center">
             <Link to="/update-listing/1">
                <button className="text-green-700 text-2xl"><FaEdit/></button>
              </Link>
              <button className="text-red-700 text-xl mx-5 "><FaTrash/></button>
            </div>
          </div>
        </div>
      </div>
    </>
      )
}

export default Profile