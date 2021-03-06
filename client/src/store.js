import { createStore } from "redux";
import login from "./reducers/login";

const store = createStore(
  login,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
