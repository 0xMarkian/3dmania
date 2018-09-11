const { breakpoints } = commonStyles

const styles = {
  Step: {
    width: '100%',
    paddingTop: '100%',
    background: commonStyles.baseColor,
    borderRadius: '50%',
    overflow: 'auto',
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
    position: 'absolute',
    top: 0,
    textAlign: 'center',
  },
  StepTitle: {
    marginTop: '30%',
    marginBottom: '12%',
    fontSize: '1.2em',
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
}
const Step = injectSheet({
  ...styles,
})(({ classes, type='', title='', children }) => (
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
