import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = [
    "desserts",
    "beverages",
    "pizza",
    "mainDish",
    "soup",
    "salad",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/menu')
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);


  const desserts = menu.filter((item) => item.category === "dessert");
  const mainDish = menu.filter((item) => item.category === "mainDish");
  const salad = menu.filter((item) => item.category === "salad");
  const beverages = menu.filter((item) => item.category === "beverages");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div className="p-1">
      <Helmet>
        <title>Cafe || Order</title>
      </Helmet>

      <div className="flex justify-center items-center">
        <div
          className="hero h-[500px] md:h-[900px] w-full text-center bg-cover bg-center"
          style={{
            backgroundImage: "url(https://i.ibb.co/9ypV4Zk/soup.webp)", // fixed link
          }}
        >
          <div className="bg-black bg-opacity-40 p-12 rounded shadow-md">
            <h1 className="text-3xl text-white text-center">Order Our Food</h1>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-28">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
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

          <TabPanel className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {desserts.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {beverages.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {mainDish.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
