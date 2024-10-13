import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import { key } from "localforage";

const Menu = () => {
  const DessertsImg = ["https://i.ibb.co.com/svX4K2H/main-cake.webp"];

  return (
    <div>
      <Helmet>
        <title>Cafe || Menu</title>
      </Helmet>
      <div className="p-1">
        <img
          src="https://i.ibb.co.com/z4Qrmyt/rsz-menubanner.jpg"
          alt=""
          srcset=""
        />
      </div>

      <div className="mt-4">
        {DessertsImg.map((img, index) => (
          <Cover key={index} img={img} title={'Desserts'}></Cover>
        ))}
        
      </div>
    </div>
  );
};

export default Menu;
