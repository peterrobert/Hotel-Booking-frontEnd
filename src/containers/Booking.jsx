import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import BookingDisplay from "../components/BookingDisplay";

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: "/signin",
    };

    this.displayFunction = this.displayFunction.bind(this);
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

  displayFunction() {
    const { reservations } = this.state.bookings.data;
    if (reservations.length > 0) {
      const dislayData = reservations.map((item) => {
        return <BookingDisplay info={item} key={item.id} />;
      });

      return dislayData;
    }

    return (
      <div className="container text-center">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">
            There are no any bookings at the moment
          </h4>
          <p>
            To place a reservation, or view all your past reservations kindly
            sign in
          </p>
        </div>
      </div>
    ); 
  }

  render() {
    if (this.state.bookings) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Navigation />
            </div>

            <div className="col-md-9">
              <div className="button_book">
                <div className="book_button_new text-right">
                <button>new booking</button>
                </div>
                {this.displayFunction()}
              </div>
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
