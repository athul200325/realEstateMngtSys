import React from 'react'
import Header from '../components/Header'

const Listing = () => {
  
  return (
<main className="px-8 mb-20">
  <Header insideHome={true} bgHeader={true} />
  <div className="flex flex-col gap-8 md:flex-row mt-24 pt-24 w-full max-w-7xl mx-auto px-4">
  <div className="md:w-2/3 w-full relative">
    <div
      className="rounded-lg h-[550px] overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
    </div>
    <div className="absolute top-4 right-4 z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer shadow-md">
      <span className="text-indigo-600">🔗</span> 
    </div>
  </div>

  <div className="md:w-1/3 w-full p-5 my-8 flex flex-col gap-4">
    <p className="text-3xl font-semibold text-slate-700">
      Listing Name - $100,000
    </p>
    <div className="flex gap-4">
      <p className="border-red-500 border-2 w-full max-w-[200px] text-red-700 font-semibold text-center p-2 rounded-md">
        For Rent
      </p>
      <p className="border-green-500 border-2 w-full max-w-[200px] text-green-700 font-semibold text-center p-2 rounded-md">
        $10,000 OFF
      </p>
    </div>
    <p className="flex items-center gap-2 text-slate-600 text-sm">
      <span className="text-indigo-600">📍</span>
      1234 Example St, City, State
    </p>
    <p className="text-slate-700">
      <span className="font-semibold text-slate-900">Description - </span>
      Beautiful apartment in a prime location with stunning views. Recently renovated and fully furnished.
    </p>
    <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
      <li className="flex items-center gap-1">
        <span className="text-lg">🛏</span>
        3 beds
      </li>
      <li className="flex items-center gap-1">
        <span className="text-lg">🛁</span>
        2 baths
      </li>
      <li className="flex items-center gap-1">
        <span className="text-lg">🚗</span>
        Parking spot
      </li>
      <li className="flex items-center gap-1">
        <span className="text-lg">🪑</span>
        Furnished
      </li>
    </ul>
    <button className="bg-indigo-600 w-64 font-semibold mt-6 text-white rounded-lg uppercase hover:bg-indigo-700 transition-colors duration-300 p-3">
      Contact Landlord
    </button>
  </div>
</div>

</main>

  )
}

export default Listing