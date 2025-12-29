import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="
      flex justify-between items-center px-12 py-5
      from-indigo-600 via-purple-600 to-indigo-700
      shadow-lg
    "
    >
      {/* Logo */}
      <Link to="/">
        <img
          src="logo.png"
          alt="MediaSearch Logo"
          className="
      h-24 w-auto
      cursor-pointer
      mix-blend-screen
      bg-transparent
      scale-110
      transition-all duration-300 ease-out
     
      active:scale-100
    "
        />
      </Link>

      {/* Links */}
      <div className="flex gap-5 items-center">
        <Link
          to="/"
          className="
            relative px-6 py-2 rounded-xl text-sm font-semibold text-white
            bg-white/15 backdrop-blur-md
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:shadow-xl hover:shadow-indigo-500/40
            active:scale-95
          "
        >
          Search
        </Link>

        <Link
          to="/collection"
          className="
            relative px-6 py-2 rounded-xl text-sm font-semibold text-white
            bg-white/15 backdrop-blur-md
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:shadow-xl hover:shadow-indigo-500/40
            active:scale-95
          "
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
