import React, { Component } from "react";

export default class ClickableTable extends Component {
  onClick(who) {
    return () => {
      console.log("Click", who);
    };
  }

  render() {
    return (
      <div>
        <table>
          <th>
            <td>Name</td>
            <td></td>
          </th>
          <tr>
            <td>One</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={this.onClick("John")}
              >
                Click John
              </button>
            </td>
          </tr>
          <tr>
            <td>One</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={this.onClick("Alexis")}
              >
                Click Alexis
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
