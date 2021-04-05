import Port from '../../port';
import { FETCH_HOTELDETAILS, FETCH_HOTELDETAILS_FAILURE, FETCH_HOTELDETAILS_SUCCESS } from '../types/hotelDetailsTypes';

const fetchHotelDetails = () => ({
  type: FETCH_HOTELDETAILS,
});

const fetchHotelDetailsSuccess = (data) => ({
  type: FETCH_HOTELDETAILS_SUCCESS,
  payload: data,
});

const fetchHotelDetailsFailure = (err) => ({
  type: FETCH_HOTELDETAILS_FAILURE,
  payload: err,
});

const dataHotelDetails = (hotelId) => (dispatch) => {
  dispatch(fetchHotelDetails());

  fetch(`${Port}api/v1/hotels/${hotelId}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchHotelDetailsSuccess(data));
    })
    .catch((err) => {
      dispatch(fetchHotelDetailsFailure(err));
    });
};

export {
  fetchHotelDetails, fetchHotelDetailsSuccess, fetchHotelDetailsFailure, dataHotelDetails,
};
