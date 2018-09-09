import Section from 'components/Section'

export default compose(injectSheet({
  SectionWrapper: {
    paddingTop: '8%',
    background: '#4f48ff',
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
    fontWeight: 500,
    '&:hover': {
      background: 'white',
      color: '#4f48ff!important',
    },
  }
}), hot(module))(
  ({ classes }) => (
    <Section className={classes.SectionWrapper}>
      <h3 className={classes.Subtitle}>Change starts here</h3>
      <h1 className={classes.Title}>Want to get connected? Let's chat.</h1>
      <a className={classes.Button}>Email us today</a>
    </Section>
  )
)
