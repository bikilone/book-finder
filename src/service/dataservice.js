class DataService {
  constructor(data) {
    this.title =
      data.title.length > 110 ? data.title.slice(0, 110) : data.title;
    this.author = data.authors ? data.authors : "Unknown author";
    this.publisher = data.publisher ? data.publisher : "Unknown publisher";
    this.image = data.imageLinks
      ? data.imageLinks.thumbnail
      : "https://image.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg";
    this.link = data.previewLink;
  }
}
export default DataService;
