import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    return (
        <div className="w-full lg:w-11/12 mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row justify-between items-center my-6">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-500">All Users</h2>
                <h2 className="text-xl lg:text-2xl text-gray-600">Total Users: {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse">
                    {/* Table Head */}
                    <thead className="bg-amber-500 text-white">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Role</th>
                            <th className="p-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-gray-100 transition-colors">
                                <td className="p-3 border-b text-center">{index + 1}</td>
                                <td className="p-3 border-b">{user.name}</td>
                                <td className="p-3 border-b">{user.email}</td>
                                <td className="p-3 border-b text-center">
                                    {user.role === 'admin' ? (
                                        <span className="text-green-500 font-semibold">Admin</span>
                                    ) : (
                                        <button className="btn btn-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
                                            <FaUsers className="text-lg" />
                                        </button>
                                    )}
                                </td>
                                <td className="p-3 border-b text-center">
                                    <button className="btn btn-ghost text-red-600 hover:text-red-700 transition">
                                        <FaTrashAlt className="text-xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
