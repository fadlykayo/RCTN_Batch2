import React, { Component } from 'react';

import Header from '../../components/Header';

import './style.css';

export default class Login extends Component {
  render() {
    return (
      <div>

        <Header people={ 'gedung' } onClickHandle={ () => alert('gedung PP') }/>

      </div>
    );
  }
}
