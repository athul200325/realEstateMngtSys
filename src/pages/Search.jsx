import React from 'react'
import Header from '../components/Header'
import ListingItem from '../components/ListingItem'

const Search = () => {
  return (
    <>
        <Header/>
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
  {/* Sidebar Section */}
  <aside className="bg-gradient-to-br pt-28 from-indigo-600 to-indigo-400 text-white w-full md:w-1/4 p-8 shadow-2xl rounded-lg md:rounded-none">
    <h2 className="text-3xl font-extrabold tracking-tight mb-8">Filter Properties</h2>
    <form className="space-y-6">
      {/* Search Term */}
      <div className="space-y-2">
        <label htmlFor="searchTerm" className="block text-lg font-semibold">Search Term:</label>
        <input
          type="text"
          id="searchTerm"
          placeholder="e.g., Apartment, Villa"
          className="w-full bg-white text-gray-700 placeholder-gray-500 border rounded-lg p-3 shadow-md focus:ring-2 focus:ring-indigo-700 focus:outline-none"
        />
      </div>

      {/* Type Options */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold">Type:</label>
        <div className="flex flex-wrap gap-3">
          {["Rent & Sale", "Rent", "Sale", "Offer"].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5 accent-indigo-700" />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold">Amenities:</label>
        <div className="flex flex-wrap gap-3">
          {["Parking", "Furnished"].map((amenity) => (
            <label key={amenity} className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5 accent-indigo-700" />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="space-y-2">
        <label htmlFor="sortOrder" className="block text-lg font-semibold">Sort By:</label>
        <select
          id="sortOrder"
          className="w-full bg-white border rounded-lg p-3 text-gray-700 shadow-md focus:ring-2 focus:ring-indigo-700 focus:outline-none"
        >
          <option value="price_desc">Price: High to Low</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="newest">Newest Listings</option>
          <option value="oldest">Oldest Listings</option>
        </select>
      </div>

      {/* Search Button */}
      <button className="w-full py-3 bg-indigo-700 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-700 transition-transform transform hover:scale-105">
        Search
      </button>
    </form>
  </aside>

  {/* Main Content Section */}
  <main className="flex-1 pt-28 bg-white p-8">
    <header className="mb-10">
      <h1 className="text-4xl font-bold text-gray-800">Search Results</h1>
      <p className="text-gray-600 mt-2">Find your perfect property below</p>
    </header>

    {/* Listings */}
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ListingItem/>
      <ListingItem/>
      <ListingItem/>
      <ListingItem/>
    </section>

    {/* Load More */}
    <div className="text-center mt-10">
      <button className="bg-indigo-900 text-white py-3 px-6 rounded-lg shadow hover:bg-indigo-800 transition-transform transform hover:scale-105">
        Load More
      </button>
    </div>
  </main>
</div>




    </>
  )
}

export default Search