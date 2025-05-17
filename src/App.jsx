import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Login from "./components/ui/Login";

function App() {
  return (
    <>
      <Router>
        {/* {window.location.href === "/login" && <Navbar />} */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/loginpage" element={<SignIn />} /> */}
          {/* <Route path="/profile" element={<Dashboard />} /> */}
          {/* <Route path="/faq" element={<FaqSection />} /> */}
          {/* <Route path="/profile-dashboard" element={<ProfileDashboard />} /> */}
        </Routes>
        {/* {!window.location.href === "/login" && <Footer />} */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
