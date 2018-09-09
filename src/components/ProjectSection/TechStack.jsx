export default compose(
  injectSheet({
    Element: {
      borderRight: '1px solid',
      padding: '0 8%',
      fontSize: '1.5em',
    },
  })
)( ({ classes, children }) =>  { 
  return (
    <div>
      { children.map( child => <span className={classes.Element}>{ child }</span>) }
    </div>
  )
})
