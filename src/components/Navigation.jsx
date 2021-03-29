import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav-bar">
      <div className="top_bar"></div>
      <div className="logo text-center">
        <i className="fa fa-home" aria-hidden="true"></i>{" "}
        <span>Robert bookings</span>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
        <Link to="/hotels">hotels</Link>
        </li>
        <li className="nav-item">
        <Link to="/booking">bookings</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>

      <div className="logIn">
          <button><Link to="/signin">sign In</Link></button>
      </div>

      <div className="signUp">
          <button><Link to="/signUp">sign Up</Link></button>
      </div>
    </div>
  );
};

export default Navigation;
