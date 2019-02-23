import React, { Component } from "react";

import Input from "./Input";
import CardList from "./CardList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      cards: []
    };
  }

  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.input);
  };
  render() {
    return (
      <div className="App">
        <Input
          inputText={this.state.input}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
