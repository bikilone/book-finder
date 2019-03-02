import React, { Component } from "react";
import Card from "./Card";
import DataService from "./service/dataservice";

export default class SinglePage extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      saveInBookshelf: props.saveInBookshelf,
      bookshelf: props.bookshelf,
      data: ""
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      bookshelf: props.bookshelf
    });
  }
  componentDidMount() {
    const key = "AIzaSyAOaVBnu7fgtzZVvuSjWw9MaGmDE3P73sA";
    fetch(
      `https://www.googleapis.com/books/v1/volumes/${this.state.id}?key=${key}`
    )
      .then(data => data.json())
      .then(data => new DataService(data.volumeInfo, this.state.id))
      .then(data => {
        this.setState({
          data: data
        });
        console.log(data);
      })
      .catch(eror => console.log(eror));
  }
  render() {
    var style = "white";
    /// checking if there is some book in bookshelf to set up red stars in view
    ///
    if (this.state.bookshelf.length > 0) {
      this.state.bookshelf.forEach(book => {
        if (book.id == this.state.id) {
          style = "#ff3d02";
          return;
        }
      });
    }

    if (typeof this.state.data !== "string") {
      const {
        categories,
        description,
        industryIdentifiers,
        pageCount,
        publishedDate,
        image,
        title,
        publisher,
        author
      } = this.state.data;
      // console.log(author);
      return (
        <div className="card single-card">
          <img src={image} alt="" />
          <div className="card-right" style={{ height: "500px" }}>
            <div className="card-rigth-top">
              <h1>{title}</h1>
              <svg
                onClick={e => {
                  this.state.saveInBookshelf(
                    e,
                    this.state.id,
                    this.state.bookshelf,
                    this.state.data
                  );
                }}
              >
                <path
                  fill={style}
                  xmlns="http://www.w3.org/2000/svg"
                  className="a"
                  d="M33.688,36.755h11.5l3.584-10.911L52.3,36.755H63.8l-9.307,6.739,3.53,10.965L48.771,47.72l-9.307,6.739,3.53-10.965Z"
                  transform="translate(-33.688 -25.844)"
                />
              </svg>
            </div>
            <p className="author">By: {author}</p>
            <p className="publisher">Category: {categories[0]}</p>
            <p className="publisher">Description: {description}</p>
            <p className="publisher">PageCount: {pageCount}</p>
            <p className="publisher">Published date: {publishedDate}</p>
            <p className="publisher">Published By: {publisher}</p>
          </div>
        </div>
      );
    } else {
      return <div>sdaf</div>;
    }
  }
}
