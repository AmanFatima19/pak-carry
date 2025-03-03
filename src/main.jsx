import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback';
import Footer from './components/Footer';
import SignIn from './components/SignIn'
import Dashboard from './pages/Dashboard';
import FaqSection from './components/FaqSection';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/loginpage" element={<SignIn />} />   
          <Route path="/profile" element={<Dashboard />} /> 
          <Route path="/faq" element={<FaqSection />} /> 
          {/* <Route path="/profile-dashboard" element={<ProfileDashboard />} /> */}
  
        </Routes>
        <Footer />
    </Router>
  </StrictMode>
);
