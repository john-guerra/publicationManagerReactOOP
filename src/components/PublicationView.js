import React, { Component } from "react";

export class PublicationView extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title"> Sample publication</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Iste
              expedita eos id pariatur nihil ex nemo commodi, sint aperiam hic
              dolorum distinctio laboriosam dolore tempora reiciendis
              consequatur delectus provident illo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PublicationView;
