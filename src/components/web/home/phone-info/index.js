import React from "react";
import { Link } from "react-router-dom";
import "./phone-info.css";
import { connect, useSelector } from "react-redux";
import Sliderproduct from "../Carousel/sliderproduct";
import { addToCart } from "../../../../actions/cartAction";
import { generatePublicUrl } from "../../../../urlConfig";

const Phoneitem = (props) => {
  const products = useSelector((state) => state.product);
  return (
    <div className="content-top">
      <div className="container ">
        <div className="spec ">
          <h3>Special Offers</h3>
          <div className="ser-t">
            <b />
            <span>
              <i />
            </span>
            <b className="line" />
          </div>
        </div>

        <div className="tab-pane active text-style" id="tab1">
          <div className=" con-w3l">
            {Object.keys(products.products)
              .slice(0, 4)
              .map((key) => (
                <div className="col-md-3 m-wthree">
                  <div className="col-m">
                    <Link
                      to="/"
                      data-toggle="modal"
                      data-target="#myModal1"
                      className="offer-img"
                    >
                      <img
                        src={
                          products.products[key].productPictures
                            ? generatePublicUrl(
                                products.products[key].productPictures[0].img
                              )
                            : "/images/phone.png"
                        }
                        className="img-responsive"
                        alt=""
                      />
                      <div className="offer">
                        <p>
                          <span>Offer</span>
                        </p>
                      </div>
                    </Link>
                    <div className="mid-1">
                      <div className="women">
                        <h6>
                          <Link
                            to={`/product-details/${products.products[key]._id}`}
                          >
                            {products.products[key].name}
                          </Link>
                        </h6>
                      </div>
                      <div className="mid-2">
                        <p>
                          <label>${products.products[key].price}</label>
                          <em className="item_price">
                            $
                            {products.products[key].price -
                              (products.products[key].price *
                                products.products[key].discount) /
                                100}
                          </em>
                        </p>
                        <div className="block">
                          <div className="starbox small ghosting"> </div>
                        </div>
                        <div className="clearfix" />
                      </div>

                      {products.products[key].name.length <= 25 ? (
                        <div className="add" style={{ marginTop: "18px" }}>
                          <button
                            className="btn btn-danger my-cart-btn my-cart-b "
                            value={products.products[key]._id}
                        
                            onClick={() => props.addToCart(products.products[key])}
                          >
                            Add to Cart
                          </button>
                        </div>
                      ) : (
                        <div className="add">
                          <button
                            className="btn btn-danger my-cart-btn my-cart-b "
                            value={products.products[key]._id}
                            onClick={() => props.addToCart(products.products[key])}
                          >
                            Add to Cart
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            <div className="clearfix" />
          </div>
        </div>

        {/*content*/}
        <div className="content-mid">
          <div className="container">
            <div className="col-md-4 m-w3ls">
              <div className="col-md1 ">
                <Link to="/">
                  <img
                    src="images/sub-banner1.png"
                    className="img-responsive img"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-4 m-w3ls1">
              <div className="col-md ">
                <Link to="/">
                  <img
                    src="images/sub-banner2.png"
                    className="img-responsive img"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-4 m-w3ls">
              <div className="col-md2 ">
                <Link to="/">
                  <img
                    src="images/sub-banner3.png"
                    className="img-responsive img"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>

        {/*content

        {/*content*/}
        <div className="product">
          <div className="container">
            <div className="spec ">
              <h3>New Offer</h3>
              <div className="ser-t">
                <b />
                <span>
                  <i />
                </span>
                <b className="line" />
              </div>
            </div>
            <div className=" con-w3l">
              {Object.keys(products.products)
                .slice(0, 4)
                .map((key) => (
                  <div className="col-md-3 pro-1">
                    <div className="col-m">
                      <Link
                        to="#"
                        data-toggle="modal"
                        data-target="#myModal17"
                        className="offer-img"
                      >
                        <img
                          src={
                            products.products[key].productPictures
                              ? generatePublicUrl(
                                  products.products[key].productPictures[0].img
                                )
                              : "/images/phone.png"
                          }
                          className="img-responsive"
                          alt=""
                        />
                      </Link>
                      <div className="mid-1">
                        <div className="women">
                          <h6>
                            <Link
                              to={`/product-details/${products.products[key]._id}`}
                            >
                              {products.products[key].name}
                            </Link>
                          </h6>
                        </div>
                        <div className="mid-2">
                          <p>
                            <label>${products.products[key].price}</label>
                            <em className="item_price">
                              ${" "}
                              {products.products[key].price -
                                (products.products[key].price *
                                  products.products[key].discount) /
                                  100}
                            </em>
                          </p>
                          <div className="block">
                            <div className="starbox small ghosting"> </div>
                          </div>
                          <div className="clearfix" />
                        </div>

                        {products.products[key].name.length <= 25 ? (
                          <div
                            className="add add-2"
                            style={{ marginTop: "18px" }}
                          >
                            <button
                              className="btn btn-danger my-cart-btn my-cart-b"
                              data-id={1}
                              data-name="product 1"
                              data-summary="summary 1"
                              data-price={6.0}
                              data-quantity={1}
                              data-image="images/phone.png"
                              value={products.products[key]._id}
                              onClick={() => props.addToCart(products.products[key])}
                            >
                              Add to Cart
                            </button>
                          </div>
                        ) : (
                          <div className="add add-2">
                            <button
                              className="btn btn-danger my-cart-btn my-cart-b"
                              data-id={1}
                              data-name="product 1"
                              data-summary="summary 1"
                              data-price={6.0}
                              data-quantity={1}
                              data-image="images/phone.png"
                              value={products.products[key]._id}
                              onClick={() => props.addToCart(products.products[key])}
                            >
                              Add to Cart
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

              <div className="clearfix" />
            </div>
          </div>
        </div>

        {/* another slider  */}
        <div
          className="tab-pane active text-style"
          id="tab1"
          style={{ paddingBottom: "3rem" }}
        >
          <div className="spec ">
            <h3>Best Offers View</h3>
            <div className="ser-t">
              <b />
              <span>
                <i />
              </span>
              <b className="line" />
            </div>
          </div>
          <div className="slick-slider slick-initialized slider-bk" dir="ltr">
            <Sliderproduct state={props} />
            <div className="clearfix" />
          </div>
        </div>
        {/* End slider */}
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(Phoneitem);
