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
    this.props.ubahEmail();
  };

  render() {
    return (
      <Hero isColor="light" isSize="small">
        <HeroBody>
          <Container hasTextAlign="centered">
            <Icon className="fa fa-stroopwafel" />
            <Title>Atas</Title>
            <Subtitle>Created by: {this.props.people.email}</Subtitle>
            <Button isColor="warning" onClick={() => this.handleClick()}>
              Change Creator
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
    ubahUserName: (name) => dispatch(userActions.ubahUserName(name)),
    ubahEmail: () => dispatch(userActions.ubahEmail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
