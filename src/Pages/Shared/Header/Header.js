import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import brandLogo from "../../../images/brandlogo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header>
      <nav className="header container">
        <div>
          <Link to={"/"}>
            <img height={40} src={brandLogo} alt="" />
          </Link>
        </div>

        <div className="nav-link">
          <CustomLink to="/home">HOME</CustomLink>
          <CustomLink to="/blogs">BLOGS</CustomLink>
          <CustomLink to="/about">ABOUT ME</CustomLink>
          {user ? (
            <Link to={'/'} onClick={handleSignOut} className='signout'>SIGN OUT</Link>
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
