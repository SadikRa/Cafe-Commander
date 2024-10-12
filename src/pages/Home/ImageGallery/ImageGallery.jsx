import React, { useState } from "react";

const ImageGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "https://i.ibb.co/DDdZ1yk/rsz-cake1.jpg",
    "https://i.ibb.co/2FWSw5T/rsz-cake2.jpg",
    "https://i.ibb.co/DDdZ1yk/rsz-cake1.jpg",
    "https://i.ibb.co/2FWSw5T/rsz-cake2.jpg",
    "https://i.ibb.co/DDdZ1yk/rsz-cake1.jpg",
    "https://i.ibb.co/2FWSw5T/rsz-cake2.jpg",
    "https://i.ibb.co/DDdZ1yk/rsz-cake1.jpg",
    "https://i.ibb.co/2FWSw5T/rsz-cake2.jpg",
    "https://i.ibb.co/DDdZ1yk/rsz-cake1.jpg",
    "https://i.ibb.co/2FWSw5T/rsz-cake2.jpg",
  ];

  return (
    <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`Cake ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-semibold">View</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-lg text-xl"
            >
              &times;
            </button>
            <img
              src={selectedImg}
              alt="Full Screen"
              className="max-w-full max-h-screen object-cover"
            />
          </div>
        </div>
      )}

      <div className="flex justify-center items-center my-5">
        <button className="btn btn-primary bg-amber-500 hover:bg-amber-600 border-none">View More</button>
      </div>
    </div>
  );
};

export default ImageGallery;
