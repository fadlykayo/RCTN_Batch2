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
  handleClick() {
    this.props.ubahUserName();
  };

  handleClickGender() {
    this.props.ubahGender();
  };

  render() {
    return (
      <Hero isColor="light" isSize="small">
        <HeroBody>
          <Container hasTextAlign="centered">
            <Icon className="fa fa-stroopwafel" />
            <Title>Atas</Title>
            <Subtitle>Created by: {this.props.people.username}</Subtitle>
            <Button isColor="warning" onClick={() => this.handleClick()}>
              Change Creator
            </Button>
            <Subtitle>Gender: {this.props.people.gender}</Subtitle>
            <Button isColor="warning" onClick={() => this.handleClickGender()}>
              Change Gender
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
    people: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ubahUserName: () => dispatch(userActions.ubahUserName()),
    ubahEmail: () => dispatch(userActions.ubahEmail()),
    ubahGender: () => dispatch(userActions.ubahGender())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
