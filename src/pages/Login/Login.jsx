import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [captchaValue, setCaptchaValue] = useState("");
  const { logIn, setLoading } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    logIn(email, password)
      .then((userCredential) => {
        setLoading(false);
        if (userCredential.user) {
          Swal.fire({
            title: "success!",
            text: "Login successful",
            icon: "success",
            confirmButtonText: "yahoo",
          });
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Login failed:", error);
      });
  };

  const handleValidateCaptcha = () => {
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
      Swal.fire({
        title: "Success!",
        text: "Captcha Matched",
        icon: "success",
        confirmButtonText: "Yahoo",
      });
    } else {
      setDisabled(true);
      Swal.fire({
        title: "Error!",
        text: "Captcha Does Not Match",
        icon: "error",
        confirmButtonText: "Ahh",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Cafe || Login</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row max-w-4xl w-full shadow-lg rounded-lg overflow-hidden">
          <div
            className="hidden md:block md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.ibb.co/HCmn45X/loginp.jpg')",
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
                  className="w-full px-4 py-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <a href="#" className="text-sm text-amber-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <div className="flex flex-col space-y-1 mb-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-1 rounded-lg shadow-sm">
                    <LoadCanvasTemplate />
                  </div>

                  <button
                    type="button"
                    onClick={handleValidateCaptcha}
                    className="btn btn-outline btn-xs hover:bg-amber-500 text-sm  border border-amber-500 hover:text-white  rounded-lg transition duration-300"
                  >
                    Validate
                  </button>
                </div>

                <input
                  type="text"
                  name="captcha"
                  onChange={(e) => setCaptchaValue(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Type the captcha"
                />
              </div>

              <input
                type="submit"
                disabled={disabled}
                className={`btn btn-ghost w-full bg-amber-500 text-white py-3 rounded-lg shadow-lg hover:bg-amber-600 transition-all duration-300 ${
                  disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                value="Login"
              />
            </form>
            <div className="mt-6 text-center">
              <p>
                Don't have an account?{" "}
                <Link
                  to={"/register"}
                  className="text-amber-500 hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
