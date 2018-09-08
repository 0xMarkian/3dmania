import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import injectSheet from 'react-jss'
import defaultStyles from './styles'
import 'normalize.css'

import Nav from './components/Nav/'


@injectSheet({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      position: 'relative',
    },
    'body':{
      margin: 0,
    }
  },
  App: {
    background: defaultStyles.baseColor,
    overflow: 'auto',
    position: 'relative',
  }
})
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.App}>
        <Nav/>
      </div>
    )
  }
}

export default hot(module)(App);
