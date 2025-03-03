import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaIdCard } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const SignIn = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

 

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(value);
  };

  const validateForm = () => {
    let newErrors = {};

    if (isSignUp) {
      if (!name.trim()) newErrors.name = "Name is required";
      else if (!/^[A-Za-z\s]+$/.test(name)) newErrors.name = "Name must contain only letters and spaces";

      if (!cnic.trim()) newErrors.cnic = "CNIC is required";
      else if (!/^\d{13}$/.test(cnic)) newErrors.cnic = "CNIC must be of 13-digit";
    }

    if (!username.trim()) newErrors.username = "Username is required";
    else if (username.length < 3) newErrors.username = "Username must be at least 3 characters";

    if (!validatePassword(password)) {
      newErrors.password = "Password should be of atleast 8 digits, one should be uppercase,one should be number, one should be special character";
    }

    if (isSignUp && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(isSignUp ? "Sign Up successful" : "Login successful");
      navigate("/profile");
    } else {
      console.log("Validation errors", errors);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white w-[90%] sm:w-[400px] p-6 rounded-lg relative shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={onClose}>
          <IoClose size={22} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        <motion.form 
          onSubmit={handleSubmit} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          {isSignUp && (
            <>
              <div className="mb-2 relative">
                <input
                  type="text"
                  className="w-full p-2 pr-10 border border-[#0ac6ae] rounded-lg focus:ring-[#0ac6ae] focus:border-[#0ac6ae] focus:outline-[#0ac6ae]"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FaUser className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-400" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-2 relative">
                <input
                  type="text"
                  className="w-full p-2 pr-10 border border-[#0ac6ae] rounded-lg focus:ring-[#0ac6ae] focus:border-[#0ac6ae] focus:outline-[#0ac6ae]"
                  placeholder="Enter CNIC without dashes"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                />
                <FaIdCard className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-400" />
                {errors.cnic && <p className="text-red-500 text-sm">{errors.cnic}</p>}
              </div>
            </>
          )}
          <div className="mb-2 relative">
            <input
              type="text"
              className="w-full p-2 pr-10 border border-[#0ac6ae] rounded-lg focus:ring-[#0ac6ae] focus:border-[#0ac6ae] focus:outline-[#0ac6ae]"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-400" />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>
          <div className="mb-2 relative">
            <input
              type="password"
              className="w-full p-2 pr-10 border border-[#0ac6ae] rounded-lg focus:ring-[#0ac6ae] focus:border-[#0ac6ae] focus:outline-[#0ac6ae]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-400" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          {isSignUp && (
            <div className="mb-2 relative">
              <input
                type="password"
                className="w-full p-2 pr-10 border border-[#0ac6ae] rounded-lg focus:ring-[#0ac6ae] focus:border-[#0ac6ae] focus:outline-[#0ac6ae]"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FaLock className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-400" />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#0ac6ae] text-white py-2 rounded-lg font-medium hover:bg-[#089f8d] transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </motion.form>

        <p className="text-center mt-4 cursor-pointer hover:underline text-[#0ac6ae]" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </p>
        
        <button className="w-full mt-4 bg-transparent py-2 rounded-lg font-medium transition"style={{color:'#0ac6ae'}} onClick={() => navigate("/")}>Back to Home</button>
      </motion.div>
    </motion.div>
  );
};

export default SignIn;
