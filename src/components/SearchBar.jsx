import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState(false); // track if user searched

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim() === "") {
      setError(true);
      return;
    }

    dispatch(setQuery(searchValue));
    setError(false);
    setSearched(true); // mark that search happened
  };

  return (
    <div
      className={`
        flex flex-col items-center
        px-4 
        transition-all duration-500 ease-out
        ${searched ? "mt-10" : "mt-40"} 
      `}
    >
      <form
        onSubmit={handleSubmit}
        className="
          group
          flex w-full max-w-2xl items-center gap-2 p-2 rounded-2xl
          bg-white/15 backdrop-blur-md
          shadow-xl
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-2xl
          hover:ring-2 hover:ring-indigo-400/60
          focus-within:ring-2 focus-within:ring-indigo-500/70
        "
      >
        <input
          type="text"
          placeholder="Search anything..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setError(false);
          }}
          className="
            flex-1 px-5 py-3 rounded-xl
            bg-transparent
            text-sm text-white placeholder-white/60
            focus:outline-none
          "
        />

        <button
          type="submit"
          className="
            px-6 py-3 rounded-xl
            text-sm font-semibold text-white
             from-indigo-600 via-purple-600 to-indigo-700
            transition-all duration-300 ease-out
            hover:scale-110
            hover:shadow-xl hover:shadow-indigo-500/40
            active:scale-95
          "
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      <div
        className={`mt-3 text-sm text-red-300 transition-all duration-300 ${
          error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        ⚠️ Please fill in the field
      </div>
    </div>
  );
};

export default SearchBar;
