import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import SERVER_URL from "../services/serverUrl";
import { updateListsAPI } from "../services/allApi";

const EditListing = () => {
  const location = useLocation();
  const { listing } = location.state || {};
  const navigate = useNavigate()

  console.log(listing.conatctNumber);
  

  const [preview, setPreview] = useState("");
  const [houseDetails, setHouseDetails] = useState({
    id: listing._id,
    name: listing.name,
    desc: listing.desc,
    address: listing.address,
    options: {
      sell: listing.sell,
      rent: listing.rent,
      parking: listing.parking,
      furnished: listing.furnished,
      offer: listing.offer,
    },
    bedrooms: listing.bedrooms,
    bathrooms: listing.bathrooms,
    price: listing.price,
    dprice: listing.dprice,
    houseImage: "",
    conatctNumber: listing.conatctNumber
  });

  console.log(houseDetails);

  useEffect(() => {
    if (
      houseDetails.houseImage.type == "image/png" ||
      houseDetails.houseImage.type == "image/jpeg" ||
      houseDetails.houseImage.type == "image/jpg"
    ) {
      setPreview(URL.createObjectURL(houseDetails.houseImage));
    } else {
      setHouseDetails({ ...houseDetails, houseImage: "" });
    }
  }, [houseDetails.houseImage]);

  const handleClear=()=>{
    setHouseDetails({
        id: listing._id,
        name: listing.name,
        desc: listing.desc,
        address: listing.address,
        options: {
          sell: listing.sell,
          rent: listing.rent,
          parking: listing.parking,
          furnished: listing.furnished,
          offer: listing.offer,
        },
        bedrooms: listing.bedrooms,
        bathrooms: listing.bathrooms,
        price: listing.price,
        dprice: listing.dprice,
        houseImage: "",
        conatctNumber: listing.conatctNumber
      })
    
  }

  const handleUpdate = async (e) => {
    const{id, name, desc, address, options,bedrooms,bathrooms,price,dprice,houseImage,conatctNumber}=houseDetails
    if(name&&desc&&address&&(options.rent||options.sell)&&bedrooms&&bathrooms&&price&&houseImage&&conatctNumber){
        const reqBody =new FormData()
      reqBody.append("name",name);
      reqBody.append("desc",desc);
      reqBody.append("address",address);
      reqBody.append("rent",options.rent)
      reqBody.append("sell",options.sell)
      reqBody.append("parking",options.parking)
      reqBody.append("furnished",options.furnished)
      reqBody.append("offer",options.offer)
      reqBody.append("bedrooms",bedrooms)
      reqBody.append("bathrooms",bathrooms)
      reqBody.append("price",price)
      reqBody.append("dprice",dprice)
      reqBody.append("conatctNumber",conatctNumber)
      preview?reqBody.append("houseImage",houseImage):reqBody.append("houseImage",listing.houseImage);
      const  token = localStorage.getItem("access_token");
      if(token){
        const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          try{
            const result=await updateListsAPI(id,reqBody,reqHeader)
            if(result.status===200){
                alert("Listing updated successfully")
                handleClear()
                navigate('/profile')
            }
          }catch(err){
            console.log(err)
            alert("Failed to edit listing. Please try again later.")
          }
      }

    }else{
        alert("Please fill all required fields")
    }
    }

  // console.log(listing);

  return (
    <>
      <Header insideHome={true} bgHeader={true} />
      <main className="p-6 pt-20 max-w-5xl mx-auto font-medium mb-16 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-center my-8 text-gray-800">
          <span className="text-indigo-600">Edit</span> a Listing
        </h1>
        <form className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Input: Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Listing Name:
              </label>
              <input
                value={houseDetails.name}
                onChange={(e) =>
                  setHouseDetails({ ...houseDetails, name: e.target.value })
                }
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
              <label
                htmlFor="description"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Description:
              </label>
              <textarea
                value={houseDetails.desc}
                onChange={(e) =>
                  setHouseDetails({ ...houseDetails, desc: e.target.value })
                }
                id="description"
                placeholder="Describe the property"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Input: Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Address:
              </label>
              <input
                value={houseDetails.address}
                onChange={(e) =>
                  setHouseDetails({ ...houseDetails, address: e.target.value })
                }
                type="text"
                id="address"
                placeholder="Enter the property address"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="conatctNumber"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Conatct Number:
              </label>
              <input
                value={houseDetails.conatctNumber}
                onChange={(e) =>
                  setHouseDetails({ ...houseDetails, conatctNumber: e.target.value })
                }
                type="text"
                id="conatctNumber"
                placeholder="Enter the Conatct Number"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Checkbox Group */}
            <div>
              <span className="block text-lg font-semibold text-gray-700 mb-2">
                Options:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                  <input
                    checked={houseDetails.options.sell}
                    onChange={(e) =>
                      setHouseDetails({
                        ...houseDetails,
                        options: {
                          ...houseDetails.options,
                          sell: e.target.checked,
                        },
                      })
                    }
                    type="checkbox"
                    className="w-5 h-5 text-indigo-500  accent-indigo-700"
                  />
                  Sell
                </label>
                <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                  <input
                    checked={houseDetails.options.rent}
                    onChange={(e) =>
                      setHouseDetails({
                        ...houseDetails,
                        options: {
                          ...houseDetails.options,
                          rent: e.target.checked,
                        },
                      })
                    }
                    type="checkbox"
                    className="w-5 h-5 text-indigo-500 accent-indigo-700"
                  />
                  Rent
                </label>
                <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                  <input
                    checked={houseDetails.options.parking}
                    onChange={(e) =>
                      setHouseDetails({
                        ...houseDetails,
                        options: {
                          ...houseDetails.options,
                          parking: e.target.checked,
                        },
                      })
                    }
                    type="checkbox"
                    className="w-5 h-5 text-indigo-500 accent-indigo-700"
                  />
                  Parking Spot
                </label>
                <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                  <input
                    checked={houseDetails.options.furnished}
                    onChange={(e) =>
                      setHouseDetails({
                        ...houseDetails,
                        options: {
                          ...houseDetails.options,
                          furnished: e.target.checked,
                        },
                      })
                    }
                    type="checkbox"
                    className="w-5 h-5 text-indigo-500 accent-indigo-700"
                  />
                  Furnished
                </label>
                <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                  <input
                    checked={houseDetails.options.offer}
                    onChange={(e) =>
                      setHouseDetails({
                        ...houseDetails,
                        options: {
                          ...houseDetails.options,
                          offer: e.target.checked,
                        },
                      })
                    }
                    type="checkbox"
                    className="w-5 h-5 text-indigo-500 accent-indigo-700"
                  />
                  Offer
                </label>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label
                  for="bedrooms"
                  class="text-lg font-semibold text-gray-700 mb-2"
                >
                  Bedrooms:
                </label>
                <input
                  value={houseDetails.bedrooms}
                  onChange={(e) =>
                    setHouseDetails({
                      ...houseDetails,
                      bedrooms: e.target.value,
                    })
                  }
                  type="number"
                  id="bedrooms"
                  min="1"
                  max="10"
                  class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>
              <div class="flex flex-col">
                <label
                  for="bathrooms"
                  class="text-lg font-semibold text-gray-700 mb-2"
                >
                  Bathrooms:
                </label>
                <input
                  value={houseDetails.bathrooms}
                  onChange={(e) =>
                    setHouseDetails({
                      ...houseDetails,
                      bathrooms: e.target.value,
                    })
                  }
                  type="number"
                  id="bathrooms"
                  min="1"
                  max="10"
                  class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>
              <div class="flex flex-col">
                <label
                  for="regularPrice"
                  class="text-lg font-semibold text-gray-700 mb-2"
                >
                  Price ($):
                </label>
                <input
                  value={houseDetails.price}
                  onChange={(e) =>
                    setHouseDetails({ ...houseDetails, price: e.target.value })
                  }
                  type="number"
                  id="regularPrice"
                  min="50"
                  max="10000000"
                  class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>
              <div class="flex flex-col">
                <label
                  for="discountPrice"
                  class="text-lg font-semibold text-gray-700 mb-2"
                >
                  Discounted Price ($):
                </label>
                <input
                  value={houseDetails.dprice}
                  onChange={(e) =>
                    setHouseDetails({ ...houseDetails, dprice: e.target.value })
                  }
                  type="number"
                  id="discountPrice"
                  min="0"
                  max="10000000"
                  class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col flex-1 gap-6">
            {/* File Upload */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Images:{" "}
              </label>
              <input
                onChange={(e) =>
                  setHouseDetails({
                    ...houseDetails,
                    houseImage: e.target.files[0],
                  })
                }
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
                src={
                  preview
                    ? preview
                    : `${SERVER_URL}/uploads/${listing.houseImage}`
                }
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
            onClick={handleUpdate}
              type="button"
              className="bg-indigo-600 text-white text-lg font-semibold p-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Update Listing
            </button>
            <button
            onClick={handleClear}
              type="button"
              className="bg-red-800 text-white text-lg font-semibold p-4 rounded-lg shadow-md hover:bg-red-800 transition duration-300"
            >
              Clear Listing
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default EditListing;
