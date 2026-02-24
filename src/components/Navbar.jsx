// Navbar.jsx
import { NavLink, Link } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg transition font-medium ${
    isActive
      ? "bg-primary text-primary-content"
      : "text-base-content/80 hover:text-base-content hover:bg-base-200"
  }`;

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-base-100/80 border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h10M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56 border border-base-200"
            >
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/all" className={navLinkClass}>
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink to="/installed" className={navLinkClass}>
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 px-2">
            {/* In Vite/React, prefer /assets/... instead of ../../public/... */}
            <img className="w-10 h-10" src="/assets/logo.png" alt="HeroApp" />
            <span className="text-xl font-bold tracking-tight">HeroApp</span>
            <span className="badge badge-outline ml-1 hidden sm:inline-flex">
              Store
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/all" className={navLinkClass}>
              Apps
            </NavLink>
            <NavLink to="/installed" className={navLinkClass}>
              Installation
            </NavLink>
          </div>
        </div>

        <div className="navbar-end">
          <Link to="/all" className="btn btn-primary btn-sm sm:btn-md">
            Explore Apps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;