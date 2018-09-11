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

    const sections = [
      {
        id: 'header-section',
        name: 'Header',
        Component: Header,
      },
      {
        id: 'process-section',
        name: 'Process',
        Component: ProcessSection,
      },
      {
        id: 'longboard-project-section',
        name: 'Longboard',
        Component: LongBoardProject,
      },
      {
        id: 'farmbot-project-section',
        name: 'Farmbot',
        Component: FarmBotProject,
      },
      {
        id: 'connect-section',
        name: 'Connect Us',
        Component: ConnectSection,
      },
      {
        id: 'about-section',
        name: 'About Us',
        Component: Footer,
      }
    ]

    return (
      <ThemeProvider theme={theme}>
        <Container fluid={true} className={classes.App}>
          <Nav sections={sections}/>
          {
            sections.map(({Component, id}) => <Component key={id} id={id} />)
          }
        </Container>
      </ThemeProvider>
    );
  }
}

export default hot(module)(App);
