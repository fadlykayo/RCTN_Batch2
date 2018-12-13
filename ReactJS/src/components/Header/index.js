import React, { Component } from "react";
import {
  Button,
  Hero,
  HeroBody,
  Title,
  Subtitle,
  Container,
  Icon
} from "bloomer";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  userActions,
} from '../../actions';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      inputFile: null,
    };
  };

  // componentDidMount() {
  //   this.props.ubahUserName();
  // }

  handleClick() {
    this.props.ubahUserName();
  };

  handleClickBirthYear() {
    this.props.ubahBirthYear();
  };

  handleChange(e) {
    this.setState({
      inputName: e.target.value,
    });
  };

  handleChangeFile(e) {
    this.setState({
      inputFile: e.target.files[0].name,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.ubahUserNameSuccess(this.state.inputFile);
  };

  render() {
    return (
      <Hero isColor="light" isSize="small">

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputName} onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" value="Submit" />
          <input type="file" onChange={ (e) => this.handleChangeFile(e) } />
        </form>

        <p style={{backgroundColor: 'pink', padding: 20}}>{ this.props.loading }</p>
        <HeroBody>
          <Container hasTextAlign="centered">
            <Icon className="fa fa-stroopwafel" />
            <Title>Atas</Title>
            <Subtitle>Created by: {this.props.user.username}</Subtitle>
            <Button isColor="warning" onClick={() => this.handleClick()}>
              Change Creator
            </Button>
            <Subtitle>Birth Year: {this.props.user.birth_year}</Subtitle>
            <Button isColor="warning" onClick={() => this.handleClickBirthYear()}>
              Change Birth Year
            </Button>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
}

// Header.propTypes = {
//   people: PropTypes.object,
//   onClick: PropTypes.func
// };

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loading: state.loading.loadingMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ubahUserName: () => dispatch(userActions.ubahUserName()),
    ubahUserNameSuccess: (name) => dispatch(userActions.ubahUserNameSuccess(name)),
    ubahEmail: () => dispatch(userActions.ubahEmail()),
    ubahBirthYear: () => dispatch(userActions.ubahBirthYear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
