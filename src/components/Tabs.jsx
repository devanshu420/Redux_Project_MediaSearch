import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];

  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-3">
        {tabs.map((elem, idx) => (
            
          <button
            key={idx}
            onClick={() => {
                
                dispatch(setActiveTabs(elem))
                
            }}
            className={`flex items-center justify-center 
              px-6 py-3 text-base font-semibold rounded-xl uppercase
              transition-all duration-200 active:scale-95
              ${
                activeTab === elem
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-300"
                  : "text-gray-500 hover:bg-gray-200 hover:text-gray-900"
              }`}
          >
            {elem}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
