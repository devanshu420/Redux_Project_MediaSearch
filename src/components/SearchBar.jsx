import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim() === "") {
      setError(true);
      return;
    }
    // For Performing action
    dispatch(setQuery(searchValue))

    // setSearchValue('')
    setError(false);
    console.log("Searching for:", searchValue);
  };

  return (
    <div className="flex flex-col items-center mt-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-xl items-center gap-2 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-indigo-500 transition-all"
      >
        <input
          type="text"
          placeholder="Search anything..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setError(false);
          }}
          className="flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
        />

        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-95"
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      <div
        className={`mt-3 text-sm text-red-500 transition-all duration-300 ${
          error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        ⚠️ Please fill in the field
      </div>
    </div>
  );
};

export default SearchBar;
