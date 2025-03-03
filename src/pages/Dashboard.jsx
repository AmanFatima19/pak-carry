import React, { useState } from "react";
import {
  FaUserCircle,
  FaHome,
  FaHistory,
  FaComment,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <section className="bg-white pb-10">
        <div className="relative">
          <div className="absolute left-5 top-0 text-5xl text-[#0ac6ae] cursor-pointer z-50">
            <FaUserCircle onClick={toggleSidebar} />
          </div>

          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-opacity-40 z-40"
              onClick={toggleSidebar}
            ></div>
          )}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#0ac6ae] shadow-lg transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="flex flex-col pt-6 pr-5">
              <button
                onClick={toggleSidebar}
                className="self-end text-white text-2xl"
              >
                <FaTimes />
              </button>

              <div className="flex flex-col items-center mt-2">
                <FaUserCircle className="text-6xl text-white mb-2" />
                <h2
                  className="font-semibold text-white text-center"
                  style={{ fontSize: "22px" }}
                >
                  User Name
                </h2>
                <button className="mt-2 bg-white px-4 py-2 rounded text-[#0ac6ae]">
                  Edit Profile
                </button>
              </div>

              <nav className="py-2 flex flex-column pl-14">
                <a
                  href="/"
                  className="flex items-center gap-2 pt-2"
                  style={{ color: "white" }}
                >
                  <FaHome />
                  <span>Home</span>
                </a>
                <a
                  href="/history"
                  className="flex items-center gap-2 pt-1"
                  style={{ color: "white" }}
                >
                  <FaHistory />
                  <span>History</span>
                </a>
                <a
                  href="/feedback"
                  className="flex items-center gap-2 pt-1"
                  style={{ color: "white" }}
                >
                  <FaComment />
                  <span>Feedback</span>
                </a>
                <a
                  href="/"
                  className="flex items-center gap-2 pt-1"
                  style={{ color: "white" }}
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-6 w-screen overflow-hidden">
            <img
              src="dashboard.jpg"
              alt="Happy Packing"
              className="w-full h-[70vh] object-cover"
            />
          </div>

          <div className="absolute right-5 top-20">
            <button className="bg-[#0ac6ae] p-3 flex flex-col items-center">
              🛒
              <span className="text-xs mt-1 text-white">New Order</span>
            </button>
            <button className=" bg-[#0ac6ae] p-3 flex flex-col items-center mt-3">
              🧳
              <span className="text-xs mt-1 text-white">New Trip</span>
            </button>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-6 bg-gray-100">
            <h3 className="text-xl font-semibold bg-[#0ac6ae] text-white py-3 px-4 rounded-t-lg text-center">
              My Orders
            </h3>
            <div className="p-4 text-gray-600 text-center">No order found.</div>
          </div>

          <div className="border border-gray-300 rounded-lg p-6 bg-gray-100">
            <h3 className="text-xl font-semibold bg-[#0ac6ae] text-white py-3 px-4 rounded-t-lg text-center">
              My Trips
            </h3>
            <div className="p-4 text-gray-600 text-center">No trip found.</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;