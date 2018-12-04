import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./style.css";

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }

  redirect = () => {
    return (
      <Redirect
        to={{
          pathname: "/login"
        }}
      />
    )
  }

  render() {
    return this.props.isLogin ? (
      <h2>Logout</h2>
    ) : this.redirect();
  }
}
