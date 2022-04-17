import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const {serviceId} = useParams();
  return (
    <div>
        <h1>clicked for {serviceId}</h1>

      <Link to={"/checkout"}>
        <button className="checkout-btn">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
