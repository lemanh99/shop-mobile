import { Card, Grid, Paper } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MyAccount = (props) => {
  const auth = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

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
  if (!auth.authenticate) {
    return <Redirect to={`/login`} />;
  }
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
                  <span className="_1_m52b">Information Account</span>
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
                      onChange={(e) => setFirstName(e.target.value)}
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
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
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
                      onChange={(e) => setPhoneNumber(e.target.value)}
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
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div class="_1qbqu2 uK6xOa">
                      <button class="_2AkmmA EqjTfe _7UHT_c" type="button">
                        Change Information
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

export default MyAccount;
