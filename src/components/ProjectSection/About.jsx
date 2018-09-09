export default compose(
  injectSheet({
    About: {
      fontSize: '3em',
      fontWeight: 'bold',
    }
  })
)( ({ classes, children }) => (
 <h2 className={classes.About}>{ children }</h2> 
))
