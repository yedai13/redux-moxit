import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "bugs",
    onSuccess: "bugsReceivid",
    onError: "apiRequestFailed",
  },
});

// store.dispatch((dispatch, getState) => {
//   //call an API
//   //when the promise is resolved => dispatch()
//   dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
//   console.log(getState());
//   //if the promise is rejected => dispatch()
// });

// store.dispatch({
//   type: "error",
//   payload: { message: "an error occurred." },
// });

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));

// store.dispatch(projectAdded({ name: "Project 1" }));

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));

// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

// store.dispatch(bugResolved({ id: 1 }));

// const unresolvedBusgs = getUnresolvedBugs(store.getState());
// const unresolvedBusgs2 = getUnresolvedBugs(store.getState());

// console.log(unresolvedBusgs === unresolvedBusgs2);

// const bugs = getBugsByUser(1)(store.getState());
// console.log("bugs by id", bugs);

// unsubscribe(); //para cancelar subcripcion a la store

// store.dispatch(bugRemoved({ id: 1 }));

// console.log("state", store.getState());
