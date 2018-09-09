import { Row, Col } from 'reactstrap'
import Section from 'components/Section'

const { breakpoints } = commonStyles

export default compose(injectSheet(theme => ({
  SectionWrapper: {
    paddingTop: '8%',
    background: theme.ConnectSection.accentColor,
  },
  Subtitle: {
    fontWeight: 500,
    fontSize: '1.2em',
  },
  Title: {
    fontSize: '3em',
    margin: '0.8em 0',
  },
  Button: {
    cursor: 'pointer',
    display: 'inline-block',
    padding: '1em 2em',
    border: '5px solid white',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    fontWeight: 500,
    '&:hover': {
      background: 'white',
      color: `${theme.ConnectSection.accentColor}!important`,
    },
  },
  [breakpoints.md.lt]: {
    Title: {
      textAlign: 'center',
    },
    Subtitle: {
      width: '100%',
      textAlign: 'center',
    },
    Button: {
      marginLeft: '50%',
      transform: 'translateX(-50%)',
    },
  },
  NoBr: {
    whiteSpace: 'nowrap',
  },
})
))(
  ({ classes, ...props}) => (
    <Section className={classes.SectionWrapper} {...props}>
      <Row>
          <h3 className={classes.Subtitle}>Change starts here</h3>
          <h1 className={classes.Title}>Want to get connected? <span className={classes.NoBr}>Let's chat.</span></h1>
      </Row>
      <Row>
        <a className={classes.Button}>Email us today</a>
      </Row>
    </Section>
  )
)
