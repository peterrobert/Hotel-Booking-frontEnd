import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import hotelDetailsReducer from "./Reducers/hotelDetailsReducer";
import hotelReducer from "./Reducers/hotelReducer";

const rootReducers = combineReducers({
  hotels: hotelReducer,
  hotelDetails: hotelDetailsReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
