import React from "react";
import "./Social.css";
import google from "../../../images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="social-links">
      <p style={{ color: "red" }}>{error?.message}</p>
      <div className="divided-border">
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      <button onClick={() => signInWithGoogle()}>
        <img height={35} src={google} alt="" /> Sign In With Google
      </button>
    </div>
  );
};

export default Social;
