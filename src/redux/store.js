import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import hotelDetailsReducer from "./Reducers/hotelDetailsReducer";
import hotelReducer from "./Reducers/hotelReducer";
import signUpReducer from "./Reducers/signUpReducer";

const rootReducers = combineReducers({
  hotels: hotelReducer,
  hotelDetails: hotelDetailsReducer,
  registration: signUpReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
