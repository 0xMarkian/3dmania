export default compose(
  injectSheet({
    Subtitle: {
      color: '#bbb',
      fontSize: '1.2em',
    },   
  })
)( ({ classes, children }) => (
    <h2 className={classes.Subtitle}>{children}</h2>
))
