import { REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "../types/signUpTypes";

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const signUpReducer = (state = initailState, action) => {
  switch (action.type) {
    case REGISTER_USER: return {
      ...state,
      loading: true,
    };

    case REGISTER_USER_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case REGISTER_USER_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default signUpReducer;