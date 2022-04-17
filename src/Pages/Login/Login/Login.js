import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="login">
          <input type="email" name="email" id="" placeholder="Email" required />
          <br />
          <input
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
      <p>
        Haven't Account? <Link className="text-decoration-none" to={"/register"}>Please Register</Link>
      </p>
    </div>
  );
};

export default Login;
