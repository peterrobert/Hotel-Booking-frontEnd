import React, { Component } from "react";

class SimpleSlider extends Component {
  constructor(props) {
    super(props);
  }

  diplayHotels() {
    const { data } = this.props;
    const diplayInfo = data.map((info) => {
      return (
        <div className="card mb-3" style="max-width: 540px;" key={info.id}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={`${info.main_image}`} className="card-img" alt={info.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return diplayInfo;
  }

  render() {
    return this.diplayHotels();
  }
}

export default SimpleSlider;
