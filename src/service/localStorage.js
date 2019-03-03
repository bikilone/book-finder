export function saveInBookshelf(e, id, bookshelf, data) {
  // is there bookshelf
  if (bookshelf.length > 0) {
    // check is there an id inside
    if (bookshelf.find(e => e.id == id) == undefined) {
      // if there is not id inside
      const bookshelf = JSON.parse(localStorage.getItem("bookshelf"));
      bookshelf.push({ id, ...data });
      localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
      this.checkLocalStorage();
    } else {
      // if there is id inside, remove id
      var books = JSON.parse(localStorage.getItem("bookshelf"));
      books = books.filter(book => book.id !== id);
      localStorage.setItem("bookshelf", JSON.stringify(books));
      this.checkLocalStorage();
    }
  } else {
    // if bookshelf does not exist
    const bookshelf = [];
    bookshelf.push({ id, ...data });
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
    this.checkLocalStorage();
  }
}

export function checkLocalStorage() {
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
}
