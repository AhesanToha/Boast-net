import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
import { CheckCircleIcon } from "@heroicons/react/solid";

const Service = ({ service }) => {
  const { name, price, img, d1, d2, d3, d4 } = service;
  const navigate = useNavigate();
  return (
    <div className="text-center mb-4 service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <div className="price">
        <h3 style={{ color: "gold" }}>Price: $ {price}</h3>
        <p>/month</p>
      </div>
      <div className="des">
        <p>
          <CheckCircleIcon height={20} />
          {d1}
        </p>
        <p>
          <CheckCircleIcon height={20} />
          {d2}
        </p>
        <p>
          <CheckCircleIcon height={20} />
          {d3}
        </p>
        <p>
          <CheckCircleIcon height={20} />
          {d4}
        </p>
      </div>
      <button onClick={() => navigate("/checkout")} className="mb-4 w-50">
        Purchase 
      </button>
    </div>
  );
};

export default Service;
