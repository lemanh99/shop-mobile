import React, { Component, useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core/";
import Summarycart from "./summarycart";
import { connect, useDispatch, useSelector } from "react-redux";
import { productQuantity, clearProduct } from "../../../actions/cartQuantity";
import { Link, Redirect } from "react-router-dom";
import { addOrder } from "../../../actions/orderAction";

const Checkout = () => {
  const auth = useSelector((state) => state.auth);
  const cartProps = useSelector((state) => state.cartState);
  const orderProps = useSelector((state) => state.order);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  // const [step1, setStep1] = useState(false);
  // const [step2, setStep2] = useState(false);
  // const [step3, setStep3] = useState(false);


  useEffect(() => {
    if (auth) {
      setFirstName(auth.user.firstName);
      setLastName(auth.user.lastName);
      setEmail(auth.user.email);
      setUsername(auth.user.username);
      setPhoneNumber(auth.user.phoneNumber);
      setAddress(auth.user.address);
    }
  }, [auth]);

  const handleSubmitOrder = ()=>{
    dispatch(addOrder())
  }
  if(!cartProps){
    return <Redirect to={`/`} />;
  }
  if(orderProps.addOrder){
    return<Redirect to={`/history`} />
  }
  if (!auth.authenticate ) {
    return <Redirect to={`/login`} />;
  }


  return (
    <div>
      <header className="header1 header1--white-mode">
        <div className="header1-item header1-item--checkout-promise display--none@mobile">
          <div className="checkout-promise-item checkout-promise-item--replacement-guarantee">
            100% Replacement Guarantee
          </div>
          <div className="checkout-promise-item checkout-promise-item--genuine-products">
            100% Genuine Products
          </div>
          <div className="checkout-promise-item checkout-promise-item--secure-payments">
            Secure Payments
          </div>
        </div>
      </header>
      <Grid container>
        <Grid item md={2} xl={2} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={12} xl={8} lg={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} xl={8} lg={8}>
              <Paper style={{ marginTop: "75px" }}>
                <h3 className="_1fM65H _2RMAtd">
                  <span className="_1Tmvyj">1</span>
                  <span className="_1_m52b">Delivery Address</span>
                </h3>
                <Grid container spacing={4} className="address_bk_checkout ">
                  <Grid
                    className="address_field_bk"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    xl={6}
                    lg={6}
                  >
                    <input
                      type="text"
                      className="login-phone__input input"
                      data-test-id="phone-no-text-box"
                      placeholder="FirstName"
                      value={firstName}
                      disabled
                    />
                  </Grid>
                  <Grid
                    className="address_field_bk"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    xl={6}
                    lg={6}
                  >
                    <input
                      type="text"
                      className="login-phone__input input"
                      data-test-id="phone-no-text-box"
                      placeholder="Last Name"
                      value={lastName}
                      disabled
                    />
                  </Grid>

                  <Grid
                    className="address_field_bk"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    xl={6}
                    lg={6}
                  >
                    <input
                      type="text"
                      className="address_field_bk__input input"
                      data-test-id="phone-no-text-box"
                      placeholder="Username"
                      value={username}
                      disabled
                    />
                  </Grid>
                  <Grid
                    className="address_field_bk"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    xl={6}
                    lg={6}
                  >
                    <input
                      type="text"
                      className="address_field_bk__input input"
                      data-test-id="phone-no-text-box"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      disabled
                    />
                  </Grid>
                  <Grid
                    className="address_field_bk"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    xl={12}
                    lg={12}
                  >
                    <input
                      type="email"
                      className="login-phone__input input"
                      data-test-id="phone-no-text-box"
                      placeholder="Email"
                      value={email}
                      disabled
                    />
                  </Grid>

                  <Grid
                    className="address_field_bk"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    xl={12}
                    lg={12}
                  >
                    <textarea
                      className="address_field_bk__input input"
                      data-test-id="phone-no-text-box"
                      placeholder="Address(Area and Street)"
                      value={address}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div class="_1qbqu2 uK6xOa">
                      {/* <button class="_2AkmmA EqjTfe _7UHT_c" type="button">
                        Confirm
                      </button> */}
                      <Link
                        to={"/my-account"}
                        style={{ marginLeft: "5px" }}
                        class="_2AkmmA EqjTfe _7UHT_c"
                        type="button"
                      >
                        Change Information
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Paper>

              {/* 2nd end block address */}
              <Summarycart cartProps={cartProps} user = {auth.user} handleSubmitOrder = {handleSubmitOrder}/>
            </Grid>

            <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
              <Paper style={{ marginTop: "75px" }}>
                <span className="summary_price_cart_details">
                  Price details
                </span>
                <div className="_2twTWD">
                  <div className="hJYgKM">
                    <div className="_10vVqD">Price ({cartProps.cart} item)</div>
                    <span> ${Math.round(cartProps.cartPrice)}</span>
                  </div>
                  <div className="hJYgKM">
                    <div className="_10vVqD">Delivery Fee</div>
                    <span>
                      <span className="_27kB8M _3Oa-sk">Free</span>
                    </span>
                  </div>
                  <div className="_3xFQAD">
                    <div className="hJYgKM">
                      <div className="_10vVqD">Total Amount</div>
                      <span>
                        <div className="tnAu1u">
                          <span> ${Math.round(cartProps.cartPrice)}</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={2} md={2} xl={2} lg={2}></Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
  auth: state.auth,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Checkout
);
