import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./loginUser";

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
};
  
  export const saveState = state => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch (err) {}
};

const initialState = loadState();
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;