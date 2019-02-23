class DataService {
  constructor(data) {
    this.title = data.title;
    this.author = data.authors;
    this.publisher = data.publisher;
    this.image = data.imageLinks.smallThumbnail;
    this.link = data.previewLink;
  }
}

export default DataService;
