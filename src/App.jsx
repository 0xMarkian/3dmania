import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import injectSheet from 'react-jss';
import { Button } from 'reactstrap';
import defaultStyles from './styles';

import Nav from './components/Nav';

@injectSheet({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      position: 'relative',
    },
    body: {
      margin: 0,
    },
  },
  App: {
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
        <Button color="primary">test</Button>
      </div>
    );
  }
}

export default hot(module)(App);
