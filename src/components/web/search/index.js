import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { addToCart } from "../../../actions/cartAction";
import { getSearch } from "../../../actions/productActions";
import { generatePublicUrl } from "../../../urlConfig";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const products = useSelector((state) => state.product);

  let name= useQuery().get("search");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch(name));
    window.scrollTo(0, 0);
  }, [dispatch, name]);
  const handleAddToCart = (event) => {
    event.preventDefault();
    const product = products.products.find(
      (product) => product._id === event.target.value
    );

    dispatch(addToCart(product));
  };

  return (
    <div>
      {/* Carousel
================================================== */}
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
      ></div>
      {/* /.carousel */}
      {/*content*/}
      <div className="kic-top ">
        <div className="container "></div>
      </div>
      {/*content*/}
      <div className="product" style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="spec ">
            <h3>Products</h3>
            <div className="ser-t">
              <b />
              <span>
                <i />
              </span>
              <b className="line" />
            </div>
          </div>
          <div className=" con-w3l agileinf">
            {Object.keys(products.products)
              .slice(0, 8)
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

export default Search;
