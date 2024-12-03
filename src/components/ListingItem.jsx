import React from 'react'
import SERVER_URL from '../services/serverUrl';


const ListingItem = ({ name, desc, address, price, image,sell,rent,bathromms,bedrooms }) => {
  console.log(bedrooms);
  
  
  return (
<div className="card h-[450px]  max-w-[333px] bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
  <a href="/listing" className="block">
    {/* Card Image Section */}
    <div className="relative h-[220px] w-full overflow-hidden">
      <img
        src={`${SERVER_URL}/uploads/${image}`}
        className="w-[330px] h-full object-cover transition-transform transform hover:scale-110 duration-300"
      />
      <span className={`absolute top-4 left-4 text-white text-sm px-3 py-1 rounded-full shadow-lg ${
        sell ? 'bg-green-600' : rent ? 'bg-indigo-600' : 'bg-gray-500'
      }`}>
        {sell ? 'For Sale' : rent ? 'For Rent' : 'Unavailable'}
      </span>
    </div>

    {/* Card Content Section */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">
        {name}
      </h3>
      <p className="text-sm text-gray-500 mb-4 truncate">
        {address}
      </p>
      <p className="text-gray-600 h-12 mb-6 line-clamp-3">
        {desc}
      </p>

      {/* Pricing and Details */}
      <div className="flex justify-between items-center">
        <p className="text-indigo-700 font-bold text-lg">₹{price}</p>
        <div className="flex gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <span>🛏</span>
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🛁</span>
            <span>{bathromms} Baths</span>
          </div>
        </div>
      </div>
    </div>
  </a>
</div>


  )
}

export default ListingItem