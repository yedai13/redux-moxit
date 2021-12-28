// import store from "./store";
// import { bugAdded, bugRemoved, bugResolved } from "./actions";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// store.dispatch(bugAdded("Bug 1"));

// store.dispatch(bugResolved(1));

// unsubscribe(); //para cancelar subcripcion a la store

// store.dispatch(bugRemoved(1));

// console.log(store.getState());

import store from "./customStore";

console.log(store.getState());
