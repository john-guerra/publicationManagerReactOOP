import { Component } from "react";

import "./App.css";

import CreatePublicationForm from "../components/CreatePublicationForm.js";
import PublicationsGallery from "../components/PublicationsGallery.js";
import ClickableTable from "../components/ClickableTable.js";

import PublicationManager from "../models/PublicationManager.js";

import BasePage from "../pages/BasePage.js";

class App extends Component {
  constructor(props) {
    // call the constructor of Component
    super(props);
    this.pm = new PublicationManager();
    this.state = {
      publications: [],
    };
    this.onCreatePublication = this.onCreatePublication.bind(this);

    console.log("constructor");
  }

  componentDidMount() {
    console.log("CDM getting publications");
    this.getPublicationsAndRender();
    console.log("done getting publications?");
  }

  /**
   * Queries the PM for the current list of publications, then changes the state to the component re renders
   */
  getPublicationsAndRender() {
    this.pm.getPublications((publications) => {
      console.log("got publications");
      this.setState({
        publications,
      });
    });
  }

  onCreatePublication(title, author) {
    this.pm.addPublication({ title, author }, (res) => {
      console.log("The pub was inserted", res);

      this.getPublicationsAndRender();
    });
  }

  render() {
    console.log("render", this.state);
    return (
      <div className="App">
        <div>
          <BasePage>
            <h1>Publication Manager</h1>
            <div className="mb-5">The place to control your publications</div>
            <hr />

            <CreatePublicationForm
              onCreatePublication={this.onCreatePublication}
            ></CreatePublicationForm>

            <PublicationsGallery
              publications={this.state.publications}
            ></PublicationsGallery>

            <ClickableTable></ClickableTable>
          </BasePage>
        </div>
      </div>
    );
  }
}

export default App;
