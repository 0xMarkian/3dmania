export default compose(
  injectSheet({
    About: {
      fontSize: '3.5em',
      fontWeight: '500',
      marginBottom: '5%',
    }
  })
)( ({ classes, children }) => (
 <h2 className={classes.About}>{ children }</h2> 
))
