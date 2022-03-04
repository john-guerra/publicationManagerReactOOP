import { Component } from "react";

import "./App.css";

import CreatePublicationForm from "./components/CreatePublicationForm.js";
import PublicationsGallery from "./components/PublicationsGallery.js";

import PublicationManager from "./models/PublicationManager.js";

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
    this.pm.getPublications((publications) => {
      console.log("got publications")
      this.setState({
        publications
      })
    })
    console.log("done getting publications?");


  }



  onCreatePublication(title, author) {

    this.pm.addPublication(title, author);
    // this.setState({
    //   publications: [
    //     ...this.state.publications,
    //     new Publication(title, author),
    //   ],
    // });
  }

  render() {
    console.log("render", this.state);
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
