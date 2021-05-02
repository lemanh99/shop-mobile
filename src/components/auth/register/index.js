import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../../../actions/authAction";

const Register = () => {
  const auth = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      username,
      password,
      phoneNumber,
      address,
    };
    dispatch(signup(user));
    setUsername("");
    setPhoneNumber("");
    setAddress("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    // setMessage("Register a new customer successfully!");
  };
  return (
    <div>
      <div className="banner-top">
        <div className="container">
          <h3>Register</h3>
          <h4>
            <a href="/">Home</a>
            <label>/</label>Register
          </h4>
          <div className="clearfix"> </div>
        </div>
      </div>
      {/*login*/}
      <div className="login">
        <div className="main-agileits">
          <div className="form-w3agile form1">
            <h3>Register</h3>
            <form
              method="post"
              enctype="multipart/form-data"
              onSubmit={handleRegister}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="key">
                    <i className="fa fa-user" aria-hidden="true" />
                    <input
                      style={{ maxWidth: "120px" }}
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="key">
                    <i className="fa fa-user" aria-hidden="true" />
                    <input
                      style={{ maxWidth: "120px" }}
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <div className="clearfix" />
                  </div>
                </div>
              </div>

              <div className="key">
                <i className="fa fa-user" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Username"
                  name="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className="clearfix" />
              </div>
              <div className="key">
                <i
                  className="fa fa-envelope"
                  aria-hidden="true"
                  style={{ maxWidth: "38px" }}
                />

                <input
                  type="text"
                  placeholder="Email"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="clearfix" />
              </div>
              <div className="key">
                <i className="fa fa-lock" aria-hidden="true" />
                <input
                  type="password"
                  name="Password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="clearfix" />
              </div>
              <div className="key">
                <i className="fa fa-lock" aria-hidden="true" />
                <input
                  type="password"
                  name="Confirm Password"
                  placeholder="Confirm Password"
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <div className="clearfix" />
              </div>
              <div style={{marginTop:"15px"}}>
                <div className="_3VM3wx">
                  By continuing, you agree to big mobile shop's
                  <Link
                    className="_1eS5je"
                    target="_blank"
                    to="/term-and-condition"
                  >
                    Terms of Use
                  </Link>{" "}
                  and
                  <Link
                    className="_1eS5je"
                    target="_blank"
                    to="/privacy-and-policy"
                  >
                    {" "}
                    Privacy Policy
                  </Link>
                  .
                </div>
              </div>
              <input type="submit" defaultValue="REGISTER" value="REGISTER" />
            </form>
          </div>
          <div className="forg" style={{ marginTop: "20px" }}>
            <a className="forg-right" href="/login">
              I already have an account?
            </a>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
