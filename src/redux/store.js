import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import hotelReducer from "./Reducers/hotelReducer";

const rootReducers = combineReducers({
  hotels: hotelReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
