import { REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from '../types/signUpTypes';

const registerUser = () => ({
  type: REGISTER_USER,
});

const registerUserSuccess = (data) => ({
  type: REGISTER_USER_SUCCESS,
  payload: data,
});

const registerUserFailure = (err) => ({
  type: REGISTER_USER_FAILURE,
  payload: err,
});

const signUpUser = (data) => (dispatch) => {
  dispatch(registerUser());
  fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(registerUserSuccess(data));
    })
    .catch((error) => {
      dispatch(registerUserFailure(error));
    });
};

export {
  registerUser, registerUserSuccess, registerUserFailure, signUpUser,
};
