import trim from "./helper";

class DataService {
  constructor(data) {
    this.title = data.title.length > 100 ? trim(data.title) : data.title;
    this.author = data.authors ? trim(data.authors) : "Unknown author";
    this.publisher = data.publisher
      ? trim(data.publisher)
      : "Unknown publisher";
    this.image = data.imageLinks
      ? data.imageLinks.thumbnail
      : "https://image.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg";
    this.link = data.previewLink;
  }
}
export default DataService;
