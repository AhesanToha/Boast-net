import React from "react";
import "./Checkout.css";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  const handleToast = () => {
    toast.success("Successfully toasted!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: " #48dbfb",
        boxShadow: "0 5px 15px rgba(164, 199, 231, 0.829)",
        borderBottom: "3px solid cyan",
        margin: "50px 30px",
      },
    });
  };
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form>
        <div className="checkout-name">
          <input type="text" name="fName" id="" placeholder="First Name" />
          <input type="text" name="lName" id="" placeholder="Last Name" />
          <br />
        </div>
        <div className="checkout-info">
          <input type="email" name="email" id=" " placeholder="Email" />
          <br />
          <input type="text" name="address" id="" placeholder="Address" />
          <br />
          <input type="text" name="phone" id="" placeholder="Phone" />
          <br />
          <input
            onClick={() => {
              handleToast();
            }}
            type="button"
            value="Proceed"
          />
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
