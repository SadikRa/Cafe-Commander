import React from "react";
import './Descriptions.css'

const Descriptions = () => {
  return (
    <div className="flex justify-center items-center mt-12 lg:mt-24">
      <div className="h-full w-full text-center " id="bgImage">
      <div className="bg-white p-12 rounded shadow-md">
        <h1 className="text-3xl text-center">Cafe Commander</h1>
        <p className=" text-center">
        Cafe Commander offers a unique blend of classic and contemporary dishes,
      delivering an unforgettable dining experience. <br /> Enjoy flavorful creations
      in a cozy, welcoming atmosphere.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Descriptions;
