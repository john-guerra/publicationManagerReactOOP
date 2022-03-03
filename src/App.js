import { Component } from "react";

import "./App.css";

import CreatePublicationForm from "./components/CreatePublicationForm.js";
import PublicationsGallery from "./components/PublicationsGallery.js";

import PublicationManager from "./models/PublicationManager.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.pm = new PublicationManager();
    // create some starting data
    this.pm.initializeData();
  }

  render() {
    return (
      <div className="App">
        <h1>Publication Manager</h1>
        <div className="mb-5">The place to control your publications</div>
        <hr />
        <CreatePublicationForm></CreatePublicationForm>

        <PublicationsGallery
          publications={this.pm.publications}
        ></PublicationsGallery>
      </div>
    );
  }
}

export default App;
