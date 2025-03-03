import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen" style={{
        backgroundImage: "url('contact.jpg')",
        height:'105vh',
        backgroundSize: "cover", 
        backgroundPosition: "start",
        backgroundRepeat: "no-repeat" 
      }}>
      <form className="relative top-12 bg-white px-6 py-4 shadow-lg rounded-md w-[700px]">
        <label className="block mb-1 text-gray-700">Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-[#0ac6ae]"
        />

        <label className="block mb-1 text-gray-700">Phone</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-[#0ac6ae]"
        />

        <label className="block mb-1 text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-[#0ac6ae]"
        />

        <label className="block mb-1 text-gray-700">Message</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-[#0ac6ae]"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full text-white p-2 rounded font-semibold bg-[#0ac6ae]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
