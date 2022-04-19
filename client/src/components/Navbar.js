import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-bootstrap";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);

  const { currentUser } = userstate.state;

  return (
    <div >
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
        <a className="navbar-brand" href="/">
          Rainbow🎂
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown">
                <a
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 {currentUser.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                   orders
                  </a>
                  <a className="dropdown-item" href="#">
                   logout
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item active">
                <a
                  className="nav-link"
                  style={{ color: "brown" }}
                  href="/login"
                >
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" style={{ color: "brown" }} href="/cart">
                Cart🛒 {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
