import React, { Component } from "react";
import Slider from "react-slick";

class SimpleSlider extends Component {
  constructor(props) {
    super(props);
  }

  diplayHotels() {
    const { data } = this.props;
    const diplayInfo = data.map((info) => {
      return (
        <div className="col-md-4 hotel-disp" key={info.id}>
          <img src={`${info.main_image}`} alt={info.name} />
          <h4>{info.name}</h4>
          <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
          <span>Location: {info.location}</span>
          <br />
          <i class="fa fa-usd" aria-hidden="true"></i>{" "}
          <span>price per night: {info.price} $$</span>
          <br />
          <button type="button" className="btn btn-light">
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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };

    return <Slider {...settings}>{this.diplayHotels()}</Slider>;
  }
}

export default SimpleSlider;
