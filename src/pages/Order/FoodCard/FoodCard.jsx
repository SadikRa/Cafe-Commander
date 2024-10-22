import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleAddToCart = () => {
        if(user && user.email){
                const cartItem = {
                    menuId: _id ,
                    email: user.email,
                    name, 
                    image,
                    price
                }
                axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added done`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
        }

        else{
            Swal.fire({
                title: "Your are not login at this time",
                text: "please login first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }


    }

    return (
        <div className="card  w-96 p-1 bg-base-100 shadow-xl relative">
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
                    onClick={() => handleAddToCart(item)}
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
