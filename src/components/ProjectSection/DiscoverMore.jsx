export default compose(
  injectSheet(({breakpoints}) => ({
    ButtonWrapper: {
      display: 'inline-block',
      marginTop: '2em',
    },
    Button: {
      fontWeight: '500',
      color: ({color}) => color,
      display: 'block',
      width: 'auto',
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '2px',
        background: ({color}) => color,
        transition: 'all 0.5s cubic-bezier(.34,.325,.16,1)',
      },
    },
    [breakpoints.md.lt]: {
      Button: {
        '&:after': {bottom: '-.5em'},
      },
    },
    [breakpoints.md.gt]: {
      Button: {
        '&:after': {bottom: '-1.5em'},
        '&:hover': {
          color: ({color}) => color,
          '&:after': {bottom: '-.5em'},
        },
      },
    },
  }))
)(({ classes, href='#'}) =>
  <div className={classes.ButtonWrapper}>
    <a href={href} className={classes.Button}>Discover more</a>
  </div>
 )

