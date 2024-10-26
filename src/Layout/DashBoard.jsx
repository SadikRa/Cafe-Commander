import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaHome, FaRegCalendarAlt, FaStream, FaUtensils } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { HiMenu } from "react-icons/hi";
import { FaBagShopping, FaBookBookmark, FaRegCircleUser } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAdmin = true;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex">
      {/* Sidebar Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{ backgroundColor: "#4A5568" }}
      >
        <h2 className="text-white text-2xl font-bold mb-4 p-4">
          Cafe Commander Dashboard
        </h2>
        <ul className="space-y-4 p-4 lg:pl-8 lg:pt-8">
          {isAdmin ? (
            <>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/adminHome"}
              >
                <FaHome />
                Admin Home
              </NavLink>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/addItems"}
              >
                <FaUtensils />
                Add Items
              </NavLink>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/manageItems"}
              >
                <FaStream />
                Manage Items
              </NavLink>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/manageBooking"}
              >
                <FaBookBookmark />
                Manage Bookings
              </NavLink>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/users"}
              >
                <FaRegCircleUser />
                All Users
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/userHome"}
              >
                <FaHome />
                User Home
              </NavLink>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/cart"}
              >
                <FaCartPlus />
                My Cart
              </NavLink>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/reservation"}
              >
                <FaRegCalendarAlt />
                Reservation
              </NavLink>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/review"}
              >
                <MdReviews />
                Add Review
              </NavLink>
              <NavLink
                className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
                to={"/dashboard/booking"}
              >
                <TbBrandBooking />
                My Booking
              </NavLink>
            </>
          )}
          <div className="border-t-2 border-gray-200 my-4"></div>
          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/"}
          >
            <FaHome />
            Home
          </NavLink>
          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/"}
          >
            <HiMenu />
            Menu
          </NavLink>
          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/"}
          >
            <FaBagShopping />
            Shop
          </NavLink>
          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/"}
          >
            <MdContactPhone />
            Contact
          </NavLink>
        </ul>
      </Drawer>

      {/* Main Content Area */}
      <div className="flex-grow p-8">
        <button
          className="mb-4 btn bg-amber-500 hover:bg-amber-600 text-white"
          onClick={toggleDrawer}
        >
          Open Side Nav
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
