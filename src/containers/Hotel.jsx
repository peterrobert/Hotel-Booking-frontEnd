/* eslint-disable linebreak-style */
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
import Navigation from '../components/Navigation';
import { dataHotel } from '../redux/Actions/hotelAction';
import SimpleSlider from './SimpleSlider';

class Hotel extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRequestHotels();
  }

  // eslint-disable-next-line class-methods-use-this
  spinners() {
    return (
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  render() {
    const { data, status } = this.props.resturants.hotels.data;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xs-12 col-sm-12">
            <Navigation />
          </div>
          <div className="col-md-9">
            <div className="title text-center">
              <h2>Available Hotels</h2>
              <p>This are the hotels that are available for booking</p>
            </div>
            <div className="slider_dipslay">
              {status === 'ok' ? <SimpleSlider data={data} /> : this.spinners()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  resturants: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRequestHotels: () => dispatch(dataHotel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);
