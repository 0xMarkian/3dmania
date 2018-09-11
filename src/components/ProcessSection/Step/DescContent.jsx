export default injectSheet( ({ secondAccentColor }) => ({
  Desc: {
    color: secondAccentColor,
    fontSize: '.5em'
  }
}))( ({ classes, children }) => (
  <p className={classes.Desc}>{children}</p>
))
