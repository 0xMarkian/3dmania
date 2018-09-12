export default compose(
  injectSheet(({breakpoints}) => ({
    Element: {
      borderRight: '1px solid',
      padding: '0 3%',
      fontSize: '1em',
    },
    [breakpoints.md.lt]: {
      Element: {
        '&:first-child': {
          paddingLeft: 0,
        },
      },
    },
  }))
)( ({ classes, children }) => {
  return (
    <div>
      { children.map( (child, key) => <span key={key} className={classes.Element}>{ child }</span>) }
    </div>
  )
})
