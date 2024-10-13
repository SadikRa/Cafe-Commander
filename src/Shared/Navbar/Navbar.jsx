import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Cafe_Commander_logo1.jpg";

const Navbar = () => {
  const navOptions = (
    <>
      <li><NavLink to={'/menu'}>Menu</NavLink></li>
    </>
  );

  return (
    <div className="fixed top-0 w-full bg-black bg-opacity-30 text-white shadow-lg z-50 container">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link className=" hover:shadow-amber-300 hover:shadow-md " to={"/"}>
            <img
              src={logo}
              alt="Cafe Commander Logo"
              className="h-10 w-14 rounded-lg"
            />
          </Link>
        </div>

        {/* Center the nav options for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {/* Button on the right side with the requested styles */}
        <div className="navbar-end">
          <a
            className="btn bg-amber-500 hover:bg-amber-600 text-white"
            href="#"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
