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
import { saveInBookshelf, checkLocalStorage } from "./service/localStorage";
import { fetchingData } from "./service/fetchingData";

import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      cards: [],
      loading: false,
      error: false,
      errorType: "",
      bookshelf: [],
      test: ""
    };
    this.saveInBookshelf = saveInBookshelf.bind(this);
    this.checkLocalStorage = checkLocalStorage.bind(this);
    this.fetchingData = fetchingData.bind(this);
  }

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
      this.fetchingData();
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
          <Route
            exact
            path="/bookshelf"
            render={() => (
              <CardList
                bookshelf={this.state.bookshelf}
                saveInBookshelf={this.saveInBookshelf}
                cards={this.state.bookshelf}
                loading={this.state.loading}
              />
            )}
          />
          <Route
            path="/:id"
            render={props => {
              return <SinglePage />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
