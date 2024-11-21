import React from 'react'
import { Link } from 'react-router-dom'


const ListingItem = () => {
  return (
<div className="card max-w-[333px] bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
  <a href="/listing" className="block">
    {/* Card Image Section */}
    <div className="relative h-[220px] w-full overflow-hidden">
      <img
        src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
        alt="Modern Apartment"
        className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-300"
      />
      <span className="absolute top-4 left-4 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
        For Rent
      </span>
    </div>

    {/* Card Content Section */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">
        Luxurious Apartment in Downtown
      </h3>
      <p className="text-sm text-gray-500 mb-4 truncate">
        123 Main St, Downtown
      </p>
      <p className="text-gray-600 mb-6 line-clamp-3">
        Discover a contemporary living space with breathtaking views, premium amenities, and a vibrant neighborhood. Perfect for urban enthusiasts!
      </p>

      {/* Pricing and Details */}
      <div className="flex justify-between items-center">
        <p className="text-indigo-700 font-bold text-lg">$2,500 / month</p>
        <div className="flex gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <span>🛏</span>
            <span>2 Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🛁</span>
            <span>2 Baths</span>
          </div>
        </div>
      </div>
    </div>
  </a>
</div>


  )
}

export default ListingItem