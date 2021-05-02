import { Card, Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const ChangePassword = (props) => {
    const [password, setPassword] = useState("");
    const [old_password, setOldPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

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
                  <span className="_1_m52b">Change Password</span>
                </h3>
                <Grid container spacing={4} className="address_bk_checkout ">
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
                      type="password"
                      className="login-phone__input input"
                      data-test-id="phone-no-text-box"
                      placeholder="Enter old password"
                      value={old_password}
                      onChange={(e) => setOldPassword(e.target.value)}
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
                      type="password"
                      className="login-phone__input input"
                      data-test-id="phone-no-text-box"
                      placeholder="Enter new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      type="password"
                      className="login-phone__input input"
                      data-test-id="phone-no-text-box"
                      placeholder="Enter new password"
                      value={confirm_password}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div class="_1qbqu2 uK6xOa">
                      <button class="_2AkmmA EqjTfe _7UHT_c" type="button">
                        Confirm
                      </button>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid> */}
      </Grid>
    </div>
  );
};

export default ChangePassword;
