import React from "react";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <div className="top_bar"></div>
      <div className="logo text-center">
        <i className="fa fa-home" aria-hidden="true"></i>{" "}
        <span>idea booking system</span>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Hotels
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Bookings
          </a>
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
          <button>Log In</button>
      </div>
    </div>
  );
};

export default Navigation;
