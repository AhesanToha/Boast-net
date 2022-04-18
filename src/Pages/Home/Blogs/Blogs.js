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

      <div className="single-container">
        <div className="single">
          <h2>*Why I use firebase?</h2>
          <p style={{margin:'0 5px', color:'#baeaf2'}}>Many characteristics distinguish Google Firebase as the go-to backend development tool for web and mobile projects. It decreases the amount of effort and time spent on development. It's also an excellent prototyping tool. Firebase is a simple, lightweight, user-friendly, and well-known platform.</p>
          <h2>*Firebase Alternatives</h2>
          <p><CheckCircleIcon height={20}/>Parse</p>
          <p><CheckCircleIcon height={20}/>Back4App</p>
          <p><CheckCircleIcon height={20}/>Kuzzle</p>
          <p><CheckCircleIcon height={20}/>Flutter</p>
        </div>
      </div>
      <div className="single-container">
        <div className="single">
          <h2>*Firebase Provides⬇️</h2>
          <p><CheckCircleIcon height={20}/>Analytics</p>
          <p><CheckCircleIcon height={20}/>Authentication </p>
          <p><CheckCircleIcon height={20}/>Cloud messaging</p>
          <p><CheckCircleIcon height={20}/>Realtime database</p>
          <p><CheckCircleIcon height={20}/>Crashlytics <span className="ps-2 text-danger" >ETC.....</span> </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
