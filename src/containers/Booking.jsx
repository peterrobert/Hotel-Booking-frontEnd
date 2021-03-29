import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navigation from "../components/Navigation";

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: "/signin",
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/bookings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          bookings: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.bookings) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Navigation />
            </div>

            <div className="col-md-9 text-center">
              <h1>show bookings</h1>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container text-center">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">
            You need to sign in To make A booking!
          </h4>
          <p>
            To place a reservation, or view all your past reservations kindly
            sign in
          </p>
          <hr />
          <p className="mb-0">
           <Link to="/signin">sign in?</Link>
          </p>
        </div>
      </div>
    );
  }
}

Booking.propTypes = {};

export default Booking;
