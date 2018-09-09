import {Container, Row, Col} from 'reactstrap'

import googleLogo from 'images/partners/google.png'

const { defaultSection, breakpoints } = commonStyles

export default compose(injectSheet({
  SectionWrapper: {
    ...defaultSection,
  },
  Heading: {
    color: 'white',
    fontWeight: 'bold',
  },
  HighlightedText: {
    color: commonStyles.highlightedColor,
  },
  Description: {
    color: '#bbb',
    marginTop: '2em',
  },
  PartnersWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: '50px',
  },
  Partner: {
    width: '10%',
  },

  [breakpoints.md.gt]: {
    SectionWrapper: {
      paddingTop: '5%',
    },
    Heading: {
      fontSize: '4em',
      textAlign: 'left',
    },
    Description: {
      textAlign: 'left',
    },
  },

  [breakpoints.md.lt]: {
    SectionWrapper: {
      paddingTop: '20%',
    },
    Heading: {
      fontSize: '3.5em',
      textAlign: 'center',
    },
    Description: {
      textAlign: 'justify',
    },
  },

  [breakpoints.sm.lt]: {
    SectionWrapper: {paddingTop: '30%'},
    Heading: {fontSize: '3em'}
  },
}), hot(module))(
  ({ classes }) => (
      <header className={classes.SectionWrapper}>
        <Container>
          <Row>
            <Col>
              <h1 className={classes.Heading}>
                Creating<br/>
                connections<br/>
                that <span className={classes.HighlightedText}>count</span>
              </h1>
            </Col>
          </Row>
          <p className={classes.Description}>rehab helps brands create scalable, one-to-one relationships with people through the tech they love. We're leaders in using voice, messaging, AR, web-based products and service design to create branded utilities and experiences that truly impact people's lives.</p>
          <div className={classes.PartnersWrapper}>
            <img className={classes.Partner} src={googleLogo} alt='Google'/>
            <img className={classes.Partner} src={googleLogo} alt='Google'/>
            <img className={classes.Partner} src={googleLogo} alt='Google'/>
            <img className={classes.Partner} src={googleLogo} alt='Google'/>
            <img className={classes.Partner} src={googleLogo} alt='Google'/>
          </div>
          </Container>
      </header>
  )
)
