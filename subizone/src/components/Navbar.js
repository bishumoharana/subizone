import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/videos">Videos</Link>
      <Link to="/files">Files</Link>
      <Link to="/others">Others</Link>
    </nav>
  );
}

export default Navbar;
