// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "mernestate-ade4a.firebaseapp.com",
  projectId: "mernestate-ade4a",
  storageBucket: "mernestate-ade4a.firebasestorage.app",
  messagingSenderId: "240900636176",
  appId: "1:240900636176:web:26cbfe7ca2455785239495"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);