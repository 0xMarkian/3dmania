export default compose(
  injectSheet({
    About: {
      fontSize: '2.5em',
      fontWeight: 'bold',
    }
  })
)( ({ classes, children }) => (
 <h2 className={classes.About}>{ children }</h2> 
))
