import React, { useState } from "react";
import { FaBox } from "react-icons/fa";

function Login() {
  const [isRegister, setIsRegister] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (isRegister) {
      if (!formData.name.trim()) tempErrors.name = "Full name is required";
      if (!formData.userName.trim())
        tempErrors.userName = "Username is required";
      if (!formData.email.trim()) {
        tempErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Email is not valid";
      }
    } else {
      if (!formData.userName.trim())
        tempErrors.userName = "Username or email is required";
    }

    if (!formData.password.trim()) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Handle API or navigation here
    }
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-1/2 flex flex-col items-center justify-center p-8">
        <div
          className="w-[75%] h-[100vh] py-4 mx-auto px-4 border-1 border-gray-100 shadow-md"
          style={{ backgroundColor: "white" }}
        >
          <div className="text-center mb-6">
            <h2
              className="text-4xl text-center mt-0 md:mt-10 lg:mt-10"
              style={{ fontWeight: "700" }}
            >
              Welcome To PakCarry
            </h2>
          </div>

          <div className="flex justify-center mb-4">
            <button
              className={`px-4 py-2 w-1/2 border rounded-l-md ${
                isRegister
                  ? "bg-[#0ac6ae] text-white font-semibold"
                  : "bg-white"
              }`}
              onClick={() => {
                setIsRegister(true);
                setErrors({});
              }}
            >
              Register
            </button>
            <button
              className={`px-4 py-2 w-1/2 border rounded-r-md ${
                !isRegister
                  ? "bg-[#0ac6ae] text-white font-semibold"
                  : "bg-white"
              }`}
              onClick={() => {
                setIsRegister(false);
                setErrors({});
              }}
            >
              Login
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {isRegister ? (
              <>
                <label htmlFor="name" className="leading-7 text-sm mb-0">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="i.e John Doe"
                  className="w-full border px-4 py-2 rounded mb-1 focus:outline-[#0ac6ae]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}

                <label htmlFor="userName" className="leading-7 text-sm mb-0">
                  UserName:
                </label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="i.e Doe123"
                  className="w-full border px-4 py-2 rounded mb-1 focus:outline-[#0ac6ae]"
                />
                {errors.userName && (
                  <p className="text-red-500 text-sm">{errors.userName}</p>
                )}

                <label htmlFor="email" className="leading-7 text-sm mb-0">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., doe@gmail.com"
                  className="w-full border px-4 py-2 rounded mb-1 focus:outline-[#0ac6ae]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}

                <label htmlFor="password" className="leading-7 text-sm mb-0">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border px-4 py-2 rounded mb-1 focus:outline-[#0ac6ae]"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}

                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="checkbox"
                    className="accent-green-500"
                    style={{ accentColor: "#0ac6ae" }}
                  />
                  <label className="text-sm">
                    I want to be a traveler and deliver packages
                  </label>
                </div>
              </>
            ) : (
              <div className="mt-20">
                <label htmlFor="userName" className="leading-7 text-sm mb-0">
                  UserName or Email:
                </label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Enter your username or email"
                  className="w-full border px-4 py-2 rounded mb-1 focus:outline-[#0ac6ae]"
                />
                {errors.userName && (
                  <p className="text-red-500 text-sm">{errors.userName}</p>
                )}

                <label htmlFor="password" className="leading-7 text-sm mb-0">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border px-4 py-2 rounded mb-1 focus:outline-[#0ac6ae]"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#0ac6ae] hover:bg-[#089f8d] transition-all duration-300 text-white py-2 rounded mt-3"
            >
              {isRegister ? "Create Account" : "Login"}
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-[#0ac6ae] text-white items-center justify-center text-center p-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Pakistan's First P2P Package <br /> Delivery Platform
          </h2>
          <p className="text-lg">
            Connect with verified travelers to send packages across cities at
            affordable rates. Safe, secure, and efficient delivery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
