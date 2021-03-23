import { FETCH_HOTELDETAILS, FETCH_HOTELDETAILS_FAILURE, FETCH_HOTELDETAILS_SUCCESS } from "../types/hotelDetailsTypes";


const initailState = {
  loading: true,
  data: [],
  error: '',
};

const hotelDetailsReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_HOTELDETAILS: return {
      ...state,
      loading: true,
    };

    case FETCH_HOTELDETAILS_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case FETCH_HOTELDETAILS_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default hotelDetailsReducer;