import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signin } from "../../../actions/authAction";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if ((auth.error !== "") ) {
      setMessage(auth.error);
    }
    if (auth.block === true && (click === true)) {
      setMessage("The account has been locked");
    }
  }, [auth.block, click]);

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  const handleLogin = (e) => {
    setClick(true);
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(signin(user));
    setEmail("");
    setPassword("");
    // setMessage("Register a new customer successfully!");
  };
  return (
    <div>
      {/*banner*/}
      <div className="banner-top">
        <div className="container" style={{ marginTop: "15px" }}>
          <h3>Login</h3>
          <h4>
            <Link to="/">Home</Link>
            <label>/</label>Login
          </h4>
          <div className="clearfix"> </div>
        </div>
      </div>
      {/*login*/}
      <div className="login">
        <div className="main-agileits">
          <div className="form-w3agile">
            <h3>Login</h3>
            {message ? (
              <div
                style={{
                  marginBottom: "25px",
                  marginTop: "-25px",
                  textAlign: "center",
                }}
              >
                <div className="_3VM3wx" style={{ color: "red" }}>
                  {message}
                </div>
              </div>
            ) : null}

            <form
              method="post"
              enctype="multipart/form-data"
              onSubmit={handleLogin}
            >
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

              <input type="submit" defaultValue="LOGIN" value="LOGIN" />
            </form>
          </div>
          <div className="forg">
            <Link to="#" className="forg-left">
              Forgot Password
            </Link>
            <Link to="/register" className="forg-right">
              Register
            </Link>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
