import React, { Component } from "react";
import { connect } from 'react-redux';

import "./style.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerQ">
        <div style={{marginRight: 20}}>
          <p>{this.props.footer}</p>
        </div>
        <div style={{marginRight: 20}}>
          <p>{this.props.orang.username}</p>
        </div>
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
