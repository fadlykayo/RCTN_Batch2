/*
Resourceful links for this session:
https://reactjs.org/docs/typechecking-with-proptypes.html
https://blog.tylerbuchea.com/react-proptypes/
https://github.com/danilowoz/react-atomic-design
*/

// ========= PropTypes =========

// source: https://reactjs.org/docs/typechecking-with-proptypes.html
// install: npm install prop-types --save

// The old way:

import React, { Component } from 'react';

Detail.propTypes = {
  caption: React.PropTypes.string.isRequired,
  style: React.PropTypes.objectOf(
    React.PropTypes.string
  ),
};

class Detail extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <p style={ this.props.style }>{ this.props.caption }</p>
      </div>
    );
  }
}

export default Detail;

// The new way:

import React, { Component } from 'react';
import PropTypes from 'prop-types';

Detail.propTypes = {
  caption: PropTypes.string.isRequired,
  style: PropTypes.objectOf(
    PropTypes.string
  ),
};

class Detail extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <p style={ this.props.style }>{ this.props.caption }</p>
      </div>
    );
  }
}

export default Detail;

// or like this:

import React, { Component } from 'react';
import { string, objectOf } from 'prop-types';

Detail.propTypes = {
  caption: string.isRequired,
  style: objectOf(
    string
  ),
};

class Detail extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <p style={ this.props.style }>{ this.props.caption }</p>
      </div>
    );
  }
}

export default Detail;

// Sources:

// https://reactjs.org/docs/typechecking-with-proptypes.html
