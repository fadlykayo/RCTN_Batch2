import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../actions"

import "./style.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerQ">
        <p style={{marginRight: 20}}>{this.props.footer}</p>
        <p style={{marginRight: 20}}>{this.props.user.phone_number}</p>
        <button onClick={ () => this.props.ubahPhoneNumber('111111') }>Click Me</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ubahPhoneNumber: () => dispatch(userActions.ubahPhoneNumber())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
