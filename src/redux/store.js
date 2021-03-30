import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import hotelDetailsReducer from "./Reducers/hotelDetailsReducer";
import hotelReducer from "./Reducers/hotelReducer";
import signInReducer from "./Reducers/signInReducer";
import signUpReducer from "./Reducers/signUpReducer";

const rootReducers = combineReducers({
  hotels: hotelReducer,
  hotelDetails: hotelDetailsReducer,
  registration: signUpReducer,
  logInUser: signInReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
