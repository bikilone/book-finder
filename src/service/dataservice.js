class DataService {
  constructor(data) {
    this.title = data.title;
    this.author = data.authors;
    this.publisher = data.publisher;
    this.image = data.imageLinks
      ? data.imageLinks.smallThumbnail
      : "https://image.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg";
    this.link = data.previewLink;
  }
}
export default DataService;
