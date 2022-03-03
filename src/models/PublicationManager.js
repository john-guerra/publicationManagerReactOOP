import Publication from "./Publication.js";

/**
 * Main class for the project, contains the lists of publications
 */
class PublicationManager {
  /**
   * The list of publications
   * @type {Array} of Publication
   */
  publications = [];

  /**
   * Collects and joins all the titles from the publications
   * @return {[type]} [description]
   */
  getAllTitles() {
    let allPubs = "";

    for (let pub of this.publications) {
      allPubs += pub.title + " - ";
    }

    return allPubs;
  }

  addPublication(_title) {
    this.publications.push(new Publication(_title));
  }


  /**
   * Basic function for creating some starting data
   */
  initializeData() {
    this.addPublication("War and Peace");
    this.addPublication("The Martian");
    this.addPublication("The lord of the rings");
    this.addPublication("Is this clear?.com");

  }
}

export default PublicationManager;
