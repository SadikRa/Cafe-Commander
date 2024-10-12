import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Descriptions from "../Descriptions/Descriptions";
import ImageGallery from "../ImageGallery/ImageGallery";
import OurChef from "../OurChef/OurChef";
import OurMenu from "../OurMenu/OurMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Descriptions></Descriptions>

      {/* category section */}
      <h4 className="text-4xl uppercase mt-12 lg:mt-24 text-amber-500 font-bold p-2 text-center">
        Online order item available
      </h4>
      <Category></Category>
      
      {/* menu section */}
      <h4 className="text-4xl uppercase mt-12 lg:mt-24 text-amber-500 font-bold p-2 text-center">
        Our Menu
      </h4>
      <OurMenu></OurMenu>
      {/* Our Chef section*/}
      <h4 className="text-4xl uppercase mt-12 lg:mt-24 text-amber-500 font-bold p-2 text-center">
      Our Chef
      </h4>
      <OurChef></OurChef>

      {/* gallery section*/}
      <h2 className="text-4xl uppercase mt-12 lg:mt-24 text-amber-500 font-bold p-2 text-center">
        Café Commander’s Gallery
      </h2>
      <ImageGallery></ImageGallery>

      {/* Testimonials section */}
      <h2 className="text-4xl uppercase mt-12 lg:mt-24 text-amber-500 font-bold p-2 text-center">
      Customer Reviews
      </h2>
      <p className="text-2xl font-bold p-2 text-center">What Our Client Say</p> 
      <Testimonials></Testimonials>

    </div>
  );
};

export default Home;
