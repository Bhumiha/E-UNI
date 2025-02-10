import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex justify-between items-center p-4 border-b">
    <Link to="/" className="text-xl font-bold">E-UNI</Link>
    <nav className="flex gap-4">
      <Link to="/about" className="hover:text-blue-600">About</Link>
      <Link to="/services" className="hover:text-blue-600">Services</Link>
      <Link to="/signin" className="hover:text-blue-600">Sign In</Link>
    </nav>
  </header>
);

export default Header;
