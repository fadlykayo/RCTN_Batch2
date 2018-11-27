import React, { Component } from "react";
import PropTypes from "prop-types";

import "./style.css";

const Header = ({ onClick, people }) => {
  return (
    <div className="headerQ">
      <div className="navbarQ">
        <p>Header</p>
        <p>People: {people}</p>
        <button
          onClick={() => onClick()}
          style={{ backgroundColor: "pink", padding: 10 }}
        >
          Change People
        </button>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  people: PropTypes.string.isRequired,
  onClickHandle: PropTypes.func
};
