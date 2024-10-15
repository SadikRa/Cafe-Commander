import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    const data = {name, email, password}
    console.log(data)
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row max-w-4xl w-full shadow-lg rounded-lg overflow-hidden">
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/HCmn45X/loginp.jpg')",
          }}
        ></div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Register Now
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Please Register to your account
          </p>
          <form onSubmit={handleRegister}>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <input
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-lg shadow-lg hover:bg-amber-600 transition-all duration-300"
              value="login"
            />
          </form>
          <div className="mt-6 text-center">
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="text-amber-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
