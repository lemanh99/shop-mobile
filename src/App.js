import React, { useEffect } from "react";
import "./App.css";
import Web from "./components/web";
import NoMatch from "./components/nomatch";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/authAction";
import { loadLocalStorage } from "./actions/cartAction";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  useEffect(() => {
    if (cart) {
      dispatch(loadLocalStorage(cart));
    }
  }, []);
  return (
    <Switch>
      <Route path="/" component={Web} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default App;
