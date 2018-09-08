import Section from '../Section'

export default compose(
  injectSheet({
    ProcessSection: {
      background: 'white',
    }
  })
)( ({ classes }) => (
  <Section className={classes.ProcessSection}>
    <h2>Process</h2> 
  </Section>  
))
