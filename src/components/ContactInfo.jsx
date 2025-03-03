import { div } from "framer-motion/client";
import React from "react";

function ContactInfo() {
  return (
    <>
      <section className="text-gray-600 body-font relative top-20">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-6 flex items-end justify-start relative">
           
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13603.879124642775!2d74.27105808466195!3d31.497268981379234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904aef31d9711%3A0x6a7a0b1a1f24e8b0!2sAllama%20Iqbal%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="bg-white relative top-5 flex flex-wrap py-2 rounded shadow-md w-[90%] mx-auto">
              <div className="lg:w-1/2 px-6">
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  ADDRESS
                </h2>
                <p className="mt-1">Allam Iqbal Town,Lahore</p>
              </div>
              <div className="lg:w-1/2 px-6 lg:mt-0">
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  EMAIL
                </h2>
                <a className="mt-1" style={{ color: "#0ac6ae" }}>
                  info@pakcarry.com
                </a>
                <h2
                  className="mt-4"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  PHONE
                </h2>
                <p className="mt-2">+92 3345567864</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pl-20">
            <h2 className="text-lg mb-3 font-medium title-font text-black">
              Contact Us
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:outline-[#0ac6ae] text-gray-700 py-1 px-3"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:outline-[#0ac6ae] py-1 px-3"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:outline-[#0ac6ae] h-32 text-base text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-[#0ac6ae] border-0 py-2 px-5 rounded text-lg">
              <a href="/" style={{ color: "white" }}>
                Send
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;
