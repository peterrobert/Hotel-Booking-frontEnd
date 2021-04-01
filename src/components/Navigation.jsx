import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    
    const user_id = localStorage.getItem("user_id");
    if (user_id !== undefined) {
      fetch(`http://localhost:3000/api/v1/sessions/${user_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.status === "ok"){
            localStorage.removeItem("token")
            localStorage.removeItem("user_id")

            window.location.reload();
          }
          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="top_bar"></div>
        <div className="logo text-center">
          <i className="fa fa-home" aria-hidden="true"></i>{" "}
          <span>Hotel booking</span>
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
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {};

export default withRouter(Navigation);
