import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/carts/${id}`)
        .then(res => {
            if(res.data.deletedCount){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch()
            }
        })
      }
    });
  };
  return (
    <div className="sm:p-1">
      <div className="relative w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 mx-auto mt-10">
      <div className="flex justify-center items-center my-5">
       <h1 className="text-4xl text-amber-500">WANNA ADD MORE?</h1>
       </div>
        {/* Cart Summary Section */}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4 sm:mb-0">
            Items: {cart.length}
          </h2>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4 sm:mb-0">
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
          <button className="btn bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg">
            Pay Now
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="table w-full bg-white">
            {/* Table Head */}
            <thead className="bg-amber-500 text-white">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-100">
                  <td className="text-center p-3">{index + 1}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-lg text-gray-700 p-3">{item.name}</td>
                  <td className="text-lg text-gray-700 p-3">${item.price}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-sm sm:btn-lg text-red-600"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
