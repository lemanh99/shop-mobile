import React, { Component } from "react";
import {
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import { generatePublicUrl } from "../../../urlConfig";

const Summarycart = (props) => {
  const { cartProps, user, handleSubmitOrder } = props;

  let productsInCart = [];

  const  handleAddDay = ( days)=> {
    var newDate = new Date(Date.now() + days*24*60*60*1000);
    let today = newDate.toISOString().slice(0, 10)
    return today;
  }
  Object.keys(cartProps.products).forEach(function (item) {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }
  });
  return (
    <div>
      <Paper style={{ marginTop: "3rem" }}>
        <div className="checkout-step checkout-step--active">
          <h3 className="_1fM65H _2RMAtd">
            <span className="_1Tmvyj">2</span>
            <span class="_1_m52b">Order Summary</span>
          </h3>
        </div>
        <Grid container className="_30BGxP">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            xl={12}
            lg={12}
            className="summary_order_list"
          >
            {productsInCart.map((product, index) => {
              return (
                <Grid container>
                  <Grid item xs={2} sm={2} md={2} xl={2} lg={2}>
                    <div className="_3BTv9X" style={{ height: 94, width: 112 }}>
                      <img
                        className="_1Nyybr  _30XEf0"
                        alt="rukim"
                        src={
                          product.productPictures
                            ? generatePublicUrl(product.productPictures[0].img)
                            : "/images/phone.png"
                        }
                        width="112"
                        height="94"
                      />
                    </div>
                    <div className="_3RkJty">
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} xl={6} lg={6}>
                    <div className="_3vIvU_bk">
                      <div className="title">{product.name}</div>
                      <div className="seller_bk">
                        <span>Quantity: {product.quantity_buy}</span>
                      </div>
                      <div className="price_bk">
                        <h5>${product.price_discount}</h5>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} xl={4} lg={4}>
                    <div className="_3aZm8l">
                      <div className="bzD9az">
                        Delivery on {handleAddDay(3)}|{" "}
                        <span className="_3ACFa6">
                          <span className="_3o5jSD">Free</span>
                        </span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
            <Grid container className="order_confirm_email">
              <Grid item xs={12} sm={12} md={8} xl={8} lg={8}>
                <div>
                  <h5>
                    Information order detail will be sent to{" "}
                    <b>{user.email}</b>
                  </h5>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} xl={4} lg={4}>
                <span id="to-payment">
                  {/* <button className="_continue">Confirm</button> */}
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper style={{ marginTop: "1.4rem" }}>
        <div className="checkout-step checkout-step--active">
          <h3 className="_1fM65H _2RMAtd">
            <span className="_1Tmvyj">3</span>
            <span className="_1_m52b">Payment Options</span>
          </h3>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5>1. Credit / Debit / ATM Card</h5>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="card_details_parent">
              <div className="credit_card_details">
                <Grid container>
                  <Grid
                    className="address_field_bk"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    xl={8}
                    lg={8}
                  >
                    <div className="panel panel-default credit-card-box">
                      <div className="panel-heading display-table">
                        <div className="row display-tr">
                          <h3 className="panel-title display-td">
                            Payment Details
                          </h3>
                          <div className="display-td">
                            {/* <img
                              className=""
                              src="/images/card-icon.png"
                              width="15"
                              height="15"
                              alt="accept"
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className="panel-body">
                        <form id="payment-form">
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="form-group">
                                <label htmlFor="cardNumber">CARD NUMBER</label>
                                <div className="input-group">
                                  <input
                                    type="tel"
                                    className="form-control"
                                    name="cardNumber"
                                    placeholder="Valid Card Number"
                                    autoComplete="cc-number"
                                    required
                                    autofocus
                                  />
                                  <span className="input-group-addon">
                                    <i className="fa fa-credit-card" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-7 col-md-7">
                              <div className="form-group">
                                <label htmlFor="cardExpiry">
                                  <span className="hidden-xs">EXPIRATION</span>
                                  <span className="visible-xs-inline">
                                    EXP
                                  </span>{" "}
                                  DATE
                                </label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  name="cardExpiry"
                                  placeholder="MM / YY"
                                  autoComplete="cc-exp"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-xs-5 col-md-5 pull-right">
                              <div className="form-group">
                                <label htmlFor="cardCVC">CV CODE</label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  name="cardCVC"
                                  placeholder="CVC"
                                  autoComplete="cc-csc"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="form-group">
                                <label htmlFor="couponCode">COUPON CODE</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="couponCode"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-12">
                              <button
                                className="btn btn-success btn-lg btn-block"
                                type="submit"
                              >
                                Pay ${Math.round(cartProps.cartPrice)}
                              </button>
                            </div>
                          </div>
                          <div className="row" style={{ display: "none" }}>
                            <div className="col-xs-12">
                              <p className="payment-errors" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h5>2. Cash on Delivery</h5>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="card_details_parent">
              <div className="clearfix">
                <div
                  className="payment-confirm-tip"
                  data-spm-anchor-id="a2a0e.payment_page.0.i6.28766af7uWKlE7"
                >
                  You can pay in cash to our courier when you receive the goods
                  at your doorstep.
                </div>
              </div>
              <div id="to-payment" >
                <button className="_continue" style={{marginBottom:"5px"}} onClick={handleSubmitOrder}>confirm order</button>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Paper>
      <div style={{marginTop:"20px"}}></div>
    </div>
    
  );
};

export default Summarycart;
