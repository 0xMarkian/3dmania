import {Container, Row, Col} from 'reactstrap'

const { defaultSection, breakpoints } = commonStyles

export default compose(injectSheet({
  SectionWrapper: {
    ...defaultSection,
    marginTop: '5%',
    padding: '5% 0',
  },
  Heading: {
    fontSize: '4em',
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
}))(
  ({ classes, ...props }) => (
    <header className={classes.SectionWrapper} {...props}>
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
      </Container>
    </header>
  )
)
