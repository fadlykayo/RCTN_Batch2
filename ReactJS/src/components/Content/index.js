import React, { Component } from "react";
import axios from "axios";

import "./style.css";
import style from "./style.js";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.actors[0] !== this.props.actors[0]) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }

  renderContent() {
    if (this.props.actors.length > 0) {
      return this.props.actors.map((actor, index) => {
        return (
          <div key={index}>
            <p>{actor}</p>
            <br />
          </div>
        );
      });
    } else {
      return (
        <div>
          <p>Loading data...</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="contentQ">
          <div className="innerContent">
            <p>{this.props.location}</p>
            <p>{this.props.date}</p>
            <button
              onClick={() => this.props.onClick()}
              style={{ backgroundColor: "orange", padding: 10 }}
            >
              Change Place
            </button>
          </div>
        </div>
        <p style={{ backgroundColor: "red", color: "white", padding: 10 }}>
          Nama aktor telah berubah {this.state.counter} kali.
        </p>
        { this.renderContent() }
      </div>
    );
  }
}
