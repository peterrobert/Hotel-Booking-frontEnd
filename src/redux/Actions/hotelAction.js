import { FETCH_HOTEL, FETCH_HOTEL_FAILURE, FETCH_HOTEL_SUCCESS } from '../types/hotelTypes';

const fetchHotel = () => ({
  type: FETCH_HOTEL,
});

const fetchHotelSuccess = (data) => ({
  type: FETCH_HOTEL_SUCCESS,
  payload: data,
});

const fetchHotelFailure = (err) => ({
  type: FETCH_HOTEL_FAILURE,
  payload: err,
});

const dataHotel = () => (dispatch) => {
  dispatch(fetchHotel());

  fetch('http://localhost:3000/api/v1/hotels')
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchHotelSuccess(data));
    })
    .catch((err) => {
      dispatch(fetchHotelFailure(err));
    });
};

export {
  fetchHotel, fetchHotelSuccess, fetchHotelFailure, dataHotel,
};
