import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="overflow-auto px-10 py-6 min-h-screen  from-gray-100 via-white to-gray-200">
      {collection.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Collection
          </h2>

          <button
            onClick={clearAll}
            className="
              relative px-6 py-3 rounded-xl text-lg font-semibold text-white
               from-red-500 via-red-600 to-red-700
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-xl hover:shadow-red-400/40
              active:scale-95
            "
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-5xl py-20 text-gray-300 text-center font-medium">
          Collection is Empty
        </h2>
      )}

      <div className="flex flex-wrap justify-start gap-6 mt-4">
        {collection.map((item, idx) => (
          <CollectionCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
