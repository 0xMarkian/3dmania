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
        height: '3px',
        background: ({color}) => color,
        transition: 'all 0.5s ease',
      },
    },
    [breakpoints.md.lt]: {
      Button: {
        '&:after': {top: '1.5em'},
      },
    },
    [breakpoints.md.gt]: {
      Button: {
        height: 'calc(3em + 3px)',
        '&:after': {top: '3em'},
        '&:hover': {
          color: ({color}) => color,
          '&:after': {top: '1.5em'},
        },
      },
    },
  }))
)(({ classes, href='#'}) =>
  <div className={classes.ButtonWrapper}>
    <a href={href} className={classes.Button}>Discover more</a>
  </div>
 )

