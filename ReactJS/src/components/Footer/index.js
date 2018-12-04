import React, { Component } from "react";
import { connect } from 'react-redux';

import "./style.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerQ">
        <p style={{marginRight: 20}}>{this.props.footer}</p>
        <p style={{marginRight: 20}}>{this.props.orang.username}</p>
        <button onClick={null}>Click Me</button>
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
