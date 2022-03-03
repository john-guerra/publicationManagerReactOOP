import React, { Component } from "react";

export class CreatePublicationForm extends Component {
  render() {
    return (
      <div>
        <h2>Create Publication</h2>
        <form>
          <div className="mb-3">
            <label className="form-label"> Title:
              <input type="text" className="form-control" name="title" />
            </label>
          </div>

          <div className="mb-3">
            <button className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePublicationForm;
