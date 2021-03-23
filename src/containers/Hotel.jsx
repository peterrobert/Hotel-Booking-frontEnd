import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
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
       console.log(data, status)
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                    <Navigation />
                    </div>
                    <div className="col-md-9">
                        
                    </div>
                </div>

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