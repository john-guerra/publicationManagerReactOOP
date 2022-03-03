import React, { Component } from "react";
import PropTypes from "prop-types";

export class PublicationView extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.pub.title}</h5>
            <p className="card-text">
              {this.props.pub.author}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

PublicationView.propTypes ={
  pub : PropTypes.object.isRequired
}

export default PublicationView;
