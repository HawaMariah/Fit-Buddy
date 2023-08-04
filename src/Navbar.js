import React from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
  return (
    <div className="navbar">
      <h1>Fit<span className="span-f">Buddy +</span></h1>
      <div className="nav-group">
      <Link to="/" className="nav home">Home</Link>
        <Link to="/login" className="nav login">Login</Link>
        <Link to="/signup" className="nav signup">Signup</Link>
      </div>
    </div>
  );
}

export default Navbar;
