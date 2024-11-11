import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ListingItem from '../components/ListingItem'
import Header from '../components/Header'

const Home = () => {
  return (
<>
<Header insideHome={true}/>
  
  {/* Top Section */}
  <div className='relative flex h-5/6 flex-col gap-6 p-40 py-56 px-3 max-w-full mx-auto bg-cover bg-center'
     style={{ backgroundImage: 'url("https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg")' }}>
  
  {/* Dark Overlay */}
  <div className='absolute inset-0 bg-black opacity-25'></div>

  {/* Content */}
  <div className='relative ms-14 z-10'>
    <h1 className='text-white mb-5 font-bold text-3xl lg:text-6xl'>
    Find your <span className='text-slate-300'>dream </span>with
    
    ease
      <br />
      where <span className='text-slate-300'>comfort</span> meets convenience
    </h1>
    <div className='text-gray-200 font-medium mb-4 text-base sm:text-lg'>
      Realtor is the best place to find your next perfect place to
      live.
      <br />
      We have a wide range of properties for you to choose from.
    </div>
    <Link
        to={'/search'}
        className='flex w-44 text-xs p-3 rounded-xl sm:text-base bg-sky-600 text-white font-bold hover:bg-sky-700'>
        Let's get started <FaArrowRight className='ms-1 mt-1 text-lg' />
    </Link>

  </div>
</div>


  {/* Swiper Section (Mockup) */}
  <div className='relative max-w-6xl mx-auto mt-5 h-[500px] bg-gray-300'>
    {/* Example of an image background for the swiper */}
    <div
      style={{
        background: `url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        
      }}
      className='h-full rounded-md'
    ></div>
  </div>

  {/* Listing Results for Offer, Sale, and Rent */}
  <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
    {/* Recent Offers */}
    <div>
      <div className='my-3'>
        <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
        <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>
          Show more offers
        </Link>
      </div>
      <div className='flex flex-wrap gap-4'>
        {/* Placeholder for listing items */}
        <div className='p-2'>
          <ListingItem/>        </div>
        <div className='p-2'>
          <ListingItem/>        </div>
        <div className='p-2'>
          <ListingItem/>        </div>
      </div>
    </div>

    {/* Recent Places for Rent */}
    <div>
      <div className='my-3'>
        <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
        <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>
          Show more places for rent
        </Link>
      </div>
      <div className='flex flex-wrap gap-4'>
        {/* Placeholder for listing items */}
        <div className='p-2'>
          <ListingItem/>        </div>
        <div className='p-2'>
          <ListingItem/>        </div>
        <div className='p-2'>
          <ListingItem/>        </div>
      </div>
    </div>

    {/* Recent Places for Sale */}
    <div>
      <div className='my-3'>
        <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
        <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>
          Show more places for sale
        </Link>
      </div>
      <div className='flex flex-wrap gap-4'>
        {/* Placeholder for listing items */}
        <div className='p-2'>
          <ListingItem/>        </div>
        <div className='p-2'>
          <ListingItem/>        </div>
        <div className='p-2'>
          <ListingItem/>        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Home