// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
  
const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />

    </div>
  )
}

export default App
































/*

import { fetchPhoto, fetchVideo, fetchGIF } from "./api/mediaApi";

const App = () => {
  
  const fetchPhotoData = async () => {
    const photoData = await fetchPhoto("cat");
    console.log("Photo Data is => ", photoData);
  };

  const fetchVideoData = async () => {
    const videoData = await fetchVideo("cat");
    console.log("Video Data is => ", videoData);
  };

  const fetchGIFData = async () => {
    const GIFData = await fetchGIF("cat");
    console.log("GIF Data is => ", GIFData);
  };

  return (

    <div className="h-screen flex items-center justify-center  from-indigo-100 to-purple-200">
      <div className="bg-white px-10 py-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center">App</h1>
        <button
          onClick={fetchPhotoData}
          className="
            px-6 py-3 m-3
           bg-indigo-500 text-white font-semibold
            rounded-xl shadow-md
            transition-all duration-200
           hover:bg-indigo-600 hover:scale-105 hover:shadow-lg
            active:scale-95
  "
        >
          Fetch Photo
        </button>
  
        <button
          onClick={fetchVideoData}
          className="
            px-6 py-3 m-3
           bg-indigo-500 text-white font-semibold
            rounded-xl shadow-md
            transition-all duration-200
           hover:bg-indigo-600 hover:scale-105 hover:shadow-lg
            active:scale-95
  "
        >
          Fetch Video
        </button>

        <button
          onClick={fetchGIFData}
          className="
            px-6 py-3 m-3
           bg-indigo-500 text-white font-semibold
            rounded-xl shadow-md
            transition-all duration-200
           hover:bg-indigo-600 hover:scale-105 hover:shadow-lg
            active:scale-95
  "
        >
          Fetch GIF
        </button>
      </div>
    </div>
  );
};

export default App;

*/