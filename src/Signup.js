import React, { useState } from "react";
import Swal from "sweetalert2";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !username.trim() || !password.trim() || !confirmPassword.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please fill in all the fields.",
      });
    } else if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Passwords do not match.",
      });
    } else {
      

      setFirstName("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have successfully signed up.",
      })
    }
  };

  return (
    <>
      <div className="form-containerr">
        <form className="form-signup" onSubmit={handleSignup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            value={firstName}
            type="text"
            placeholder="Enter your first name"
            id="firstName"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="username">Username:</label>
          <input
            value={username}
            type="text"
            placeholder="Enter your username"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            value={password}
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm your password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
