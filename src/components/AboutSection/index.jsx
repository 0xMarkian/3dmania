import { Row, Col } from 'reactstrap'
import Section from 'components/Section'

export default compose(injectSheet(({baseColor, breakpoints}) => ({
  SectionWrapper: {
    background: 'white',
    color: baseColor,
  },
  Section: {
    marginTop: '5%',
  },
  [breakpoints.md.lt]: {
    Section: {
      '&:not(:first-child)': {
        marginTop: '10%',
      },
    },
  },
  Title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '1em',
  },
})))(
  ({ classes, ...props}) => (
    <Section className={classes.SectionWrapper} {...props}>
      <Row>
        <Col md={6} className={classes.Section}>
          <h1 className={classes.Title}>Mission</h1>
          <p>To truly understand our customers, their values and needs in our pursue of creating great products.</p>
        </Col>
        <Col md={6} className={classes.Section}>
          <h1 className={classes.Title}>Vision</h1>
          <p>To do the projects that change the world.</p>
        </Col>
      </Row>
    </Section>
  )
)
