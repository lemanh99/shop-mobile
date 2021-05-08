import React, { useState } from "react";
import Paypal from "./component/Paypal";

const Payment = () => {
  const [checkout, setCheckOut] = useState(false);
  return (
    <div>
      {checkout ? (
        <Paypal />
      ) : (
        <button style={{margin: "150px"}}
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default Payment;
