import React from "react";
import { Helmet } from "react-helmet-async";

const Order = () => {
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
    </div>
  );
};

export default Order;
