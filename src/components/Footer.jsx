import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">ElectroShop</h5>
            <p>
              Your one-stop destination for the latest electronics, gadgets,
              and accessories at the best prices.
            </p>
          </div>

          {/* Customer Service */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase">Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">Warranty</a></li>
              <li><a href="#" className="text-light text-decoration-none">Track Order</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Mobiles</a></li>
              <li><a href="#" className="text-light text-decoration-none">Laptops</a></li>
              <li><a href="#" className="text-light text-decoration-none">Accessories</a></li>
              <li><a href="#" className="text-light text-decoration-none">Offers</a></li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase">FAQ</h6>
            <ul className="list-unstyled">
              <li><Link to="/techfaq" className="text-light text-decoration-none">Technology</Link></li>
              <li><a href="/iosfaq" className="text-light text-decoration-none">Ios Version</a></li>
              <li><a href="/andriodfaq" className="text-light text-decoration-none">Android Version</a></li>
               <li><Link to="/paymentfaq" className="text-light text-decoration-none">Payment Options</Link></li>
             
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase">Contact Us</h6>
            <p>Email: support@electroshop.com</p>
            <p>Phone: +91 XXXXX 43210</p>
            <p>Location: Chadni Chowk, Delhi, India</p>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom */}
        <div className="text-center pb-3">
          <p className="mb-0">
            © {new Date().getFullYear()} ElectroShop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
