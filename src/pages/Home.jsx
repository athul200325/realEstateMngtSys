import React, { useEffect, useState } from "react";
import { FaArrowRight, FaBath, FaBed } from "react-icons/fa";
import { Link} from "react-router-dom";
import ListingItem from "../components/ListingItem";
import Header from "../components/Header";
import { getListsAPI } from "../services/allApi";
import { useSelector } from "react-redux";
import { Carousel } from "@material-tailwind/react";
import SERVER_URL from "../services/serverUrl";
import { MdClose } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa'; // Import the phone icon from react-icons


const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [homeLists, setHomeLists] = useState([]);
  const [sellLists, setSellLists] = useState([]);
  const [rentLists, setRentLists] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const existingProfileImg = currentUser?.avatar || "";
  
  console.log(existingProfileImg);
  

  useEffect(() => {
    fetchHomeLists();
  }, []);

  const fetchHomeLists = async () => {
    setLoading(true);
    try {
      const result = await getListsAPI();
      if (result.status === 200) {
        const listings = result.data;
        setHomeLists(listings);
        setSellLists(listings.filter((listing) => listing.sell));
        setRentLists(listings.filter((listing) => listing.rent));
      }
    } catch (err) {
      setError("Failed to fetch listings. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(homeLists);
  
 
  

  const openModal = (listing) => {
    setSelectedListing(listing);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedListing(null);
  };

  const renderSection = (title, lists, filterUrl) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-slate-700">{title}</h2>
        <Link
          to={filterUrl}
          className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md transition-colors duration-300 hover:bg-indigo-700"
        >
          Show more
        </Link>
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="flex flex-wrap gap-4">
        {!loading &&
          !error &&
          lists.map((listing) => (
            <div
              className="p-2 cursor-pointer"
              key={listing?.id}
              onClick={(e) => {
                e.preventDefault();
                openModal(listing);
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
                conatctNumber={listing.conatctNumber}
              />
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <>
      <Header existingProfileImg={existingProfileImg} insideHome={true} />

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center h-[70vh] text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-3xl text-white p-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Find Your <span className="text-indigo-300">Dream Home</span> with Ease
          </h1>
          <p className="mb-6 text-lg sm:text-xl text-slate-200">
            Discover properties that perfectly blend{" "}
            <span className="text-indigo-300">comfort</span> and{" "}
            <span className="text-indigo-300">convenience</span>.
          </p>
          <Link
            to="/search"
            className="inline-flex items-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700"
          >
            Let's Get Started <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative max-w-6xl mx-auto mt-5 h-[500px] bg-gray-300">
        <Carousel className="rounded-xl">
          {homeLists?.map((listing, index) => (
            <img
              key={index}
              src={`${SERVER_URL}/uploads/${listing.houseImage}`}
              alt={`Listing ${index}`}
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>
      </div>

      {/* Sections for Sell, Rent, and Offers */}
      <div className="max-w-6xl justify-center mx-auto items-center p-3 flex flex-col gap-8 my-10">
        {renderSection("Recent Offers", homeLists, "/search?offer=true")}
        {renderSection("Houses for Sale", sellLists, "/search?sell=true")}
        {renderSection("Houses for Rent", rentLists, "/search?rent=true")}
      </div>

      {/* Modal */}
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
            onClick={() => window.location.href = `tel:${selectedListing.conatctNumber}`}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105"
          >
            <FaPhoneAlt className="text-lg" />
            <span>Contact Landlord: {selectedListing.conatctNumber}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}


    </>
  );
};

export default Home;
