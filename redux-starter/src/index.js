import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
} from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(projectAdded({ name: "Project 1" }));

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));

store.dispatch(bugResolved({ id: 1 }));

const unresolvedBusgs = getUnresolvedBugs(store.getState());
const unresolvedBusgs2 = getUnresolvedBugs(store.getState());

console.log(unresolvedBusgs === unresolvedBusgs2);

unsubscribe(); //para cancelar subcripcion a la store

store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());
