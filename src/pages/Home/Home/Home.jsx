import Category from "../../Category/Category";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>

      {/* category section */}
      <h4 className="text-4xl mt-10 text-amber-500 font-bold p-2 text-center">
        Online order item available
      </h4>

      <Category></Category>
    </div>
  );
};

export default Home;
