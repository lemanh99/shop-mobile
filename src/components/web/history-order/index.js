import { Card, Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../actions/orderAction";

const HistoryOrder = (props) => {
  const auth = useSelector((state) => state.auth);
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  console.log(orders);
  useEffect(() => {
    if (auth.user._id) {
      dispatch(getOrderById(auth.user._id));
    }
  }, [auth.user._id]);

  let order_list = [];
  orders.map((order, index) => {
    const status = order.orderStatus.find(
      (status) => status.isCompleted === true
    );
    order.productDetail.map((product) => {
      var data = {
        name: product.productId ? product.productId.name : null,
        price: product.payablePrice,
        quantity: product.purchasedQty,
        paymentStatus: order.paymentStatus,
        orderStatus: status.type,
      };
      order_list.push(data);
    });
  });
  console.log(order_list);

  return (
    <div>
      <Grid container className="shopping_cart">
        <Grid item md={2} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <div className="spec ">
            <h3>My Account</h3>
            <div className="ser-t">
              <b />
              <span>
                <i />
              </span>
              <b className="line" />
            </div>
          </div>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className="price_details_bk"
            >
              <Card>
                <span className="title">My Account</span>
                <div class="_2twTWD">
                  <div class="_3xFQAD">
                    <div class="hJYgKM">
                      <div class="_10vVqD">
                        <Link to="/my-account">
                          <div>
                            <span>Setting account</span>
                          </div>
                        </Link>
                      </div>
                      <span>
                        <div class="tnAu1u">
                          <span></span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="_3xFQAD">
                    <div class="hJYgKM">
                      <div class="_10vVqD">
                        <Link to="/history">
                          <div>
                            <span>History</span>
                          </div>
                        </Link>
                      </div>
                      <span>
                        <div class="tnAu1u">
                          <span></span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="_3xFQAD">
                    <div class="hJYgKM">
                      <div class="_10vVqD">
                        <Link to="/change-password">
                          <div>
                            <span>Change Password</span>
                          </div>
                        </Link>
                      </div>
                      <span>
                        <div class="tnAu1u">
                          <span></span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Paper>
                <h3 className="_1fM65H _2RMAtd">
                  <span className="_1_m52b">History Order</span>
                </h3>
                <table className="table ">
                  <tbody>
                    <tr>
                      <th className="t-head head-it ">Products</th>
                      <th className="t-head">Price</th>

                      <th className="t-head">Quantity</th>
                      <th className="t-head">Status</th>
                      <th className="t-head">Payment Status</th>
                    </tr>
                    {order_list.map((order, index) => {
                      return (
                        <tr className="cross1" key={index}>
                          <td className="t-data">{order.name}</td>
                          <td className="t-data">{order.price}</td>
                          <td className="t-data">{order.quantity}</td>

                          <td className="t-data">{order.orderStatus}</td>
                          <td className="t-data">{order.paymentStatus}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid> */}
      </Grid>
    </div>
  );
};

export default HistoryOrder;
