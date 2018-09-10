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
        content: Header,
      },
      {
        id: 'process-section',
        name: 'Process',
        content: ProcessSection,
      },
      {
        id: 'longboard-project-section',
        name: 'Longboard',
        content: LongBoardProject,
      },
      {
        id: 'farmbot-project-section',
        name: 'Farmbot',
        content: FarmBotProject,
      },
      {
        id: 'connect-section',
        name: 'Connect Us',
        content: ConnectSection,
      },
      {
        id: 'about-section',
        name: 'About Us',
        content: Footer,
      }
    ]

    const filteredSections = sections.map(({id, name}) => ({id, name}))

    return (
      <ThemeProvider theme={theme}>
        <Container fluid={true} className={classes.App}>
          <Nav sections={filteredSections}/>
          {
            sections.map((section, index) => (
              <section.content key={index} id={section.id} />
            ))
          }
        </Container>
      </ThemeProvider>
    );
  }
}

export default hot(module)(App);
