import React from "react";
import { FaGoogle } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../fireBase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // Sign in with Google
      const result = await signInWithPopup(auth, provider);

      // Send user details to backend for authentication/registration
      const response = await fetch("/realestate/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate with backend");
      }

      const data = await response.json();

      // Save the token and user data in localStorage
      localStorage.setItem("access_token", data.token);  // Save token
      localStorage.setItem("user", JSON.stringify(data.user));  // Save user info

      // Dispatch user data to Redux store
      dispatch(signInSuccess(data.user));
      navigate("/");  // Redirect after successful login
    } catch (err) {
      console.error("Couldn't connect with Google authentication", err);
      alert("Google authentication failed. Please try again.");
    }
  };

  return (
    <button
      onClick={handleGoogle}
      type="button"
      className="w-full bg-blue-600 flex items-center justify-center py-3 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    >
      <FaGoogle className="mr-3" />
      Continue with Google
    </button>
  );
};

export default OAuth; 