/**
 * Publication class, holds all the information for each publication
 */
export class Publication {
  title;
  author;

  constructor(_title, _author) {
    this.title = _title;
    this.author = _author;
  }
}


export default Publication;