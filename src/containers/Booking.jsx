/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import BookingDisplay from '../components/BookingDisplay';
// eslint-disable-next-line import/order
import { withRouter } from 'react-router';
import Port from '../port';
import MobileNav from '../components/MobileNav';


class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      redirect: '/signin',
    };

    this.displayFunction = this.displayFunction.bind(this);
  }

  componentDidMount() {

    const checkStorage = localStorage.getItem('token');

    if(checkStorage !== null){
      fetch(`${Port}api/v1/bookings`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
            this.setState({
              bookings: data,
            });
        })
        .catch(() => {
        });
    }
   
  }

  displayFunction() {
    const { reservations } = this.state.bookings.data;
    // eslint-disable-next-line camelcase
    const { reserved_hotels } = this.state.bookings.data;
    if (reservations.length > 0) {
      const dislayData = reservations.map((item, index) => (
        
        <BookingDisplay
          info={item}
          key={item.id}
          hotelInfo={reserved_hotels[index]}
        />
      ));

      return dislayData;
    }

    return (
      <div className="text-center">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">
            There are no any bookings at the moment
          </h4>
          <p>You can create a new reservation.</p>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.bookings) {
      return ( 
        <div className="container-fluid">
        
          <div className="row">
          <MobileNav />
            <div className="col-md-3">
              <Navigation />
            </div>

            <div className="col-md-9">
              <div className="button_book">
                <div className="book_button_new text-right">
                  <button
                    onClick={() => {
                      // eslint-disable-next-line react/prop-types
                      const { history } = this.props;
                      // eslint-disable-next-line react/prop-types
                      history.push('/newBooking');
                    }}
                  >
                    new booking
                  </button>
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

export default withRouter(Booking);
