import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });


  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }

  const handleDeleteUsers = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="sm:p-1 px-2">
      <div className="relative w-full max-w-5xl bg-white shadow-lg rounded-lg p-4 sm:p-4 mx-auto mt-5 sm:mt-10">
        <div className="flex flex-col items-center my-5">
          <h1 className="text-2xl sm:text-4xl text-amber-500 text-center">
            MANAGE ALL USERS
          </h1>
        </div>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center my-4 gap-2">
          <h2 className="text-lg sm:text-2xl font-bold text-amber-500">
            All Users
          </h2>
          <h2 className="text-sm sm:text-lg text-gray-600 mt-2 sm:mt-0">
            Total Users: {users.length}
          </h2>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse text-xs sm:text-sm">
            {/* Table Head */}
            <thead className="bg-amber-500 text-white">
              <tr>
                <th className="p-2 sm:p-3 text-center">#</th>
                <th className="p-2 sm:p-3">Name</th>
                <th className="p-2 sm:p-3">Email</th>
                <th className="p-2 sm:p-3 text-center">Role</th>
                <th className="p-2 sm:p-3 text-center">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="p-2 sm:p-3 text-center border-b">
                    {index + 1}
                  </td>
                  <td className="p-2 sm:p-3 border-b">{user.name}</td>
                  <td className="p-2 sm:p-3 border-b">{user.email}</td>
                  <td className="p-2 sm:p-3 text-center border-b">
                    {user.role === "admin" ? (
                      <span className="text-green-600 font-semibold">
                        Admin
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-xs sm:btn-sm bg-amber-500 text-white rounded-md hover:bg-amber-600 transition"
                      >
                        <FaUsers className="text-sm sm:text-lg" />
                      </button>
                    )}
                  </td>
                  <td className="p-2 sm:p-3 text-center border-b">
                    <button
                      onClick={() => handleDeleteUsers(user)}
                      className="btn btn-ghost text-red-600 hover:text-red-700 transition"
                    >
                      <FaTrashAlt className="text-lg" />
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

export default AllUsers;
