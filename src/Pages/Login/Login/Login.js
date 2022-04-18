import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import Social from "../Social/Social";
import "./Login.css";

const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleLogin = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);

    event.preventDefault();
    console.log(7);
  };
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }


  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Email Sent", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: " #48dbfb",
          boxShadow: "0 5px 15px rgba(164, 199, 231, 0.829)",
          borderBottom: "3px solid cyan",
          margin: "50px 30px",
        },
      });
    } else {
      toast.error("Please enter you email address", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: " #48dbfb",
          boxShadow: "0 5px 15px rgba(164, 199, 231, 0.829)",
          borderBottom: "3px solid cyan",
          margin: "50px 30px",
        },
      });
    }
  };
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
        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
      </p>
      <p className="text-center" style={{ color: "red" }}>
        {error?.message}
      </p>
      <Social></Social>
    </div>
  );
};

export default Login;
