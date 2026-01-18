import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-4">
            <h5>ElectroShop</h5>
            <p>
              Your one-stop destination for the latest electronics and gadgets.
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h6>Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Help Center</a></li>
              <li><a href="#" className="text-light">Returns</a></li>
              <li><a href="#" className="text-light">Warranty</a></li>
              <li><a href="#" className="text-light">Track Order</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/pagination" className="text-light text-decoration-none">
                  Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6>FAQs</h6>
            <ul className="list-unstyled">
              <li><Link to="/techfaq" className="text-light">Technology</Link></li>
              <li><Link to="/iosfaq" className="text-light">iOS Version</Link></li>
              <li><Link to="/andriodfaq" className="text-light">Android Version</Link></li>
              <li><Link to="/paymentfaq" className="text-light">Payment</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Contact</h6>
            <p>Email: support@electroshop.com</p>
            <p>Phone: +91 XXXXX 43210</p>
            <p>Delhi, India</p>
          </div>
        </div>

        <hr />

        <div className="text-center pb-3">
          © {new Date().getFullYear()} ElectroShop
        </div>
      </div>
    </footer>
  );
}

export default Footer;
