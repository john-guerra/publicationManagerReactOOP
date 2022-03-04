import React, { Component } from "react";

import BasePage from "./BasePage.js";

class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: "student",
    };
  }
  renderProfessorOptions() {
    return (
      <div>
        <h2>Professor you rule</h2>
        I'm the benevolent dictator
        <button className="btn btn-danger">Zero for all the grades</button>
      </div>
    );
  }
  renderStudentOptions() {
    return (
      <div>
        <h2>Poor student</h2>I'm the benevolent dictator
      </div>
    );
  }

  onChangeProfile(evt) {
    this.setState({ profile: evt.target.value });
  }

  render() {
    return (
      <BasePage>
        <h1>About {this.props.site}</h1>{" "}
        <label>
          {" "}
          Mode:{" "}
          <select
            className="form-select"
            aria-label="Select the default template"
            onChange={this.onChangeProfile.bind(this)}
          >
            <option value="professor">Professor</option>
            <option value="student">Student</option>
          </select>
        </label>
        {this.state.profile === "professor"
          ? this.renderProfessorOptions()
          : this.renderStudentOptions()}
      </BasePage>
    );
  }
}

export default AboutPage;
