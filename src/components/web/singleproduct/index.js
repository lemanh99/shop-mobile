import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getListProduct,
  getProductById,
} from "../../../actions/productActions";
import { generatePublicUrl } from "../../../urlConfig";
import { addToCart } from "../../../actions/cartAction";

const Singleproduct = (props) => {
  const products = useSelector((state) => state.product);
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getListProduct());
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  useEffect(() => {
    setProduct(products.product_detail);
  }, [products.product_detail]);

  const handleAddToCart = (event) => {
    event.preventDefault();
    const product = products.products.find(
      (product) => product._id === event.target.value
    );

    dispatch(addToCart(product));
  };
  return (
    <div>
      <div className="banner-top">
        <div className="container">
          <h3>Product Details</h3>
          <h4>
            <a href="/">Home</a>
            <label>/</label>product
          </h4>
          <div className="clearfix"> </div>
        </div>
      </div>
      {product.name ? (
        <div className="single">
          <div className="container">
            <div className="single-top-main">
              <div className="col-md-5 single-top">
                <div className="single-w3agile">
                  <div
                    id="picture-frame"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      cursor: "crosshair",
                    }}
                  >
                    <img
                      src={
                        product.productPictures
                          ? generatePublicUrl(product.productPictures[0].img)
                          : "/images/phone.png"
                      }
                      data-src="images/si-1.jpg"
                      alt="si"
                      className="img-responsive"
                    />
                    <img
                      src={
                        product.productPictures
                          ? generatePublicUrl(product.productPictures[0].img)
                          : "/images/phone.png"
                      }
                      alt="si"
                      style={{
                        position: "absolute",
                        top: "-12px",
                        left: 0,
                        opacity: 0,
                        width: 700,
                        height: 700,
                        border: "none",
                        maxWidth: "none",
                        maxHeight: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-7 single-top-left ">
                <div className="single-right">
                  <h3>{product.name}</h3>
                  <div className="pr-single">
                    <p className="reduced ">
                      <del>${product.price}</del>$
                      {product.price - (product.price * product.discount) / 100}
                    </p>
                  </div>
                  <div className="block block-w3">
                    <div className="starbox small ghosting">
                      <div className="positioner">
                        <div className="stars">
                          <div
                            className="ghost"
                            style={{ display: "none", width: "42.5px" }}
                          />
                          <div
                            className="colorbar"
                            style={{ width: "42.5px" }}
                          />
                          <div className="star_holder">
                            <div className="star star-0" />
                            <div className="star star-1" />
                            <div className="star star-2" />
                            <div className="star star-3" />
                            <div className="star star-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="in-pa">{product.description}</p>
                  <ul className="social-top">
                    <li>
                      <a href="/" className="icon facebook">
                        <i className="fa fa-facebook" aria-hidden="true" />
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="/" className="icon twitter">
                        <i className="fa fa-twitter" aria-hidden="true" />
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="/" className="icon pinterest">
                        <i className="fa fa-pinterest-p" aria-hidden="true" />
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="/" className="icon dribbble">
                        <i className="fa fa-dribbble" aria-hidden="true" />
                        <span />
                      </a>
                    </li>
                  </ul>
                  <div className="add add-3">
                    <button
                      className="btn btn-danger my-cart-btn my-cart-b"
                      data-id={product._id}
                      data-name={product.name}
                      data-summary="summary 1"
                      data-price={product.price}
                      data-quantity={1}
                      data-image="images/si.jpg"
                      value={product._id}
                      onClick={(e) => handleAddToCart(e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* Similar items */}

      <div className="content-top offer-w3agile">
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
          <div className=" con-w3l wthree-of">
            {Object.keys(products.products)
              .slice(0, 4)
              .map((key) => (
                <div className="col-md-3 pro-1">
                  <div className="col-m">
                    <Link
                      to={`/product-details/${products.products[key]._id}`}
                      data-toggle="modal"
                      data-target="#myModal5"
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
                        alt="ofpic"
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
                          <NavLink
                            to={`/product-details/${products.products[key]._id}`}
                          >
                            {products.products[key].name}
                          </NavLink>
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
                            className="btn btn-danger my-cart-btn my-cart-b"
                            value={products.products[key]._id}
                            onClick={(e) => handleAddToCart(e)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      ) : (
                        <div className="add">
                          <button
                            className="btn btn-danger my-cart-btn my-cart-b"
                            data-id={5}
                            data-name="Lays"
                            data-summary="summary 5"
                            data-price="0.70"
                            data-quantity={1}
                            data-image="images/of4.png"
                            value={products.products[key]._id}
                            onClick={(e) => handleAddToCart(e)}
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
    </div>
  );
};

export default Singleproduct;
