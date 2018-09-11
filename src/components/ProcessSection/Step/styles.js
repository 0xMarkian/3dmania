const { breakpoints } = commonStyles

export default {
  FullStep: {
    width: '100%',
    paddingTop: '100%',
    background: commonStyles.baseColor,
    borderRadius: '50%',
  },
  DualStep: {
    extend: 'FullStep',
  },
  SubStep: {
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
