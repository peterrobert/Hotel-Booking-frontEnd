import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const handleClick = (e) => {
    const user_id = localStorage.getItem("user_id");
    if (user_id !== null) {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");

      window.location.reload();
    }
  };
  const checkForToken = () => {
    const check_user = localStorage.getItem("user_id");
    if (check_user !== null) {
      return (
        <div className="logIn">
          <button onClick={handleClick}>Log Out</button>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="mobile_nav">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/hotels">hotels</Link>
          </li>
          <li className="nav-item text-right">
            <Link to="/booking">bookings</Link>
          </li>

          {checkForToken()}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
