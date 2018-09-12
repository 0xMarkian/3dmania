export default compose(
  injectSheet(({breakpoints}) => ({
    About: {
      fontWeight: '500',
      marginBottom: '5%',
    },
    [breakpoints.md.gt]: {
      About: {
        fontSize: '3.5em',
      },
    },
    [breakpoints.md.lt]: {
      About: {
        fontSize: '2.5em',
      },
    },
  }))
)( ({ classes, children }) => (
 <h2 className={classes.About}>{ children }</h2> 
))
