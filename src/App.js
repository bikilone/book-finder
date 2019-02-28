import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import Input from "./Input";
import CardList from "./CardList";
import DataService from "./service/dataservice";
import Loader from "react-loader-spinner";
import Error from "./Error";
import LandingPage from "./LandingPage";
import SinglePage from "./SinglePage";
import Header from "./Header";

import "./css/App.css";
import { debug } from "util";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      cards: [],
      loading: false,
      error: false,
      errorType: "",
      bookshelf: []
    };
  }
  saveInBookshelf = (e, id, bookshelf) => {
    // is there bookshelf
    if (bookshelf.length > 0) {
      // check is there an id inside
      if (bookshelf.find(e => e == id) == undefined) {
        // if there is not id inside
        const bookshelf = JSON.parse(localStorage.getItem("bookshelf"));
        bookshelf.push(id);
        localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
        this.checkLocalStorage();
      } else {
        // if there is id inside, remove id
        var books = JSON.parse(localStorage.getItem("bookshelf"));
        books = books.filter(book => book !== id);
        localStorage.setItem("bookshelf", JSON.stringify(books));
        this.checkLocalStorage();
      }
    } else {
      // if bookshelf does not exist

      const bookshelf = [];
      bookshelf.push(id);
      localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
      this.checkLocalStorage();
    }
  };

  checkLocalStorage = () => {
    if (localStorage.getItem("bookshelf") !== null) {
      const bookshelf = JSON.parse(localStorage.getItem("bookshelf"));
      this.setState({
        bookshelf: bookshelf
      });
    } else {
      this.setState({
        bookshelf: []
      });
    }
  };
  componentDidMount() {
    this.checkLocalStorage();
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
        `${url + this.state.input}&key=${key}&maxResults=40&orderBy=relevance`
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
          // mistake - empty response
          if (data.totalItems === 0) {
            this.setState({ error: true, errorType: "empty response" });
          } else {
            this.setState({ error: false, errorType: "" });
            data.items.forEach((book, i) => {
              // console.log(book.volumeInfo.authors);
              books.push(new DataService(book.volumeInfo, book.id));
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
    // console.log(this.state.bookshelf);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Input
                  clearInput={this.clearInput}
                  inputText={this.state.input}
                  onInputChange={this.onInputChange}
                  onSubmit={this.onSubmit}
                  onClick={this.onClick}
                />
                {// first check is there any error
                this.state.error ? (
                  <Error error={this.state.errorType} />
                ) : this.state.loading ? ( // check is the page loading
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
                ) : this.state.cards.length > 0 ? ( // check if you need to show card list or landing page
                  <CardList
                    bookshelf={this.state.bookshelf}
                    saveInBookshelf={this.saveInBookshelf}
                    cards={this.state.cards}
                    loading={this.state.loading}
                  />
                ) : (
                  <LandingPage />
                )}
              </div>
            )}
          />
          <Route exact path="/:id" component={SinglePage} />
        </Switch>

        {/* {// handling mistakes
        this.state.error ? (
          
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
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <CardList
                  saveInBookshelf={this.saveInBookshelf}
                  cards={this.state.cards}
                  loading={this.state.loading}
                />
              )}
            />
            <Route exact path="/:id" component={SinglePage} />
          </Switch>
        ) : (
          <LandingPage />
        )} */}
      </div>
    );
  }
}

export default App;
