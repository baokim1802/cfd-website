import { applyMiddleware, combineReducers, createStore } from "redux";
import { authGetInfo, authReducer } from "./auth";
import thunk from "redux-thunk";
import { counterReducer } from "./counter";

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const logger = (store) => (next) => (action) => {
  console.log("logger", action);
  next(action);
};

// const thunkFake = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };

const store = createStore(reducers, applyMiddleware(logger, thunk));

store.dispatch(authGetInfo());
export default store;
