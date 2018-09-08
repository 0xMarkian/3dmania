import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import defaultStyles from 'styles';
import PoppinsFont from 'fonts/Poppins/Poppins-Light.ttf'

import Nav from 'components/Nav';

@injectSheet({
  '@global': {
    '@font-face': {
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        src: `url(${PoppinsFont}) format("opentype")`,
    },
    '*': {
      boxSizing: 'border-box',
      position: 'relative',
    },
    body: {
      margin: 0,
    },
  },
  App: {
    fontFamily: 'Poppins',
    fontSize: defaultStyles.defaultFontSize,
    background: defaultStyles.baseColor,
    overflow: 'auto',
    position: 'relative',
  },
})
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.App}>
        <Nav />
      </div>
    );
  }
}

export default hot(module)(App);
