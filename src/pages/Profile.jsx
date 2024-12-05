import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Listing from '../components/Listing';
import { getUserListsAPI, updateUserProflieAPI } from '../services/allApi';
import { Link } from 'react-router-dom';
import SERVER_URL from '../services/serverUrl';
import profileImg from '../assets/profile.jpg';

const Profile = () => {
  const [userLists, setUserLists] = useState([]);
  const [preview, setPreview] = useState("");
  const [existingProfileImg, setExistingProfileImg] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    avatar: ""
  });

  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const navigate = useNavigate(); // For navigation after logout

  useEffect(() => {
    getUserList();
  }, [existingProfileImg]);

  const getUserList = async () => {
    const token = localStorage.getItem('access_token');
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      };
      try {
        const result = await getUserListsAPI(reqHeader);
        if (result.status === 200) {
          setUserLists(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setPreview(currentUser?.avatar || '');
  }, [currentUser,existingProfileImg]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserDetails({
        username: parsedUser.username || "",
        email: parsedUser.email || "",
        avatar: parsedUser.avatar || ""
      });
      setExistingProfileImg(parsedUser.avatar || "");
    }
  }, [existingProfileImg]);

  useEffect(() => {
    if (userDetails.avatar && userDetails.avatar instanceof File) {
      setPreview(URL.createObjectURL(userDetails.avatar));
    } else {
      setPreview(""); // Clear preview if avatar is not a valid file
    }
  }, [userDetails.avatar]);

  const handleUpdateProfile = async () => {
    const { username, email, avatar } = userDetails;
    if (username || email) {
      const reqBody = new FormData();
      reqBody.append('username', username);
      reqBody.append('email', email);
      preview ? reqBody.append("avatar", avatar) : reqBody.append("avatar", existingProfileImg);
      const token = localStorage.getItem('access_token');
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        };
        try {
          const result = await updateUserProflieAPI(reqBody, reqHeader);
          if (result.status === 200) {
            alert("Profile updated successfully");
            localStorage.setItem("user", JSON.stringify(result.data));
            setUserDetails(result.data);
          } else {
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const handleLogout = () => {
    localStorage.clear(); 
    window.location.reload();
    navigate('/sign-in');
  };

  return (
    <>
      <Header existingProfileImg={existingProfileImg} profileImg={profileImg} insideHome={true} bgHeader={true} />
      <div className="min-h-screen bg-gradient-to-b pt-20 from-gray-100 to-gray-100 flex items-center justify-center px-6">
        <div className="w-full max-w-2xl mb-6 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="relative bg-gradient-to-r from-indigo-500 to-indigo-700 h-32">
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <input
                onChange={e => setUserDetails({ ...userDetails, avatar: e.target.files[0] })}
                type="file"
                ref={fileRef}
                id="uploadImage"
                hidden
                accept="image/*"
              />
                <label htmlFor="uploadImage" className="cursor-pointer">
                  <input
                    type="file"
                    id="uploadImage"
                    ref={fileRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange} // Ensure this function is implemented
                  />
                  <img
                    onClick={() => fileRef.current?.click()}
                    src={
                      preview
                        ? preview
                        : existingProfileImg
                        ? `${SERVER_URL}/uploads/${existingProfileImg}`
                        : profileImg
                    }
                    alt="profile"
                    className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-md hover:shadow-lg transition duration-300"
                  />
                </label>

            </div>
          </div>

          {/* User Information Section */}
          <div className="mt-16 p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">{userDetails.username}</h1>
            <p className="text-gray-500 text-sm">{userDetails.email}</p>
          </div>

          {/* Editable Profile Form */}
          <form className="px-6 pt-4 pb-8">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                name="username"
                value={userDetails.username}
                onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
                placeholder="Update Username"
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
                placeholder="Update Email"
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-center gap-4">
              <button type='button' onClick={handleUpdateProfile} className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 shadow-md transition duration-300">
                Save Changes
              </button>
              <button type='button' onClick={handleLogout} className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 shadow-md transition duration-300">
                Logout
              </button>
            </div>
          </form>

          {/* Listings Section */}
          <div className="px-6 pb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Listings</h2>
            {
              userLists?.length > 0 ? (
                <div>
                  {userLists?.map((listing) => (
                    <Listing key={listing._id}
                      listing={listing}
                      getUserList={getUserList}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600">No listings found</p>
              )
            }
          </div>
          <button type='button' className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 shadow-md transition duration-300">
            <Link to={'/create-listing'}>Add New Listing</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
