import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please fill in both email and password fields.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have successfully logged in.",
      }).then(() => {
        setIsConfirmed(true); // Set the isConfirmed state to true after SweetAlert is confirmed
      });

      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="form-container">
        {isConfirmed ? (
          <div className="go-back-container">
            <Link className="go-back" to="/">Go Back</Link>
          </div>
        ) : (
          <form className="form-login" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              value={password}
              type="password"
              placeholder="******"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
