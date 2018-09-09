import Section from 'components/Section'

const { breakpoints } = commonStyles

export default compose(injectSheet({
  SectionWrapper: {
    paddingTop: '8%',
    background: commonStyles.secondaryColor,
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
      color: `!important`,
    },
  },
  [breakpoints.md.lt]: {
    Title: {
      textAlign: 'center',
    },
    Subtitle: {
      textAlign: 'center',
    },
    Button: {
      margin: '0 auto',
    },
  },
  NoBr: {
    whiteSpace: 'nowrap',
  },
}), hot(module))(
  ({ classes }) => (
    <Section className={classes.SectionWrapper}>
      <h3 className={classes.Subtitle}>Change starts here</h3>
      <h1 className={classes.Title}>Want to get connected? <span className={classes.NoBr}>Let's chat.</span></h1>
      <a className={classes.Button}>Email us today</a>
    </Section>
  )
)