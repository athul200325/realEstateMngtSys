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
  <div
      className="relative flex flex-col items-center justify-center h-[70vh] text-center bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 max-w-3xl text-white p-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Find Your <span className="text-indigo-300">Dream Home</span> with Ease
        </h1>
        <p className="mb-6 text-lg sm:text-xl text-slate-200">
          Discover properties that perfectly blend <span className="text-indigo-300">comfort</span> and <span className="text-indigo-300">convenience</span>.
        </p>
        <Link
          to="/search"
          className="inline-flex items-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700"
        >
          Let's Get Started <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>

    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-slate-700 mb-8">Explore Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Buy a Home</h3>
            <p className="text-slate-500">
              Browse listings to find your dream property. Our extensive database includes options for every budget and preference.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Sell a Home</h3>
            <p className="text-slate-500">
              List your property with us for maximum exposure and reach. Our platform makes selling easy and efficient.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Rent a Place</h3>
            <p className="text-slate-500">
              Looking for a temporary residence? Explore our rental listings to find the perfect place for your needs.
            </p>
          </div>
        </div>
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
  <div className='max-w-6xl justify-center mx-auto items-center p-3 flex flex-col gap-8 my-10'>
    {/* Recent Offers */}
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-700">Recent Offers</h2>
            <Link
              to="/search?offer=true"
              className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md transition-colors duration-300 hover:bg-indigo-700"
            >
              Show more offers
            </Link>
        </div>
        <div className="flex flex-wrap gap-4">
            {/* Placeholder for listing items */}
            <div className="p-2">
              <ListingItem />
            </div>
            <div className="p-2">
              <ListingItem />
            </div>
            <div className="p-2">
              <ListingItem />
            </div>
        </div>
      </div>


    {/* Recent Places for Rent */}
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-700">Recent Offers</h2>
            <Link
              to="/search?offer=true"
              className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md transition-colors duration-300 hover:bg-indigo-700"
            >
              Show more offers
            </Link>
        </div>
        <div className="flex flex-wrap gap-4">
            {/* Placeholder for listing items */}
            <div className="p-2">
              <ListingItem />
            </div>
            <div className="p-2">
              <ListingItem />
            </div>
            <div className="p-2">
              <ListingItem />
            </div>
        </div>
      </div>

    {/* Recent Places for Sale */}
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-700">Recent Offers</h2>
            <Link
              to="/search?offer=true"
              className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md transition-colors duration-300 hover:bg-indigo-700"
            >
              Show more offers
            </Link>
        </div>
        <div className="flex flex-wrap gap-4">
            {/* Placeholder for listing items */}
            <div className="p-2">
              <ListingItem />
            </div>
            <div className="p-2">
              <ListingItem />
            </div>
            <div className="p-2">
              <ListingItem />
            </div>
        </div>
      </div>
  </div>
</>
  )
}

export default Home