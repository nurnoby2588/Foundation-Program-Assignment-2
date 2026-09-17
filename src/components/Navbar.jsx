import { NavLink } from "react-router";
import logo from "/download.jpg";
const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex max-w-7xl justify-between items-center px-4 py-3 sm:px-6 lg:px-8 mx-auto">
        {/* logo and brand */}
        <NavLink to={"/"} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <samp className="text-lg font-bold text-gray-900 sm:text-xl">
            MovieExplorer
          </samp>
        </NavLink>

        <div className="hidden items-center gap-6 sm:flex">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `font-medium transition ${isActive ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/movies"}
            className=" rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Movies
          </NavLink>

        </div>
          <div className="flex items-center sm:hidden">
            <NavLink to={'/movies'} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              Movies
            </NavLink>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
