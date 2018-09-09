import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {Container} from 'reactstrap'

import Nav from 'components/Nav';
import Header from 'components/Header'
import ProcessSection from 'components/ProcessSection'
import LongBoardProject from 'components/LongBoardProject'

@injectSheet({
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
      <Container fluid={true} className={classes.App}>
        <Nav />
        <Header />
        <ProcessSection />
        <LongBoardProject/>
      </Container>
    );
  }
}

export default hot(module)(App);
