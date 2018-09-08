import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import injectSheet from 'react-jss';
import PoppinsFont from 'fonts/Poppins/Poppins-Light.ttf'

import Nav from 'components/Nav';
import Header from 'components/Header'

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
    a: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    body: {
      margin: 0,
    },
  },
  App: {
    fontFamily: 'Poppins',
    fontSize: commonStyles.baseFontSize,
    background: commonStyles.baseColor,
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
        <Header />
      </div>
    );
  }
}

export default hot(module)(App);
