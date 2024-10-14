import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const desserts = menu.filter((item) => item.category === "dessert");
  const mainDish = menu.filter((item) => item.category === "mainDish");
  const salad = menu.filter((item) => item.category === "salad");
  const beverages = menu.filter((item) => item.category === "beverages");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="p-1">
      {/* Page Title */}
      <Helmet>
        <title>Cafe Commander || Order</title>
      </Helmet>

      {/* Banner Image */}

      <div className="flex justify-center items-center">
        <div
          className="hero h-[500px] md:h-[900px] w-full text-center "
          style={{
            backgroundImage: "url(https://i.ibb.co.com/9ypV4Zk/soup.webp)",
          }}
        >
          <div className="bg-black bg-opacity-40 p-12 rounded shadow-md">
            <h1 className="text-3xl text-white text-center">Order Our Food</h1>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-28">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          {/* Responsive TabList */}
          <TabList className="flex flex-wrap border-b-2 border-gray-200">
            <Tab
              className={`px-2 py-1 sm:px-4 sm:py-2 cursor-pointer transition-colors text-sm md:text-base ${
                tabIndex === 0
                  ? "text-amber-500 border-b-4 border-amber-500 font-semibold"
                  : "text-gray-600 hover:text-amber-500"
              }`}
            >
              Dessert
            </Tab>

            <Tab
              className={`px-2 py-1 sm:px-4 sm:py-2 cursor-pointer transition-colors text-sm md:text-base ${
                tabIndex === 1
                  ? "text-amber-500 border-b-4 border-amber-500 font-semibold"
                  : "text-gray-600 hover:text-amber-500"
              }`}
            >
              Beverages
            </Tab>

            <Tab
              className={`px-2 py-1 sm:px-4 sm:py-2 cursor-pointer transition-colors text-sm md:text-base ${
                tabIndex === 2
                  ? "text-amber-500 border-b-4 border-amber-500 font-semibold"
                  : "text-gray-600 hover:text-amber-500"
              }`}
            >
              Pizza
            </Tab>

            <Tab
              className={`px-2 py-1 sm:px-4 sm:py-2 cursor-pointer transition-colors text-sm md:text-base ${
                tabIndex === 3
                  ? "text-amber-500 border-b-4 border-amber-500 font-semibold"
                  : "text-gray-600 hover:text-amber-500"
              }`}
            >
              Main Dish
            </Tab>

            <Tab
              className={`px-2 py-1 sm:px-4 sm:py-2 cursor-pointer transition-colors text-sm md:text-base ${
                tabIndex === 4
                  ? "text-amber-500 border-b-4 border-amber-500 font-semibold"
                  : "text-gray-600 hover:text-amber-500"
              }`}
            >
              Soup
            </Tab>

            <Tab
              className={`px-2 py-1 sm:px-4 sm:py-2 cursor-pointer transition-colors text-sm md:text-base ${
                tabIndex === 5
                  ? "text-amber-500 border-b-4 border-amber-500 font-semibold"
                  : "text-gray-600 hover:text-amber-500"
              }`}
            >
              Salad
            </Tab>
          </TabList>

          {/* Responsive TabPanel content */}
          <TabPanel className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800">
              Content for Dessert
            </h2>
            <p className="text-gray-600">
              This is the content of the first tab. You can customize it as
              needed.
            </p>
          </TabPanel>
          <TabPanel className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800">
              Content for Beverages
            </h2>
            <p className="text-gray-600">
              This is the content of the second tab. Style it as you wish!
            </p>
          </TabPanel>
          {/* Add additional TabPanels as needed */}
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
