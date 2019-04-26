import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "./reducers/userReducer";

// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("watchLater");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };
// const saveState = state => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("watchLater", serializedState);
//   } catch {}
// };

const store = createStore(
  combineReducers({ user }),
  // loadState(),
  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   saveState({
//     watchLater: store.getState().watchLater
//   });
// });

export default store;
