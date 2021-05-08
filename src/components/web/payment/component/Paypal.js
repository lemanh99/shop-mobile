import React, { useRef, useEffect } from "react";

export default function Paypal(props) {
  const paypal = useRef();
  const {totalMoney, handlePaymentPaypalSuccess, handlePaymentPaypalFailed} = props;                   
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Buy mobile",
                amount: {
                  currency_code: "CAD",
                  value: Math.round(totalMoney),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          handlePaymentPaypalSuccess()
        },
        onError: (err) => {
          handlePaymentPaypalFailed()
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div >
      <div ref={paypal}></div>
    </div>
  );
}