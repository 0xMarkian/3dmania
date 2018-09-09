const { breakpoints } = commonStyles

export default compose(injectSheet({
  FullStep: {
    width: '100%',
    paddingTop: '100%',
    background: '#242424',
    borderRadius: '50%',
  },
  HalfStep: {
    extend: 'FullStep',
  },
  AdditionalHalfStep: {
    extend: 'FullStep',
    zIndex: 2,
    width: '60%',
    paddingTop: '60%',
    background: '#242424',
    position: 'absolute',
    right: '-18%',
    top: '-18%',
    color: 'white',
    fontSize: '0.7em',
  },
  StepContent: {
    width: '100%',
    position: 'absolute',
    top: 0,
    textAlign: 'center',
  },
  StepTitle: {
    marginTop: '30%',
    fontSize: '0.9em',
    color: commonStyles.highlightedColor,
  },
  StepDesc: {
    color: 'white',
    fontSize: '0.7em',
    listStyle: 'none',
  },
  [breakpoints.lg.gt]: {
    HalfStep: {
      margin: '0 auto',
      '&:first-child': {
        marginBottom: '20%',
      },
    },
  },
  [breakpoints.lg.lt]: {
    HalfStep: {
      display: 'inline-block',
      margin: '0 10%',
      '&:first-child': {marginLeft: '-60%'},
      '&:last-child': {marginRight: '-60%'},
    },
  },
}), hot(module))(
  ({ classes, type, content }) => (
    <div className={classes[type]}>
      <div className={classes.StepContent}>
        <h3 className={classes.StepTitle}>{content.title}</h3>
        {content.desc &&
          <ul className={classes.StepDesc}>
            {content.desc.map((descText, descIndex) => <li key={descIndex}>{descText}</li>)}
          </ul>
        }
      </div>
    </div>
  )
)
