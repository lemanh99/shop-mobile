import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { addToCart } from "../../../../../actions/cartAction";
import {
  getListProduct,
} from "../../../../../actions/productActions";

import { generatePublicUrl } from "../../../../../urlConfig";

const Sliderproduct = () => {
  const products = useSelector((state) => state.product);
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProduct());
    window.scrollTo(0, 0)
  }, [dispatch]);
  // useEffect(() => {
  //     // let product = []
  //     var result = Object.keys(products.products).map((key) => {product.push({Number(key), products.products[key]})});
  // }, [products.products])
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  const handleAddToCart = (event) => {
    const product = products.products.find(product =>product._id===event.target.value);
    event.preventDefault();
    dispatch(addToCart(product));
  };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  const settingsMobile = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const isMobile = width <= 800;
  if (isMobile) {
    return (
      <div>
        <Slider {...settingsMobile}>
          {Object.keys(products.products).map((key) => (
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
                      <Link to={`/product-details/${products.products[key]._id}`}>
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
                  <div className="add">
                    <button
                      className="btn btn-danger my-cart-btn my-cart-b "
                      value={products.products[key]._id}
                      onClick={(e) => handleAddToCart(e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
             
              </div>
            </div>
          
          ))}
        </Slider>
      </div>
    );
  } else {
    return (
      <div>
        <Slider {...settings}>
          {Object.keys(products.products).map((key) => (
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
                      <Link to={`/product-details/${products.products[key]._id}`}>
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
                  <div className="add">
                    <button
                      className="btn btn-danger my-cart-btn my-cart-b "
                      value={products.products[key]._id}
                      onClick={(e) => handleAddToCart(e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
};

export default Sliderproduct;
