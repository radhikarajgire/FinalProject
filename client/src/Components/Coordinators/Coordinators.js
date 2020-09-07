import React, { Component } from "react";
import "./Coordinators.css";

class Coordinators extends Component {
  constructor() {
    super();
    this.state = {
      coordinators: [],
    };
  }

  componentDidMount() {
    fetch("/api/coordinators")
      .then((res) => res.json())
      .then((coordinators) =>
        this.setState({ coordinators }, () =>
          console.log("Customers fetched...", coordinators)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>We the creators</h2>
        <ul>
          {this.state.coordinators.map((coordinators) => (
            <li key={coordinators.id}>
              {coordinators.firstName} {coordinators.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Coordinators;
