import React from 'react'
import Header from '../components/Header'
import ListingItem from '../components/ListingItem'

const Search = () => {
  return (
    <>
        <Header/>
    <div class="flex pt-16 bg-white flex-col md:flex-row mb-10">
      <div class="p-7 bg-slate-200 rounded-3xl border-white border-b-2 md:border-r-8 md:min-h-screen">
        <form class="flex flex-col gap-8">
          <div class="flex items-center gap-2">
            <label class="whitespace-nowrap font-semibold">Search Term:</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              class="border rounded-lg p-3 w-full"
            />
          </div>
    
          <div class="flex gap-2 flex-wrap items-center">
            <label class="font-semibold">Type:</label>
            <div class="flex gap-2">
              <input className='' type="checkbox" id="all" class="w-5" />
              <span>Rent & Sale</span>
            </div>
            <div class="flex gap-2">
              <input type="checkbox" id="rent" class="w-5" />
              <span>Rent</span>
            </div>
            <div class="flex gap-2">
              <input type="checkbox" id="sale" class="w-5" />
              <span>Sale</span>
            </div>
            <div class="flex gap-2">
              <input type="checkbox" id="offer" class="w-5" />
              <span>Offer</span>
            </div>
          </div>
    
          <div class="flex gap-2 flex-wrap items-center">
            <label class="font-semibold">Amenities:</label>
            <div class="flex gap-2">
              <input type="checkbox" id="parking" class="w-5" />
              <span>Parking</span>
            </div>
            <div class="flex gap-2">
              <input type="checkbox" id="furnished" class="w-5" />
              <span>Furnished</span>
            </div>
          </div>
    
          <div class="flex items-center gap-2">
            <label class="font-semibold">Sort:</label>
            <select id="sort_order" class="border bg-sky-600 text-white rounded-lg p-3">
              <option className='bg-white text-black' value="regularPrice_desc">Price high to low</option>
              <option  className='bg-white text-black' value="regularPrice_asc">Price low to high</option>
              <option  className='bg-white text-black' value="createdAt_desc">Latest</option>
              <option  className='bg-white text-black' value="createdAt_asc">Oldest</option>
            </select>
          </div>
    
          <button class="bg-sky-800 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Search
          </button>
        </form>
      </div>
    
      <div class="flex-1 bg-slate-200 border-white rounded-xl">
        <h1 class="text-3xl font-semibold border-white  border-b-8 p-3 text-slate-700 mt-5">
          Search results:
        </h1>
        <div>
          <div class="p-6 rounded-lg w-full">
            <div class="flex flex-wrap gap-4">
              <ListingItem/>
              <ListingItem/>
              <ListingItem/>
              <ListingItem/>
              <ListingItem/>
            </div>
          </div>
    
          
          <button class="text-white mb-5  bg-sky-900 hover:bg-sky-800 p-2 ms-6 rounded-lg text-center w-32">
            Show more
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Search