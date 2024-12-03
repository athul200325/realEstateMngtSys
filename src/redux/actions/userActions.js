import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../user/userSlice.js"; // Import actions from the slice

// Asynchronous action to update user details
export const updateUserAction = (userId, formData) => async (dispatch) => {
  try {
      // Start the update process
      dispatch(updateUserStart());

      // Make an API call to update the user
      const response = await fetch(`/realestate/user/profile/${userId}`, {
          method: "PUT",
          headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`, // Add the token for authorization
          },
          body: formData, // FormData includes file and other fields
      });

      // Handle the response
      if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Failed to update user");
      }

      const updatedUser = await response.json();

      // Dispatch the success action with updated user data
      dispatch(updateUserSuccess(updatedUser));
  } catch (error) {
      // Dispatch the failure action with the error message
      dispatch(updateUserFailure(error.message));
  }
};