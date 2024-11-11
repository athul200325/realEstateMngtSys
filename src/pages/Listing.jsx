import React from 'react'
import { FaBath, FaBed, FaChair, FaMapMarkerAlt, FaParking, FaShare } from 'react-icons/fa'
import Header from '../components/Header'

const Listing = () => {
  return (
<main className='px-8 mb-20'>
<Header insideHome={true} bgHeader={true}/>
<div class="flex flex-col gap-8 md:flex-row mt-24 pt-24 w-full max-w-8xl mx-auto px-4">
  <div class="md:w-2/3 w-full relative">
    <div
      class="rounded-lg h-[550px]"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
    <div class="absolute top-4 right-4 z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
      <FaShare class="text-blue-700" />
    </div>
  </div>

  <div class="md:w-1/3 w-full p-3 my-24 gap-4 flex flex-col">
    <p class="text-2xl font-semibold">
      Listing Name - $100,000
    </p>
    <div class="flex w-96  gap-4">
      <p class="border-red-900 border-2 w-full max-w-[200px] text-black font-semibold text-center p-1 rounded-md">
        For Rent
      </p>
      <p class="border-green-900 border-2 w-full max-w-[200px] text-black font-semibold text-center p-1 rounded-md">
        $10,000 OFF
      </p>
    </div>
    <p class="flex items-center mt-3 gap-2 text-slate-600 text-sm">
      <FaMapMarkerAlt class="text-sky-800" />
      1234 Example St, City, State
    </p>

    <p class="text-slate-800 ">
      <span class="font-semibold text-black">Description - </span>
      Beautiful apartment in a prime location with stunning views. Recently renovated and fully furnished.
    </p>

    <ul class="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
      <li class="flex items-center gap-1 whitespace-nowrap">
        <FaBed class="text-lg" />
        3 beds
      </li>
      <li class="flex items-center gap-1 whitespace-nowrap">
        <FaBath class="text-lg" />
        2 baths
      </li>
      <li class="flex items-center gap-1 whitespace-nowrap">
        <FaParking class="text-lg" />
        Parking spot
      </li>
      <li class="flex items-center gap-1 whitespace-nowrap">
        <FaChair class="text-lg" />
        Furnished
      </li>
    </ul>

    <button class="bg-sky-700 w-64 font-semibold mt-6 text-white rounded-lg uppercase hover:opacity-95 p-3">
      Contact landlord
    </button>
  </div>
</div>

</main>
  )
}

export default Listing