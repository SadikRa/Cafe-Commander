import useCart from "../../../hooks/useCart";

const Cart = () => {
    const [ cart ] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="relative w-[992px] h-[973px] bg-white lg:pt-12 lg:pl-14 mx-auto mt-10">
            <h1 className="text-4xl">Total orders: {cart.length}</h1>
            <h1>Total price: ${totalPrice}</h1>

            {/* DaisyUI Cards for each cart item */}
            <div className="mt-8 grid grid-cols-1 gap-6">
                {cart.map((item, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl p-4">
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>Price: ${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
