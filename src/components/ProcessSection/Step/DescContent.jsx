export default injectSheet( ({ breakpoints, secondAccentColor }) => ({
  Desc: {
    color: secondAccentColor,
    fontSize: '.5em',
    display: 'inline-block',
    marginTop: '7%',
    padding: '0 15%',
  },
  [breakpoints.md.lt]: {
    Desc: {
      padding: '0 5%',
    }
  },
}))( ({ classes, children }) => (
  <span className={classes.Desc}>{children}</span>
))
