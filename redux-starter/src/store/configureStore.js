import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";

export default function () {
  return configureStore({
    reducer,
    middleware: [logger({ destination: "console" })],
  });
}
// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import reducer from "./bugs";

// export default function configureStore() {
//   const store = createStore(reducer, devToolsEnhancer({ trace: true }));
//   return store;
// }
