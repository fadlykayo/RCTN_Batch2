import React, { Component } from "react";

import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerQ">
        <p>{this.props.footer}</p>
      </div>
    );
  }
}
