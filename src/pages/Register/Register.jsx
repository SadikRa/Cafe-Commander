import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate  = useNavigate()

  const { createUser, updateUseProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (result.user) {
          Swal.fire({
            title: "success!",
            text: "register successful",
            icon: "success",
            confirmButtonText: "yahoo",
          });
        }
        updateUseProfile(data.name, data.photoUrl)
        .then(() => {
          console.log('user profile updated')
          reset()
          Swal.fire({
            title: "success!",
            text: "user profile updated",
            icon: "success",
            confirmButtonText: "yahoo",
          });
          navigate('/')
        }).catch((error) => {
          console.log(error)
        });
      })
      .then((error) => {
        console.log(error);
      });
  };

  console.log(watch("example"));

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const target = e.target;
  //   const name = target.name.value;
  //   const email = target.email.value;
  //   const password = target.password.value;
  //   const data = { name, email, password };

  //   createUser(email, password)
  //   .then(result => {
  //     const user = result.user;
  //     console.log(user)
  //   })
  //   .then(error => {
  //     console.log(error)
  //   })
  // };
  return (
    <div>
      <Helmet>
        <title>Cafe || Register</title>
      </Helmet>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Type your Name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm font-medium">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Photo Url
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  {...register("photoUrl", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Give your photoUrl Link"
                />
                {errors.photoUrl && (
                  <span className="text-red-500 text-sm font-medium">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm font-medium">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  className="w-full px-4 py-3 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 12 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <input
                type="submit"
                className="w-full bg-amber-500 text-white py-3 rounded-lg shadow-lg hover:bg-amber-600 transition-all duration-300"
                value="Register"
              />
            </form>
            <div className="mt-6 text-center">
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="text-amber-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
