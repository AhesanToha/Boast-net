import React, { useRef, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);

    event.preventDefault();
    console.log(7);
  };
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="login">
          <input
            type="email"
            name="email"
            id=""
            ref={emailRef}
            placeholder="Email"
            required
          />
          <br />
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <input type="submit" value="Login" />
          <br />
        </div>
      </form>

      <Toaster></Toaster>
      <p>
        Haven't Account?{" "}
        <Link className="text-decoration-none" to={"/register"}>
          Please Register
        </Link>
      </p>
      <p className="text-center" style={{color:'red'}}>{error?.message}</p>
    </div>
  );
};

export default Login;
