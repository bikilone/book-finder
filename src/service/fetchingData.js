import DataService from "./dataservice";

export function fetchingData() {
  const key = "AIzaSyAOaVBnu7fgtzZVvuSjWw9MaGmDE3P73sA";
  const url = "https://www.googleapis.com/books/v1/volumes?q=";
  const field = `&&fields=items(volumeInfo/title, volumeInfo/authors, volumeInfo/publisher,volumeInfo/imageLinks, volumeInfo/previewLink)`;
  fetch(`${url + this.state.input}&key=${key}&maxResults=40&orderBy=relevance`)
    .then(res => {
      // handling fetch errors
      // console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then(data => {
      // console.log(data);
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
