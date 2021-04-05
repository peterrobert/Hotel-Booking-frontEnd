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
import ShowHotel from '../components/ShowHotel';
import { dataHotelDetails } from '../redux/Actions/hotelDetailsAction';

class HotelDetails extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const { id } = params;

    this.props.fetchHotelDetails(id);
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
    const { data, services } = this.props.resturantDetails.hotelDetails.data;
    const { status } = this.props.resturantDetails.hotelDetails.data;

    return (
      <div>

        {status === 'ok' ? <ShowHotel data={data} servicesOffered={services} /> : this.spinners()}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  resturantDetails: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHotelDetails: (id) => dispatch(dataHotelDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);
