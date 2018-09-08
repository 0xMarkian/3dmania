import Section from '../Section'

export default compose(
  injectSheet({
    ProcessSection: {
      background: 'white',
      paddingTop: '5%',
      color: commonStyles.baseColor,
    },
    Title: {
      margin: '1em 0',
      fontWeight: 'bold',
    },
    HighlightedText: {
      color: commonStyles.highlightedColor,
    },
    Subtitle: {
      color: '#bbb',
    },
    StepsContainer: {
      marginTop: '5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    StepWrapper: {
      width: '18%',
    },
    FullStep: {
      paddingTop: '100%',
      background: '#242424',
      borderRadius: '50%',
    },
    HalfStep: {
      extend: 'FullStep',
      margin: '0 auto',
      paddingTop: '75%',
      width: '75%',
      '&:first-child': {
        marginBottom: '20%',
      },
    },
  })
)( ({ classes }) => (
  <Section className={classes.ProcessSection}>
    <h4 className={classes.Subtitle}>Process</h4>
    <h1 className={classes.Title}>Introducing Triage,
      our method of
      <br/>
      <span className={classes.HighlightedText}>ensuring the work really works.</span>
    </h1>
    <div className={classes.StepsContainer}>
      <div className={classes.StepWrapper}>
        <div className={classes.FullStep}></div>
      </div>
      <div className={classes.StepWrapper}>
        <div className={classes.FullStep}></div>
      </div>
      <div className={classes.StepWrapper}>
        <div className={classes.FullStep}></div>
      </div>
      <div className={classes.StepWrapper}>
        <div className={classes.HalfStep}></div>
        <div className={classes.HalfStep}></div>
      </div>
    </div>
  </Section>
))
