import store from "./store";
import * as actions from "./actionTypes";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "bug1",
  },
});

unsubscribe(); //para cancelar subcripcion a la store

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
