/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'react-router';

class NewBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrival: '',
      departure: '',
      rooms: 0,
      guest: '',
      hotel: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      arrival: this.state.arrival,
      departure: this.state.departure,
      room: this.state.rooms,
      guest: this.state.guest,
      hotel_id: this.state.hotel,
    };

    fetch('http://localhost:3000/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        const { history } = this.props;
        history.push('/booking');
      })
      .catch(() => {
      });
  }

  // eslint-disable-next-line consistent-return
  displayHotels() {
    const { hotels } = this.props.appHotels;
    if (hotels.loading === false) {
      const { data } = this.props.appHotels.hotels.data;

      const displayValues = data.map((item, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={item.id}>
            {item.name}
          </option>
        );
      });
      return displayValues;
    }
  }

  render() {
    return (
      <div className="container signup-form new_booking_form">
        <form onSubmit={this.handleSubmit} className="form_styles">
          <div className="container">
            <h1>REserve</h1>
            <p>Please fill in this form to create a new reservation.</p>
            <hr />

            <label>
              <b>Arrival date</b>
            </label>
            <input
              type="date"
              value={this.state.arrival}
              placeholder="Arrival date"
              name="arrival"
              onChange={this.handleChange}
              required
            />

            <label>
              <b>Departure date:</b>
            </label>
            <input
              type="date"
              placeholder="departure date"
              name="departure"
              onChange={this.handleChange}
              value={this.state.departure}
              required
            />

            <label>
              <b>Number of rooms</b>
            </label>
            <input
              type="number"
              placeholder="rooms"
              name="rooms"
              onChange={this.handleChange}
              value={this.state.rooms}
              required
            />

            <label>
              <b>Name of guest</b>
            </label>
            <input
              type="text"
              placeholder="guest"
              name="guest"
              onChange={this.handleChange}
              value={this.state.guest}
              required
            />

            <label>
              <b>Hotel</b>
            </label>
            <select
              name="hotel"
              value={this.state.hotel}
              onChange={this.handleChange}
            >
              {this.displayHotels()}
            </select>

            <div className="clearfix">
              <button type="submit" className="signupbtn">
                create reservation
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appHotels: state,
});

NewBooking.propTypes = {};

export default withRouter(connect(mapStateToProps, null)(NewBooking));
