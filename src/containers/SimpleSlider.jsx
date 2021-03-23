import React, { Component } from 'react';
import Slider from "react-slick";


class SimpleSlider extends Component {
    constructor(props) {
        super(props);

    }

    render() {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return (
            <div>
                 <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

            </div>
        );
    }
}

export default SimpleSlider;