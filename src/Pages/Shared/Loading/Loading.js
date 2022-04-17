import React from "react";
import './Loading.css'
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center loading-spinner">
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default Loading;
