import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaHome, FaRegCalendarAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { HiMenu } from "react-icons/hi";
import { FaBagShopping } from "react-icons/fa6";
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
        <h2 className="text-white text-2xl font-bold mb-4 p-4">Cafe Commander Dashboard</h2>
        <ul className="space-y-4 p-4 lg:pl-8 lg:pt-8">
          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/dashboard/userHome"}
          >
            <FaHome />
            <li>User Home</li>
          </NavLink>

          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/dashboard/cart"}
          >
            <FaCartPlus className="mr-1" />
            <li>My Cart</li>
          </NavLink>

          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/dashboard/reservation"}
          >
            <FaRegCalendarAlt />
            <li>Reservation</li>
          </NavLink>

          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/dashboard/review"}
          >
            <MdReviews />
            <li>Add Review</li>
          </NavLink>

          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/dashboard/booking"}
          >
            <TbBrandBooking />
            <li>My Booking</li>
          </NavLink>

          <div className="divider border-t-2 border-gray-200"></div>

          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/"}
          >
            <FaHome />
            <li>Home</li>
          </NavLink>

          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/"}
          >
            <HiMenu />
            <li>Menu</li>
          </NavLink>

          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/"}
          >
            <FaBagShopping />
            <li>Shop</li>
          </NavLink>

          <NavLink
            className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            to={"/"}
          >
            <MdContactPhone />
            <li>Contact</li>
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

        {/* This is where child routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
