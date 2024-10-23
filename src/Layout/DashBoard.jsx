import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaCartPlus,
  FaHome,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <h2 className="text-white">Cafe Commander Dashboard</h2>
        <ul>
          <NavLink className="flex items-center" to={"/dashboard/cart"}>
            <FaCartPlus className="mr-1" />
            <li>My Cart</li>
          </NavLink>

          <NavLink className="flex items-center" to={"/dashboard/userHome"}>
            <FaHome></FaHome>
            <li>User Home</li>
          </NavLink>

          <NavLink className="flex items-center" to={"/dashboard/reservation"}>
            <FaRegCalendarAlt />
            <li>Reservation</li>
          </NavLink>
          
          <NavLink className="flex items-center" to={"/dashboard/review"}>
          <MdReviews />
            <li>Add Review</li>
          </NavLink>

          <NavLink className="flex items-center" to={"/dashboard/booking"}>
          <TbBrandBooking />
            <li>My Booking</li>
          </NavLink>

        </ul>
      </Drawer>

      {/* Main Content Area */}
      <div className="flex-grow p-8">
        <button className="mb-4 btn" onClick={toggleDrawer}>
          Toggle Drawer
        </button>

        {/* This is where child routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
