import React from 'react'
import Header from '../components/Header'

const CreateListing = () => {
  return (
    <>
        <Header insideHome={true} bgHeader={true}/>
    
        <main class="p-3 pt-20 max-w-4xl font-medium mx-auto">
      <h1 class="text-3xl font-semibold text-center my-11"><span className='text-sky-700'>Create</span> a Listing</h1>
      <form class="flex flex-col sm:flex-row gap-4">
        <div class="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            class="border border-sky-700 p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            placeholder="Description"
            class="border border-sky-700 p-3 rounded-lg"
            id="description"
            required
          ></textarea>
          <input
            type="text"
            placeholder="Address"
            class="border border-sky-700 p-3 rounded-lg"
            id="address"
            required
          />
          <div class="flex gap-6 flex-wrap">
            <div class="flex gap-2">
              <input type="checkbox" id="sale" class="w-5" />
              <span>Sell</span>
            </div>
            <div class="flex gap-2">
              <input type="checkbox" id="rent" class="w-5" />
              <span>Rent</span>
            </div>
            <div class="flex gap-2">
              <input type="checkbox" id="parking" class="w-5" />
              <span>Parking spot</span>
            </div>
            <div class="flex gap-2">
              <input type="checkbox" id="furnished" class="w-5" />
              <span>Furnished</span>
            </div>
            <div class="flex gap-2">
              <input type="checkbox" id="offer" class="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-6">
            <div class="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                class="p-3 border border-sky-700  rounded-lg"
              />
              <p>Beds</p>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                class="p-3 border border-sky-700  rounded-lg"
              />
              <p>Baths</p>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min="50"
                max="10000000"
                required
                class="p-3 border border-sky-700 rounded-lg"
              />
              <div class="flex flex-col items-center">
                <p>Regular price</p>
                <span class="text-xs">($ / month)</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="number"
                id="discountPrice"
                min="0"
                max="10000000"
                class="p-3 border border-sky-700 rounded-lg"
              />
              <div class="flex flex-col items-center">
                <p>Discounted price</p>
                <span class="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
    
        <div class="flex flex-col flex-1 gap-4">
          <p class="font-semibold">
            Images:
            <span class="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div class="flex gap-4">
            <input
              class="p-3 border border-sky-700 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              type="button"
              class="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              Upload
            </button>
          </div>
          <div class="flex justify-between p-3 border border-sky-700 items-center">
            <img
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="listing image"
              class="w-20 h-20 object-contain rounded-lg"
            />
            <button
              type="button"
              class="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
            >
              Delete
            </button>
          </div>
          <button
            type="submit"
            class="p-3 bg-green-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            Create listing
          </button>
        </div>
      </form>
    </main>
    </>

    )
}

export default CreateListing