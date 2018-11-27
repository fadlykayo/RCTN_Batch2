import React, { Component } from "react";

import "./style.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.footer !== nextProps.footer) {
      // alert("BOO");
      return true;
    }

    return false;
  }

  render() {
    return (
      <div className="footer">
        <p>{this.props.footer}</p>
      </div>
    );
  }
}
