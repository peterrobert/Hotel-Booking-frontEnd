import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataHotel } from '../redux/Actions/hotelAction';

class Hotel extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchRequestHotels()
    }

    render() {
        const {data, status} = this.props.resturants.hotels.data
       console.log(data)
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    resturants: state
});
  
const mapDispatchToProps = dispatch => ({

    fetchRequestHotels: () => dispatch(dataHotel()),

  });

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);