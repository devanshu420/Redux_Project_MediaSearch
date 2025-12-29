/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  return (
    <div
      className="
        w-[18vw] h-80 relative overflow-hidden rounded-2xl
        bg-white/10 backdrop-blur-lg
        shadow-lg
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-2xl hover:shadow-indigo-500/40
        group
      "
    >
      {/* Media */}
      <a target="_blank" rel="noreferrer" href={item.url} className="h-full block">
        {item.type === "photo" && (
          <img
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            src={item.src}
            alt=""
          />
        )}

        {item.type === "video" && (
          <video
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        )}

        {item.type === "gif" && (
          <img
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            src={item.src}
            alt=""
          />
        )}
      </a>

      {/* Bottom Overlay */}
      <div
        className="
          absolute bottom-0 w-full
          px-4 py-4
          flex items-center justify-between gap-3
           from-black/70 via-black/40 to-transparent
          text-white
        "
      >
        <h2 className="text-sm font-semibold capitalize h-12 overflow-hidden leading-snug">
          {item.title}
        </h2>

        <button
          onClick={() => removeFromCollection(item)}
          className="
            px-4 py-1.5 rounded-xl text-sm font-semibold
            bg-white/15 backdrop-blur-md
            transition-all duration-300
            hover:bg-red-500
            hover:shadow-lg hover:shadow-red-400/40
            hover:-translate-y-0.5
            active:scale-95
          "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
