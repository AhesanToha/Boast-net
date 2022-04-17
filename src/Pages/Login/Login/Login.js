import React from "react";
import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="login">
          <input type="text" name="name" id="" placeholder="First Name" /><br />
          <input type="email" name="email" id=" " placeholder="Email" /><br />
          <input type="button" value="Login" />
          <br />
        </div>
      </form>
    </div>
  );
};

export default Login;
