import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from "../types/signInTypes";


const initailState = {
  loading: true,
  data: [],
  error: '',
};

const signInReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN_USER: return {
      ...state,
      loading: true,
    };

    case LOGIN_USER_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case LOGIN_USER_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default signInReducer;