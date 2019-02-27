import React, { Component } from "react";

import Input from "./Input";
import CardList from "./CardList";
import DataService from "./service/dataservice";
import Loader from "react-loader-spinner";
import Error from "./Error";
import LandingPage from "./LandingPage";

import "./css/App.css";

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
    const field = `&fields=items(volumeInfo/title, volumeInfo/authors, volumeInfo/publisher,volumeInfo/imageLinks, volumeInfo/previewLink)`;
    // setting loader
    this.setState({
      loading: true,
      error: false,
      errorType: ""
    });
    // mistake - empty input
    if (this.state.input.length === 0) {
      this.setState({ error: true, errorType: "empty input" });
    } else {
      // fetching
      fetch(
        `${url +
          this.state.input}&key=${key}&maxResults=40&orderBy=relevance${field}`
      )
        .then(res => {
          // handling fetch errors
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then(data => {
          const books = [];
          console.log(data);
          // mistake - empty response
          if (data.totalItems === 0) {
            this.setState({ error: true, errorType: "empty response" });
          } else {
            this.setState({ error: false, errorType: "" });
            data.items.forEach((book, i) => {
              // console.log(book.volumeInfo.authors);
              books.push(new DataService(book.volumeInfo));
            });
          }
          // removing loader and setting book cards
          this.setState({
            cards: books,
            loading: false
          });
        })
        .catch(error => {
          this.setState({
            error: true,
            errorType: "something went wrong"
          });
        });
    }
  };
  // making sure that mistake is removed
  onClick = () => {
    this.setState({ error: false, errorType: "" });
  };
  clearInput = () => {
    this.setState({ input: "" });
  };
  render() {
    return (
      <div className="App">
        <Input
          clearInput={this.clearInput}
          inputText={this.state.input}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          onClick={this.onClick}
        />
        {// handling mistakes
        this.state.error ? (
          <Error error={this.state.errorType} />
        ) : // checking if page is loading or ready
        this.state.loading ? (
          <div style={{ marginTop: "100px" }}>
            <Loader
              type="Circles"
              color="#ff6f00"
              marginTop="100px"
              marginTop={100}
              height={200}
              width={200}
              className="loader"
            />
          </div>
        ) : this.state.cards.length > 0 ? ( // landing page issue
          <CardList cards={this.state.cards} loading={this.state.loading} />
        ) : (
          <LandingPage />
        )}
      </div>
    );
  }
}

export default App;
