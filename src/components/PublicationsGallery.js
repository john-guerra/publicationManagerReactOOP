import React, { Component } from "react";
import PropTypes from "prop-types";

import PublicationView from "./PublicationView.js";


/**
 * Just to demonstrate a controlled component
 */
class SearchComponent extends Component {
  render() {
    return (
      <div>
        <div></div>
        <label className="form-label mb-2">
          Search:
          <input
            type="text"
            value={this.props.searchQuery}
            onChange={(evt) => this.props.onChangeSearchQuery(evt.target.value)}
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

export class PublicationsGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };
  }

  /**
   * A helper method to render just the publications.
   * @return {JSX} the element containing the publications
   */
  renderPublications() {
    return this.props.publications
      .filter((p) => p.title.indexOf(this.state.searchQuery) !== -1)
      .slice(0, 20)
      .map((p, i) => (
        <PublicationView key={"pub" + i} pub={p}></PublicationView>
      ));
  }

  onChangeSearchQuery(_newQuery) {
    this.setState({
      searchQuery: _newQuery,
    });
  }

  render() {
    return (
      <div className="row">
        <SearchComponent
          searchQuery={this.state.searchQuery}
          onChangeSearchQuery={this.onChangeSearchQuery.bind(this)}
        ></SearchComponent>

        <div className="mb-3">
          You searched for: <output>{this.state.searchQuery}</output>
        </div>
        {this.renderPublications()}
      </div>
    );
  }
}

PublicationsGallery.propTypes = {
  publications: PropTypes.array.isRequired,
};

export default PublicationsGallery;
