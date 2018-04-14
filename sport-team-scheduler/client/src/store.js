import { createStore } from "redux";
import login from "./reducers/login";

const store = createStore(login);

console.log(store.getState());

export default store;
