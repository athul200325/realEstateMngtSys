import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ListingItem from '../components/ListingItem';
import { getSearchListsAPI } from '../services/allApi';
import { MdClose } from 'react-icons/md'; // Import close icon for modal
import SERVER_URL from '../services/serverUrl';
import { FaBath, FaBed, FaPhoneAlt } from 'react-icons/fa';

const Search = () => {
  const [searchLists, setSearchLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedListing, setSelectedListing] = useState(null); // Selected listing state

  useEffect(() => {
    getAllSearchLists();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = searchLists.filter(listing =>
        listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults(searchLists);
    }
  }, [searchTerm, searchLists]);

  const getAllSearchLists = async () => {
    try {
      const result = await getSearchListsAPI();
      if (result.status === 200) {
        setSearchLists(result.data);
        setFilteredResults(result.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle opening modal and setting selected listing
  const openModal = (listing) => {
    setSelectedListing(listing);
    setIsModalOpen(true);
  };

  // Handle closing modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedListing(null); // Reset selected listing when modal is closed
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-full w-full">
          <h2 className="text-3xl pt-20 font-extrabold tracking-tight text-gray-800 mb-6 text-center">
            Search Properties
          </h2>
          <form className="space-y-6 flex flex-col items-center">
            <div className="space-y-2 flex flex-col items-center">
              <label htmlFor="searchTerm" className="block text-lg font-semibold">Search Term:</label>
              <input
                type="text"
                id="searchTerm"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="e.g., Apartment, Villa"
                className="w-full bg-white text-gray-700 placeholder-gray-500 border rounded-lg p-3 shadow-md focus:ring-2 focus:ring-indigo-700 focus:outline-none"
              />
            </div>
          </form>
        </div>

        {/* Search Results Section */}
        <main className="mt-10 max-w-6xl w-full">
          <header className="mb-10 text-center">
            <p className="text-gray-600 mt-2">Find your perfect property below</p>
          </header>

          {/* Listings */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults?.map((listing) => (
              <div
              className="p-2 cursor-pointer"
              key={listing?.id}
              onClick={(e) => {
                e.preventDefault(); // Prevent any default action like redirect
                openModal(listing); // Open the modal when clicking
              }}
            >
              <ListingItem
                name={listing.name}
                desc={listing.desc}
                address={listing.address}
                sell={listing.sell}
                rent={listing.rent}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms}
                price={listing.price}
                image={listing.houseImage}
              />
            </div>
            ))}
          </section>

          {/* Load More */}

        </main>
      </div>

      {/* Modal - Display when a listing is clicked */}
      {isModalOpen && selectedListing && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
    <div className="bg-white rounded-xl max-w-5xl w-full h-auto relative p-8 shadow-2xl transition-all duration-300 ease-in-out">
      
      {/* Image Section */}
      <div className="relative h-[350px] w-full rounded-lg overflow-hidden mb-8 shadow-lg">
        <img
          src={`${SERVER_URL}/uploads/${selectedListing.houseImage}`}
          alt={selectedListing.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-3xl font-bold">{selectedListing.name}</h2>
        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-gray-700 rounded-full p-2 text-white hover:bg-gray-600 transition-colors duration-200 z-20"
        >
          <MdClose className="text-2xl" />
        </button>
      </div>

      {/* Content Section */}
      <div className="px-4">
        <p className="text-lg text-gray-600 mb-6">{selectedListing.desc}</p>
        <div className="space-y-4">
          <p className="text-gray-700 text-xl">
            <strong className="font-bold">Address:</strong> {selectedListing.address}
          </p>
          <p className="text-gray-700 text-2xl">
            <strong className="font-bold">Price:</strong> ₹{selectedListing.price.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between items-center gap-6 mt-6">
          {/* Info Section */}
          <div className="flex gap-8">
            <p className="text-gray-700 flex items-center gap-2">
              <FaBed className="text-indigo-600" />
              <strong className="font-bold">Bedrooms:</strong> {selectedListing.bedrooms}
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaBath className="text-indigo-600" />
              <strong className="font-bold">Bathrooms:</strong> {selectedListing.bathrooms}
            </p>
          </div>

          {/* Contact Landlord Button */}
          <button
            onClick={() => window.location.href = `tel:${selectedListing.contactNumber}`}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105"
          >
            <FaPhoneAlt className="text-lg" />
            <span>Contact Landlord: {selectedListing.contactNumber}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Search;
