import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="col-md-3 footer-grid">
            <h3>About Us</h3>
            <p>
              This is
              <Link to="http://github.com/lemanh99">
                Course projects information system
              </Link>
              Application written by language ReactJS
            </p>
          </div>
          <div className="col-md-3 footer-grid ">
            <h3>Menu</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/smartphone">Smartphone</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-grid ">
            <h3>Customer Services</h3>
            <ul>
              <li>
                <Link to="/desclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link to="/faq">Faqs</Link>
              </li>
              <li>
                <Link to="/privacy-and-policy">Privacy & Policy</Link>
              </li>
              <li>
                <Link to="/term-and-condition">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-grid">
            <h3>My Account</h3>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              {/* <li><Link to="wishlist">Wishlist</Link></li> */}
            </ul>
          </div>
          <div className="clearfix" />
          <div className="footer-bottom">
            <h2>
              <Link to="/">
                <b>
                  T<br />H<br />E
                </b>
                Big Store<span>The Best Supermarket</span>
              </Link>
            </h2>
            <p className="fo-para">
              This is {" "}
              <Link target="_blank" to="http://github.com/lemanh99">
                Course projects information system
              </Link>
              Application written by language ReactJS
            </p>
            <ul className="social-fo">
              <li>
                <Link target="_blank" to="fb.com/lemanh.10.11.99" className=" face">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#" className=" twi">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#" className=" pin">
                  <i className="fa fa-pinterest-p" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#" className=" dri">
                  <i className="fa fa-dribbble" aria-hidden="true" />
                </Link>
              </li>
            </ul>
            <div className=" address">
              <div className="col-md-4 fo-grid1">
                <p>
                  <i className="fa fa-home" aria-hidden="true" />
                  Lien Chieu, Da Nang, Viet Nam
                </p>
              </div>
              <div className="col-md-4 fo-grid1">
                <p>
                  <i className="fa fa-phone" aria-hidden="true" />
                  +84 0822521387
                </p>
              </div>
              <div className="col-md-4 fo-grid1">
                <p>
                  <Link to="/gmail.com">
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                    doanchuyennganh@gmail.com
                  </Link>
                </p>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="copy-right">
            <p>
              © 2021 Big store. All Rights Reserved | Design by{" "}
              <Link to="http://github.com/lemanh99"> Team</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
