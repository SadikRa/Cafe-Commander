import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl relative">
            <figure className="relative">
                <img className="w-full h-56 object-cover" src={image} alt={name} />
                <p className="absolute top-4 right-4 bg-slate-900 text-white px-4 py-1 rounded-lg shadow-lg">
                    ${price}
                </p>
            </figure>
            <div className="card-body flex flex-col items-center text-center">
                <h2 className="card-title text-lg font-bold">{name}</h2>
                <p className="text-sm text-gray-500">{recipe}</p>
                <div className="card-actions mt-4">
                    <button
                        className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
