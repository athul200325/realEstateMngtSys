import { createSlice } from "@reduxjs/toolkit";

// Initial state of the user slice
const initialState = {
    currentUser: null, // Stores the logged-in user's data
    error: null, // Stores error messages
    loading: false, // Indicates if a request is in progress
};

// Create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Sign-in actions
        signInStart: (state) => {
            state.loading = true; // Start the loading state
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload; // Save user data
            state.loading = false; // End loading state
            state.error = null; // Clear any existing errors
        },
        signInFailure: (state, action) => {
            state.error = action.payload; // Set error message
            state.loading = false; // End loading state
        },

        // Update user actions
        updateUserStart: (state) => {
            state.loading = true; // Start the loading state
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload; // Update the user data
            state.loading = false; // End loading state
            state.error = null; // Clear any existing errors
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload; // Set error message
            state.loading = false; // End loading state
        },
    },
});

// Export actions for dispatching
export const {
    signInStart,
    signInSuccess,
    signInFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
} = userSlice.actions;

// Export the reducer to configure in the store
export default userSlice.reducer;
