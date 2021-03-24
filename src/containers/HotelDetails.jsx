import React, { Component } from "react";
import { connect } from "react-redux";
import ShowHotel from "../components/ShowHotel";
import { dataHotelDetails } from "../redux/Actions/hotelDetailsAction";

class HotelDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const id = params.id;

    this.props.fetchHotelDetails(id);
  }

  spinners() {
    return (
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  render() {
  
    const {data, services} = this.props.resturantDetails.hotelDetails.data
    const {status} = this.props.resturantDetails.hotelDetails.data

    console.log(status)
    return <div>

      {status === "ok" ? <ShowHotel data ={data} servicesOffered = {services} /> : this.spinners()}
        
    </div>;
  }
}

const mapStateToProps = (state) => ({
  resturantDetails: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHotelDetails: (id) => dispatch(dataHotelDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);
