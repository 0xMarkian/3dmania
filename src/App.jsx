import { ThemeProvider } from 'react-jss'
import { Container } from 'reactstrap'

import theme from 'styles'

import Nav from 'components/Nav'
import Header from 'components/Header'
import ProcessSection from 'components/ProcessSection'
import LongBoardProject from 'components/LongBoardProject'
import FarmBotProject from 'components/FarmBotProject'
import ConnectSection from 'components/ConnectSection'
import Footer from 'components/Footer'

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
class App extends React.Component {
  render() {
    const { classes } = this.props

    const sections = ['header-section', 'process-section', 'longboard-project-section', 'connect-section', 'about-section']

    return (
      <ThemeProvider theme={theme}>
        <Container fluid={true} className={classes.App}>
          <Nav sections={sections}/>
          <Header id='header-section' />
          <ProcessSection id='process-section' />
          <LongBoardProject id='longboard-project-section' />
          <ConnectSection id='connect-section' />
          <Footer id='about-section' />
        </Container>
      </ThemeProvider>
    );
  }
}

export default hot(module)(App);
