import React, { Component } from "react";

import Input from "./Input";
import CardList from "./CardList";
import DataService from "./service/dataservice";
import Loader from "react-loader-spinner";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      cards: [],
      loading: false
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
    this.setState({
      loading: true
    });

    fetch(`${url + this.state.input}&key=${key}`)
      .then(res => res.json())
      .then(data => {
        const books = [];
        data.items.forEach(book => {
          books.push(new DataService(book.volumeInfo));
        });
        this.setState({
          cards: books,
          loading: false
        });
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
        {this.state.loading ? (
          <Loader
            type="Circles"
            color="green"
            height={200}
            width={200}
            className="loader"
          />
        ) : this.state.cards.length > 0 ? (
          <CardList cards={this.state.cards} loading={this.state.loading} />
        ) : (
          <p>Nothing yet</p>
        )}
      </div>
    );
  }
}

export default App;
