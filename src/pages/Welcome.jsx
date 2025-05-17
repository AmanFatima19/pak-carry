import React, { useState } from "react";

const Welcome = () => {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Form Area */}
      <div className="w-1/2 p-12 flex flex-col justify-center bg-white">
        {/* Header */}
        <div className="mb-8 flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#0ac6ae] rounded flex items-center justify-center text-white font-bold text-xl">
            &#x25A3;
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0ac6ae]">
              Welcome to PakCarry
            </h1>
            <p className="text-gray-600">
              Connect with travelers to send packages across Pakistan
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 mb-6 border-b border-gray-300">
          <button
            className={`pb-2 font-semibold ${
              activeTab === "login"
                ? "border-b-4 border-[#0ac6ae] text-[#0ac6ae]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`pb-2 font-semibold ${
              activeTab === "register"
                ? "border-b-4 border-[#0ac6ae] text-[#0ac6ae]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* Form */}
        {activeTab === "register" ? (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              placeholder="+92 300 1234567"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Karachi, Lahore, Islamabad"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="traveler" />
              <label htmlFor="traveler" className="text-gray-700">
                I want to be a traveler and deliver packages
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0ac6ae] text-white py-3 rounded hover:bg-[#089f8d] transition"
            >
              Create Account
            </button>
            <div className="text-center mt-4">
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-[#0ac6ae] underline"
                >
                  Login
                </button>
              </p>
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="mt-2 text-gray-600 underline"
              >
                Back to Home
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <button
              type="submit"
              className="w-full bg-[#0ac6ae] text-white py-3 rounded hover:bg-[#089f8d] transition"
            >
              Login
            </button>
            <div className="text-center mt-4">
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("register")}
                  className="text-[#0ac6ae] underline"
                >
                  Register
                </button>
              </p>
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="mt-2 text-gray-600 underline"
              >
                Back to Home
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Right Section - Marketing Panel */}
      <div className="w-1/2 bg-[#0ac6ae] text-white p-12 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">
          Pakistan's First P2P Package Delivery Platform
        </h2>
        <p className="text-lg">
          Connect with verified travelers to send packages across cities at
          affordable rates. Safe, secure, and efficient delivery solution.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
