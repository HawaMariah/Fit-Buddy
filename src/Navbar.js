import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1>FitBuddy</h1>
      <div className="nav-group">
        <div className="nav home">Home</div>
        <div className="nav login">Login</div>
        <div className="nav signup">Signup</div>
      </div>
    </div>
  );
}

export default Navbar;
