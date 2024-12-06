import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Search from './pages/Search';
import CreateListing from './pages/CreateListing';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import EditListing from './pages/EditListing';
import ListingItem from './components/Listing';

const App = () => {
  return (
    <BrowserRouter>
      {/* Toast Container for notifications */}
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="light" 
      />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/search' element={<Search />} />
        <Route path='/listing' element={<ListingItem />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/edit-listing' element={<EditListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
