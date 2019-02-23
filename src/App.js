import React, { Component } from "react";

import Input from "./Input";
import CardList from "./CardList";
import DataService from "./service/dataservice";
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
    const key = "AIzaSyAOaVBnu7fgtzZVvuSjWw9MaGmDE3P73sA";
    const url = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${url + this.state.input}&key=${key}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const books = [];
        data.items.forEach(book => {
          // console.log(book.volumeInfo.imageLinks);
          books.push(new DataService(book.volumeInfo));
        });
        this.setState({
          cards: books
        });
        console.log(this.state.cards);
      })
      .catch(error => console.log(error));
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
