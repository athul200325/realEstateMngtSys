import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SERVER_URL from '../services/serverUrl';
import { deleteListsAPi } from '../services/allApi';

const Listing = ({listing,getUserList}) => {
  console.log(listing);

  const deleteProject=async(id) => {
    const  token = localStorage.getItem("access_token");
      if(token){
        const reqHeader={
            "Authorization":`Bearer ${token}`
          }
          try{
            await deleteListsAPi(id,reqHeader)
            getUserList()
            
          }catch(err){
            console.log(err);
            
          }
        }
  }
  

  return (
    <>
      <div className="space-y-4 mb-6">
        {/* Listing Item */}
        <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex justify-between items-center">
          <img
            src={`${SERVER_URL}/uploads/${listing.houseImage}`}
            alt="listing cover"
            className="h-16 w-16 rounded-md object-cover"
          />
          <div className="flex-1 ml-4">
            <h3 className="text-gray-800 font-semibold truncate">{listing.name}</h3>
            <p className="text-gray-500 text-sm">{listing.address}</p>
          </div>
          <div className="flex gap-3">
            <button className="text-green-600 hover:text-green-700">
            <Link
              to={{
                pathname: "/edit-listing",
              }}
              state={{ listing }} // Pass the `listing` as state
              className="text-green-600 hover:text-green-700"
            ><FaEdit className="text-xl" /></Link>
            </button>
            <button onClick={()=>deleteProject(listing?._id)} className="text-red-600 hover:text-red-700">
              <FaTrash className="text-xl" />
            </button>
          </div>
        </div>

        {/* Add More Listings Button */}
        
      </div>
    </>
  )
}

export default Listing