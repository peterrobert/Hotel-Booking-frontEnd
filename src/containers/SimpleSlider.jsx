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
import Slider from 'react-slick';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'react-router';

class SimpleSlider extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { history } = this.props;
    history.push(`/hotels/${id}`);
  }

  diplayHotels() {
    const { data } = this.props;
    const diplayInfo = data.map((info) => {
      return (
        <div className="col-md-4 hotel-disp" key={info.id}>
          <img src={`${info.main_image}`} alt={info.name} />
          <h4>{info.name}</h4>
          <i className="fa fa-map-marker" aria-hidden="true" />{' '}
          <span>Location: {info.location}</span>
          <br />
          <i className="fa fa-usd" aria-hidden="true" />{' '}
          <span>price per night: {info.price} $$</span>
          <br />
          <button
            type="button"
            onClick={() => this.handleClick(info.id)}
            className="btn btn-light"
          >
            view hotel
          </button>
        </div>
      );
    });
    return diplayInfo;
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      // eslint-disable-next-line no-dupe-keys
      speed: 4000,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };

    return <Slider {...settings}>{this.diplayHotels()}</Slider>;
  }
}

export default withRouter(SimpleSlider);
