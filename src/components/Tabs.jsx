import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="w-full flex justify-center mt-1 px-4">
      <div className="flex items-center gap-3 p-2 rounded-2xl bg-white/15 backdrop-blur-md shadow-lg">
        {tabs.map((elem, idx) => {
          const isActive = activeTab === elem;

          return (
            <button
              key={idx}
              onClick={() => dispatch(setActiveTabs(elem))}
              className={`
                relative flex items-center justify-center
                px-6 py-2 text-sm font-semibold uppercase rounded-xl
                transition-all duration-300 ease-out
                active:scale-95
                ${
                  isActive
                    ? `
                      from-indigo-600 via-purple-600 to-indigo-700
                      text-white
                      shadow-lg shadow-indigo-500/50
                      hover:-translate-y-1 hover:shadow-2xl
                    `
                    : `
                      text-white/60
                      hover:text-white
                      hover:bg-white/20
                      hover:-translate-y-1
                      hover:shadow-xl hover:shadow-indigo-500/40
                    `
                }
              `}
            >
              {elem}

              {/* Active indicator bar */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-indigo-400"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
