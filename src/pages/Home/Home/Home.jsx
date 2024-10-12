import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Descriptions from "../Descriptions/Descriptions";
import OurChef from "../OurChef/OurChef";
import OurMenu from "../OurMenu/OurMenu";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Descriptions></Descriptions>

      {/* category section */}
      <h4 className="text-4xl mt-12 lg:mt-24 text-amber-500 font-bold p-2 text-center">
        Online order item available
      </h4>
      <Category></Category>
      
      {/* menu section */}
      <h4 className="text-4xl mt-12 lg:mt-24 text-amber-500 font-bold p-2 text-center">
        Our Menu
      </h4>
      <OurMenu></OurMenu>
      {/* Our Chef */}
      <h4 className="text-4xl mt-12 lg:mt-24 text-amber-500 font-bold p-2 text-center">
      Our Chef
      </h4>
      <OurChef></OurChef>
    </div>
  );
};

export default Home;
