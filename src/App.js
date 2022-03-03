import { Component } from "react";

import "./App.css";

import CreatePublicationForm from "./components/CreatePublicationForm.js";
import PublicationsGallery from "./components/PublicationsGallery.js";

// import PublicationManager from "./models/PublicationManager.js";

import Publication from "./models/Publication.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publications: [
        new Publication("War and Peace", "John"),
        new Publication("The Martian", "John"),
        new Publication("The lord of the rings", "John"),
        new Publication("Is this clear?.com", "John")
      ],
    };

    // create some starting data
    this.initializeData();

    this.onCreatePublication = this.onCreatePublication.bind(this);
  }

  /**
   * Basic function for creating some starting data
   */
  initializeData() {}

  /**
   * Collects and joins all the titles from the publications
   * @return {[type]} [description]
   */
  getAllTitles() {
    let allPubs = "";

    for (let pub of this.state.publications) {
      allPubs += pub.title + " - ";
    }

    return allPubs;
  }

  onCreatePublication(title, author) {
    this.setState({
      publications: [
        ...this.state.publications,
        new Publication(title, author),
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Publication Manager</h1>
        <div className="mb-5">The place to control your publications</div>
        <hr />
        <CreatePublicationForm
          onCreatePublication={this.onCreatePublication}
        ></CreatePublicationForm>

        <PublicationsGallery
          publications={this.state.publications}
        ></PublicationsGallery>
      </div>
    );
  }
}

export default App;
