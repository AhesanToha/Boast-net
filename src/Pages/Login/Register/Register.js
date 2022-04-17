import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(7);
    toast("UserRegistered");
  };
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="register">
          <input type="text" name="name" id="" placeholder="Name" required />
          <input
            type="email"
            name="email"
            id=" "
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <br />
          <input type="submit" value="register" />
          <br />
        </div>
        <p>Already have an account? <Link className="text-decoration-none" to={'/login'}>Login</Link></p>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
