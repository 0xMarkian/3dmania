import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import PoppinsFontLight from 'fonts/Poppins/Poppins-Light.ttf'
import PoppinsFontSemiBold from 'fonts/Poppins/Poppins-SemiBold.ttf'

import Nav from 'components/Nav';
import Header from 'components/Header'

@injectSheet({
  '@global': {
    '@font-face': {
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        src: `url(${PoppinsFontLight}) format("opentype")`,
    },
    '@font-face': {
        fontFamily: 'PoppinsBold',
        fontWeight: 900,
        src: `url(${PoppinsFontSemiBold}) format("opentype")`,
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
    color: commonStyles.baseFontColor,
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
