import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const {id,  name, description, price, img } = service;
  const navigate = useNavigate();
  return (
    <div className="text-center mb-4 service">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h6>Price: $ {price}</h6>
      <p>{description}</p>
      <button onClick={() => navigate(`/service/${id}`)} className="mb-4">
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
