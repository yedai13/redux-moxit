import React, { Component } from "react";
import StoreContext from "./../context/storeContext";

class Bugs extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return <div>Bugs</div>;
  }
}

// Bugs.contextType = StoreContext;

export default Bugs;
