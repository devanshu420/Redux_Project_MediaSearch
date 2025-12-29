import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item, idx }) => {

  const dispatch = useDispatch();

     const addToCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
        
    }  

  return (
    <div className="w-[17vw] mx-1 relative h-80 bg-white rounded-2xl mt-6 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
      <a target="_blank" className="h-full block" href={item.url}>
        {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            src={item.src}
            alt=""
          />
        ) : null}

        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            autoPlay
            loop
            muted
            src={item.src}
          />
        ) : null}

        {item.type === "gif" ? (
          <img
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            src={item.src}
            alt=""
          />
        ) : null}
      </a>

      {/* Gradient overlay */}
      <div className="absolute inset-0  from-black/70 via-black/20 to-transparent"></div>

      {/* Bottom section */}
      <div
        id="bottom"
        className="flex justify-between gap-2 items-center w-full px-3 py-4 absolute bottom-0 text-white z-10"
      >
        <h2 className="text-base font-semibold capitalize h-12 overflow-hidden leading-snug">
          {item.title}
        </h2>

        <button 
          onClick={() => {
            addToCollection(item)
          }}
          className="bg-indigo-600 hover:bg-indigo-500 cursor-pointer active:scale-95 transition-all duration-200 text-white rounded-lg px-3 py-1 font-medium shadow-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
