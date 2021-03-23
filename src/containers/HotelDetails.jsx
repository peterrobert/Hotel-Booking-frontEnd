import React, { Component } from "react";
import { connect } from "react-redux";
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
  render() {
      console.log(this.props)
    return <div>
        this is the details component
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
