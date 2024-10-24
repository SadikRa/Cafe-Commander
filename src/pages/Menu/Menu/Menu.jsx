import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const desserts = menu.filter((item) => item.category === "dessert");
  const mainDish = menu.filter((item) => item.category === "mainDish");
  const salad = menu.filter((item) => item.category === "salad");
  const beverages = menu.filter((item) => item.category === "beverages");
  const offered = menu.filter((item) => item.category === "offered");

  useEffect(() => {
    fetch('http://localhost:5000/menu')
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  return (
    <div className="p-1">
      {/* Page Title */}
      <Helmet>
        <title>Cafe || Menu</title>
      </Helmet>

      {/* Banner Image */}
      <div className=" ">
        <img
          src="https://i.ibb.co/z4Qrmyt/rsz-menubanner.jpg"
          alt="Menu Banner"
          className="w-full h-[500px] md:h-[900px]"
        />
      </div>

      {/* Menu Categories */}
      <div className="mt-4">
        <MenuCategory
          items={offered}
          img={"https://i.ibb.co.com/jv4KHTr/Banner3.webp"}
          title="Today's Special"
        ></MenuCategory>

        {/* Dessert Menu */}
        <MenuCategory
          items={desserts}
          title="desserts"
          img="https://i.ibb.co/svX4K2H/main-cake.webp"
        ></MenuCategory>

        {/* beverages Menu */}
        <MenuCategory
          items={beverages}
          title="beverages"
          img="https://i.ibb.co.com/FsDyrKR/Gemini-Generated-Image-5ybtsx5ybtsx5ybt.jpg"
        ></MenuCategory>

        {/* Salad Menu */}
        <MenuCategory
          items={salad}
          title="salad"
          img="https://i.ibb.co.com/SvbmGbq/Salads.webp"
        ></MenuCategory>

        {/* mainDish Menu */}
        <MenuCategory
          items={mainDish}
          title="mainDish"
          img="https://i.ibb.co.com/xg3BhTC/Gemini-Generated-Image-4xtikn4xtikn4xti.jpg"
        ></MenuCategory>

        {/* offered Menu */}
      </div>
    </div>
  );
};

export default Menu;
