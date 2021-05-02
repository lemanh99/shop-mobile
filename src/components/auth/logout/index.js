import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../../actions/authAction";

const Logout = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  if (!auth.authenticate) {
    return <Redirect to={`/`} />;
  }
  
  dispatch(logout());
  return <Redirect to={`/`} />;
};

export default Logout;
