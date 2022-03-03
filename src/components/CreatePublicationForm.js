import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

export class CreatePublicationForm extends Component {
  constructor(props) {
    super(props);

    this.refForm = createRef();

    this.onCreatePublication = this.onCreatePublication.bind(this);
  }

  onCreatePublication(evt) {
    // Avoids redrawing the whole page
    evt.preventDefault();

    const fd = new FormData(this.refForm.current);

    console.log("create Publication title=", fd.get("title"));

    const title = fd.get("title"),
      author = fd.get("author");


    this.props.onCreatePublication(title, author);
    // I need to access the current title in the form
    //
    //
  }

  render() {
    return (
      <div>
        <h2>Create Publication</h2>
        <form ref={this.refForm}>
          <div>
            <label className="form-label">
              {" "}
              Title:
              <input type="text" className="form-control" name="title" />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              {" "}
              Author:
              <input type="text" className="form-control" name="author" />
            </label>
          </div>

          <div className="mb-3">
            <button
              onClick={this.onCreatePublication}
              className="btn btn-primary"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CreatePublicationForm.propTypes = {
  onCreatePublication : PropTypes.func.isRequired
}

export default CreatePublicationForm;
