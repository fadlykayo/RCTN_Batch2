import React, { Component } from 'react';

import {
  Header,
  Footer,
  Content,
} from '../../components';

import './style.css';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      people: 'hacktiv8'
    }
  };

  handleClick() {
    this.setState({ people: 'Pacific Place' })
  };

  render() {
    return (
      <div>

        <Header people={ this.state.people } onClickHandle={ () => this.handleClick() }/>

        <Content />

        <Footer />

      </div>
    );
  }
}
