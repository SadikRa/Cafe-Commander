import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Descriptions from "../Descriptions/Descriptions";

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
    </div>
  );
};

export default Home;
