import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { dataHotel } from "../redux/Actions/hotelAction";
import SimpleSlider from "./SimpleSlider";

class Hotel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRequestHotels();
  }

  render() {
    const { data, status } = this.props.resturants.hotels.data;
    console.log(data, status);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Navigation />
          </div>
          <div className="col-md-9">
            <div className="title text-center">
              <h2>Available Hotels</h2>
              <p>This are the hotels that are available for booking</p>
            </div>
            {status == "ok"? <SimpleSlider data= {data} />: "No eveluation" }  
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
