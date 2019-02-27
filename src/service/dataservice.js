import { trim, trimAuthors } from "./helper";

class DataService {
  constructor(data, id) {
    this.title = data.title ? trim(data.title) : data.title;
    this.author = data.authors ? trimAuthors(data.authors) : "Unknown author";
    this.publisher = data.publisher
      ? trim(data.publisher)
      : "Unknown publisher";
    this.image = data.imageLinks
      ? data.imageLinks.thumbnail
      : "https://image.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg";
    this.link = data.previewLink;
    this.id = id;
  }
}
export default DataService;
