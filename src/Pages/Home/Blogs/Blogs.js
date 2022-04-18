import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog-container container">
      <div className="single-container">
        <div className="single">
          <h2>Authentication</h2>
          <p>
            <CheckCircleIcon height={20}></CheckCircleIcon> Authentication
            verifies who the user is.{" "}
          </p>
          <p><CheckCircleIcon height={20}/>Authentication is the first step of a good identity </p>
          <p><CheckCircleIcon height={20}/>Authentication is visible to and partially changeable by the user.</p>
          <p><CheckCircleIcon height={20} />Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
        </div>
        <div className="vs">
          <h1>VS</h1>
        </div>
        <div className="single">
          <h2>Authorization</h2>
          <p>
            <CheckCircleIcon height={20}></CheckCircleIcon>Authorization
            determines what resources a user can access.
          </p>
          <p><CheckCircleIcon height={20}/>Authorization always takes place after authentication.</p>
          <p><CheckCircleIcon height={20}/>Authorization isn’t visible to or changeable by the user.</p>
          <p><CheckCircleIcon height={20}/>Authorization works through settings that are implemented and maintained by the organization.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
