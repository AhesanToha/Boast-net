import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import Social from "../Social/Social";
import "./Register.css";

const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/home");
  }
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="register">
          <input type="text" name="name" id="1" placeholder="Name" required />
          <input
            type="email"
            name="email"
            id="2"
            ref={emailRef}
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            id=""
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <br />
          <input type="submit" value="register" />
          <br />
        </div>
        <p>
          Already have an account?{" "}
          <Link className="text-decoration-none" to={"/login"}>
            Login
          </Link>
        </p>
        <p style={{ color: "red" }}>{error?.message}</p>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
      <Social></Social>
    </div>
  );
};

export default Register;
