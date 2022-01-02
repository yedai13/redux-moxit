import logo from "./logo.svg";
import "./App.css";
import Bugs from "./component/Bugs";
import configureStore from "./store/configureStore";
import StoreContext from "./context/storeContext";

const store = configureStore();

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Bugs />
    </StoreContext.Provider>
  );
}

export default App;
