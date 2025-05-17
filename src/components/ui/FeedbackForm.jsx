import React, { useState } from "react";
import { toast } from "react-hot-toast";
const FeedbackForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [users, setUsers] = useState([]);
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserData({ ...userData, [name]: value });
  }
  function submitHandler(e) {
    e.preventDefault();
    if (userData.name && userData.email && userData.feedback) {
      setUsers({ ...users, userData });
      console.log("submited");
      setUserData({
        name: "",
        email: "",
        feedback: "",
      });
      toast.success("Thanks for your Feedback");
    } else {
      toast.error("Please fill all the fields", {
        id: "empty-form",
      });
    }
  }
  return (
    <div>
      <section class="body-font relative">
        <div class="container px-5 py-16 mx-auto mt-16">
          <div class="flex flex-col text-center w-full mb-12">
            <h2
              className="text-4xl text-center mt-0 md:mt-10 lg:mt-10"
              style={{ fontWeight: "700" }}
            >
              We Value Your Feedback
            </h2>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <form onSubmit={submitHandler} class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={changeHandler}
                    value={userData.name}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#0ac6ae] focus:bg-white focus:ring-2 focus:ring-[#0ac6ae] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={changeHandler}
                    value={userData.email}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#0ac6ae] focus:bg-white focus:ring-2 focus:ring-[#0ac6ae] text-base outline-none py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="feedback" class="leading-7 text-sm ">
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    value={userData.feedback}
                    onChange={changeHandler}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#0ac6ae] focus:bg-white focus:ring-2 focus:ring-[#0ac6ae] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-300 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  type="submit"
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  style={{ backgroundColor: " #0ac6ae" }}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FeedbackForm;
