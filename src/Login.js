import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    if (showSuccessAlert) {
      window.location.href = "/";
    }
  }, [showSuccessAlert]);

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
      }).then((result) => {
        if (result.isConfirmed) {
          setShowSuccessAlert(true);
        }
      });

      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form-login" onSubmit={handleSubmit}>
          <label htmlFor="email">email :</label>
          <input
            value={email}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">password :</label>
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
      </div>
    </>
  );
};

export default Login;
