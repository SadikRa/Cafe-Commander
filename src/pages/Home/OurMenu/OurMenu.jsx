import { useEffect, useState } from "react";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);

  console.log(menu);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-2 my-16 p-4">
      {menu.map((item) => (
        <>
          <MenuItems key={item._id} item={item}></MenuItems>
        </>
      ))}
    </div>
  );
};

export default OurMenu;
