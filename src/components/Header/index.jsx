import {Container, Row, Col} from 'reactstrap'

const { } = commonStyles

export default compose(injectSheet(({defaultSection, breakpoints, highlightedColor}) => ({
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
    color: highlightedColor,
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
      textAlign: 'left',
    },
    Description: {
      textAlign: 'justify',
    },
  },

  [breakpoints.sm.lt]: {
    SectionWrapper: {paddingTop: '40%'},
    Heading: {fontSize: '3em'}
  },
})))(
  ({ classes, ...props }) => (
    <header className={classes.SectionWrapper} {...props}>
      <Container>
        <Row>
          <Col>
            <h1 className={classes.Heading}>
              We<br/>
              <span className={classes.HighlightedText}>make </span>
              dreams <br/>reality
            </h1>
          </Col>
        </Row>
        <p className={classes.Description}>
          3dmania helps young startups, businesses and just curious people create solutions, utilizing most advanced Digital Manufacturing and IT technologies. Agile Product Development & Rapid prototyping 
        </p>
      </Container>
    </header>
  )
)
