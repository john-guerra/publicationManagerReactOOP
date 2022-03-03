import React, { Component } from "react";
import PropTypes from "prop-types";


import PublicationView from "./PublicationView.js";


export class PublicationsGallery extends Component {
  /**
   * A helper method to render just the publications.
   * @return {JSX} the element containing the publications
   */
  renderPublications() {
    return this.props.publications.map((p, i) => (
      <PublicationView key={"pub"+i} pub={p}></PublicationView>
    ));
  }

  render() {
    return <div className="row">{this.renderPublications()}</div>;
  }
}

PublicationsGallery.propTypes = {
  publications: PropTypes.array.isRequired,
};

export default PublicationsGallery;
