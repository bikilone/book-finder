import React, { Component } from "react";

import Input from "./Input";
import CardList from "./CardList";
import DataService from "./service/dataservice";
import Loader from "react-loader-spinner";
import Error from "./Error";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      cards: [],
      loading: false,
      error: false,
      errorType: ""
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
    // setting loader
    this.setState({
      loading: true
    });
    // mistake - empty input
    if (this.state.input.length === 0) {
      this.setState({ error: true, errorType: "empty input" });
    } else {
      // fetching
      fetch(
        `${url + this.state.input}&key=${key}&maxResults=40&orderBy=relevance`
      )
        .then(res => res.json())
        .then(data => {
          const books = [];
          // mistake - empty response
          if (data.totalItems === 0) {
            this.setState({ error: true, errorType: "empty response" });
          } else {
            this.setState({ error: false, errorType: "" });
            data.items.forEach((book, i) => {
              books.push(new DataService(book.volumeInfo));
            });
          }
          // removing loader and setting book cards
          this.setState({
            cards: books,
            loading: false
          });
        })
        .catch(error => console.log(error));
    }
  };
  render() {
    return (
      <div className="App">
        <Input
          inputText={this.state.input}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        {// handling mistakes
        this.state.error ? (
          <Error error={this.state.errorType} />
        ) : // checking if page is loading or ready
        this.state.loading ? (
          <Loader
            type="Circles"
            color="green"
            height={200}
            width={200}
            className="loader"
          />
        ) : this.state.cards.length > 0 ? ( // landing page issue
          <CardList cards={this.state.cards} loading={this.state.loading} />
        ) : (
          <p>Nothing yet</p>
        )}
      </div>
    );
  }
}

export default App;
