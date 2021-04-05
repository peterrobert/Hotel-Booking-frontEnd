import { FETCH_HOTEL, FETCH_HOTEL_FAILURE, FETCH_HOTEL_SUCCESS } from '../types/hotelTypes';

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const hotelReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_HOTEL: return {
      ...state,
      loading: true,
    };

    case FETCH_HOTEL_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case FETCH_HOTEL_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default hotelReducer;
