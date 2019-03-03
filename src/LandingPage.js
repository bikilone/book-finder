import React, { Component } from "react";
import "./css/LandingPage.css";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
  }
  componentDidMount() {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(data => data.json())
      .then(data =>
        this.setState({
          quote: data
        })
      )
      .catch(error =>
        this.setState({
          quote: "Nothing yet"
        })
      );
  }

  render() {
    return this.state.quote.length > 0 ? (
      <div className="landing">{`"${this.state.quote}"`}</div>
    ) : (
      <p className="landing">"Nothing yet"</p>
    );
  }
}
