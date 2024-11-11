import React from 'react'
import { Link } from 'react-router-dom'


const ListingItem = () => {
  return (
<div className='bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-lg w-full sm:w-[330px]'>
  <Link to='/listing'>
    <img
      src='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
      alt='listing cover'
      className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-transform duration-300'
    />
    <div className='p-4'>
      <p className='truncate text-lg font-semibold text-slate-700 mb-2'>
        Modern Apartment in Downtown
      </p>
      <div className='flex items-center gap-1 text-sm text-gray-600'>
        <p className='truncate w-full'>123 Main St, Downtown</p>
      </div>
      <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
        A beautiful modern apartment with great views and top-of-the-line amenities. 
        Perfect for city living!
      </p>
      <p className='text-slate-500 mt-2 font-semibold'>
        $2,500 / month
      </p>
      <div className='text-slate-700 flex gap-4 mt-2'>
        <div className='font-bold text-xs'>
          2 beds
        </div>
        <div className='font-bold text-xs'>
          2 baths
        </div>
      </div>
    </div>
  </Link>
</div>
  )
}

export default ListingItem