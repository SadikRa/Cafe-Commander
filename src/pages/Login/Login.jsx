import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    const data = {email, password}
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
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Please login to your account
          </p>
          <form onSubmit={handleLogin}>
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
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-sm text-amber-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <input
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-lg shadow-lg hover:bg-amber-600 transition-all duration-300"
              value="login"
            />
          </form>
          <div className="mt-6 text-center">
            <p>
              Don't have an account?{" "}
              <Link to={"/register"} className="text-amber-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
