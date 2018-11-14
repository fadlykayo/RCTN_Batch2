import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './style.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="header">
        <div className="navbar">
          <p>Header</p>
          <p>{this.props.people}</p>
          <button onClick={ () => this.props.onClickHandle() } style={{backgroundColor: 'pink', padding: 10}}>Save</button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  people: PropTypes.string.isRequired,
  onClickHandle: PropTypes.func,
}
