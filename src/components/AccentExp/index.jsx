export default compose(
  injectSheet({
    AccentExp: props => ({ color: props.color })
  })
)( ({ classes, children }) => (
 <span className={classes.AccentExp}>{ children }</span> 
))
