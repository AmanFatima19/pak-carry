import React, { useState } from "react";
import { motion } from "framer-motion";
import SignIn from "./SignIn"; // Importing the Sign-In Component

function HeroSection() {
  const [isSignInOpen, setSignInOpen] = useState(false);

  return (
    <div
      className="relativew-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 opacity-50"></div>

      <div className="relative top-18 text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          SEND PACKAGES ACROSS PAKISTAN
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-medium mt-2"
        >
          SAFELY & AFFORDABLY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mt-4"
        >
          Connect with verified travelers for Urgent delivery of documents,<br /> luggage and forgotten items around Pakistan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6"
        >
          <button
            onClick={() => setSignInOpen(true)}
            className="bg-[#0ac6ae] text-white px-8 py-3 text-lg font-semibold hover:bg-[#089f8d] transition underline mt-6"style={{borderRadius:'10px'}}
          >
            Login/Register
          </button>
        </motion.div>
      </div>

      <SignIn isOpen={isSignInOpen} onClose={() => setSignInOpen(false)} />
    </div>
  );
}

export default HeroSection;
