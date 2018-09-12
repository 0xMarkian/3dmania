const { breakpoints } = commonStyles

const Step = injectSheet(({baseColor, highlightedColor, breakpoints}) => ({
  Step: {
    width: '100%',
    paddingTop: '100%',
    background: baseColor,
    borderRadius: '50%',
    overflow: 'hidden',
  },
  FullStep: {
    extend: 'Step'
  },
  DualStep: {
    extend: 'Step',
  },
  SubStep: {
    extend: 'Step',

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
    height: '100%',
    position: 'absolute',
    top: 0,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  StepTitle: {
    fontSize: '1.2em',
    color: highlightedColor,
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
})
)(({ classes, type='', title='', children }) => (
    <div className={classes[type]}>
      <div className={classes.StepContent}>
        <h3 className={classes.StepTitle}>{title}</h3>
        {children}
      </div>
    </div>
  )
)

export const FullStep = props => (<Step type='FullStep' {...props}/>)
export const DualStep = props => (<Step type='DualStep' {...props}/>)
export const SubStep = props => (<Step type='SubStep' {...props}/>)

export { default as DescContent } from './DescContent'
