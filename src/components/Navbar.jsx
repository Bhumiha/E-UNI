import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-pink-50 shadow-md rounded-xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center rounded-2xl">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/logo.jpg" alt="E-UNI Logo" className="h-12 w-auto" />
          <span className="text-black text-.5xl font-semibold">E-UNI</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300">Home</Link>
          <Link to="/about" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300">About</Link>
          <Link to="/services" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300">Services</Link>
          <Link to="/signin" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300">Sign In</Link>
          <Link to="/signup" className="text-black text-lg font-semibold hover:bg-gray-100 transition duration-300">Sign Up</Link>
        </div>

        {/* Mobile Menu (for small screens) */}
        <div className="md:hidden">
          <button className="text-white text-2xl">
            <i className="fas fa-bars"></i> {/* Optional: You can add a hamburger icon here */}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
