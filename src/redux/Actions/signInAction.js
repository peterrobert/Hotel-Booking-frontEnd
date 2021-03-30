import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
} from "../types/signInTypes";

const loginUser = () => ({
  type: LOGIN_USER,
});

const loginUserSuccess = (data) => ({
  type: LOGIN_USER_SUCCESS,
  payload: data,
});

const loginUserFailure = (err) => ({
  type: LOGIN_USER_FAILURE,
  payload: err,
});

const signInUser = (data) => (dispatch) => {
  dispatch(loginUser());
  fetch(`http://localhost:3000/api/v1/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      loginUserSuccess(data);
    })
    .catch((error) => {
      loginUserFailure(error);
    });
};

export { loginUser, loginUserSuccess, loginUserFailure, signInUser };
