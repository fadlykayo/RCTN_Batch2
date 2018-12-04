import React, { Component } from "react";
import { connect } from 'react-redux';

import "./style.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerQ">
        <p>{this.props.footer}</p>
        <p>{this.props.orang.email}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orang: state.user
  };
};

export default connect(mapStateToProps, null)(Footer);
