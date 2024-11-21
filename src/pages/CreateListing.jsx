import React from 'react'
import Header from '../components/Header'

const CreateListing = () => {
  return (
    <>
        <Header insideHome={true} bgHeader={true}/>
    
        <main className="p-6 pt-20 max-w-5xl mx-auto font-medium mb-16 bg-white shadow-lg rounded-xl">
  <h1 className="text-4xl font-bold text-center my-8 text-gray-800">
    <span className="text-indigo-600">Create</span> a Listing
  </h1>
  <form className="flex flex-col lg:flex-row gap-8">
    {/* Left Section */}
    <div className="flex flex-col gap-6 flex-1">
      {/* Input: Name */}
      <div>
        <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
          Listing Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter listing name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          maxLength="62"
          minLength="10"
          required
        />
      </div>

      {/* Input: Description */}
      <div>
        <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">
          Description:
        </label>
        <textarea
          id="description"
          placeholder="Describe the property"
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          required
        ></textarea>
      </div>

      {/* Input: Address */}
      <div>
        <label htmlFor="address" className="block text-lg font-semibold text-gray-700 mb-2">
          Address:
        </label>
        <input
          type="text"
          id="address"
          placeholder="Enter the property address"
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          required
        />
      </div>

      {/* Checkbox Group */}
      <div>
  <span class="block text-lg font-semibold text-gray-700 mb-2">Options:</span>
  <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
    <label class="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
      <input type="checkbox" class="w-5 h-5 text-indigo-500  accent-indigo-700" />
      Sell
    </label>
    <label class="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
      <input type="checkbox" class="w-5 h-5 text-indigo-500 accent-indigo-700" />
      Rent
    </label>
    <label class="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
      <input type="checkbox" class="w-5 h-5 text-indigo-500 accent-indigo-700" />
      Parking Spot
    </label>
    <label class="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
      <input type="checkbox" class="w-5 h-5 text-indigo-500 accent-indigo-700" />
      Furnished
    </label>
    <label class="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
      <input type="checkbox" class="w-5 h-5 text-indigo-500 accent-indigo-700" />
      Offer
    </label>
  </div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="flex flex-col">
    <label for="bedrooms" class="text-lg font-semibold text-gray-700 mb-2">Bedrooms:</label>
    <input type="number" id="bedrooms" min="1" max="10" class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" required />
  </div>
  <div class="flex flex-col">
    <label for="bathrooms" class="text-lg font-semibold text-gray-700 mb-2">Bathrooms:</label>
    <input type="number" id="bathrooms" min="1" max="10" class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" required />
  </div>
  <div class="flex flex-col">
    <label for="regularPrice" class="text-lg font-semibold text-gray-700 mb-2">Price ($):</label>
    <input type="number" id="regularPrice" min="50" max="10000000" class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" required />
  </div>
  <div class="flex flex-col">
    <label for="discountPrice" class="text-lg font-semibold text-gray-700 mb-2">Discounted Price ($):</label>
    <input type="number" id="discountPrice" min="0" max="10000000" class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
  </div>
</div>

    </div>

    {/* Right Section */}
    <div className="flex flex-col flex-1 gap-6">
      {/* File Upload */}
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Images:{" "}
          <span className="text-sm font-normal text-gray-500">
            (First image will be the cover, max 6)
          </span>
        </label>
        <input
          type="file"
          id="images"
          accept="image/*"
          multiple
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Uploaded Image Preview */}
      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border">
        <img
          src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Uploaded preview"
          className="w-20 h-20 object-cover rounded-lg"
        />
        <button
          type="button"
          className="text-red-600 font-bold uppercase hover:opacity-75"
        >
          Delete
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-indigo-600 text-white text-lg font-semibold p-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
      >
        Create Listing
      </button>
    </div>
  </form>
</main>

    </>

    )
}

export default CreateListing