import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Mobileheader from "../header/mobile-header";
import { useDispatch, useSelector } from "react-redux";
import { getListCategory } from "../../../actions/categoryAction";
import { getListBrand } from "../../../actions/brandAction";

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const cartState = useSelector((state) => state.cartState);
  const brands = useSelector((state) => state.brand);
  const categories = useSelector((state) => state.category);
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getListBrand());
    dispatch(getListCategory());
  }, [dispatch]);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  const isMobile = width <= 800;
  if (isMobile) {
    return (
      <div>
        <Mobileheader />
      </div>
    );
  } else {
    return (
      <div>
        {/* <Link to="#"><img src="images/download.png" className="img-head" alt="download" /></Link> */}
        <Grid container className="header_info">
          <Grid item lg={1} xl={2}></Grid>
          <Grid item md={12} lg={11} xl={10} className="header_fixed">
            <Grid container>
              <Grid item md={3} lg={2} xl={2}>
                <div className="logo">
                  <h1>
                    <Link to={"/"}>
                      <b>
                        T<br />H<br />E
                      </b>
                      Big Store<span>The Best Mobile</span>
                    </Link>
                  </h1>
                </div>
              </Grid>
              <Grid item md={6} lg={7} xl={6}>
                <div className="search-form">
                  <form action="#" method="post">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search for Products..."
                    />
                    <button className="btn search__btn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </Grid>

              <Grid item md={3} lg={3} xl={4}>
                <Grid container className="bk_cart_sd">
                  {auth.authenticate ? (
                    <>
                      <Grid item md={4} lg={4} xl={4} className="btn_login">
                        <Link to={"/my-account"}>
                          <Button className="login" variant="outlined">
                            <span>
                              {auth.user.firstName}
                            </span>
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item md={4} lg={4} xl={4} className="cart">
                        <Link to="/carts">
                          <Button className="cart_item" variant="outlined">
                            <span className="item_count">{cartState.cart}</span>
                            <i
                              className="fa fa-shopping-cart my-cart-icon"
                              aria-hidden="true"
                            />
                            <span>Cart</span>
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item md={4} lg={4} xl={4} className="btn_login">
                        <Link to={"/logout"}>
                          <Button className="login" variant="outlined">
                            <span>
                              Logout
                            </span>
                          </Button>
                        </Link>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item md={6} lg={6} xl={6} className="btn_login">
                        <Link to={"/login"}>
                          <Button className="login" variant="outlined">
                            <span>Login</span>
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item md={6} lg={6} xl={6} className="cart">
                        <Link to="/carts">
                          <Button className="cart_item" variant="outlined">
                            <span className="item_count">{cartState.cart}</span>
                            <i
                              className="fa fa-shopping-cart my-cart-icon"
                              aria-hidden="true"
                            />
                            <span>Cart</span>
                          </Button>
                        </Link>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="header_info_2">
          {/* nav bar  */}
          <Grid item md={1} lg={1} xl={1} className="cart_nav_header"></Grid>
          <Grid item md={11} lg={11} xl={11} className="cart_nav_header">
            <div className="nav-top">
              <nav className="navbar navbar-default">
                <div className="navbar-header nav_2">
                  <button
                    type="button"
                    className="navbar-toggle collapsed navbar-toggle1"
                    data-toggle="collapse"
                    data-target="#bs-megadropdown-tabs"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="bs-megadropdown-tabs"
                >
                  <ul className="nav navbar-nav ">
                    <li className="active">
                      <Link to="/" className="hyper ">
                        <span>Home</span>
                      </Link>
                    </li>
                    {categories.listCategory.map((category) => (
                      <li className="dropdown ">
                        <Link to="/kitchen" className="dropdown-toggle  hyper">
                          <span>
                            {category.name}
                            <b className="caret" />
                          </span>
                        </Link>
                        <ul className="dropdown-menu multi">
                          <div className="row">
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                {brands.listBrand
                                  .filter(
                                    (brand) => brand.categoryId === category._id
                                  )
                                  .map((brand) => (
                                    <li>
                                      <Link to={ `/brand/${brand._id}`}>
                                        <i
                                          className="fa fa-angle-right"
                                          aria-hidden="true"
                                        />
                                        {brand.name}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <div className="clearfix" />
            </div>
          </Grid>
          {/* end nav bar  */}
        </Grid>
      </div>
    );
  }
};

export default Header;
