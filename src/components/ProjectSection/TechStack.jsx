export default compose(
  injectSheet({
    Element: {
      borderRight: '1px solid',
      padding: '0 3%',
      fontSize: '1em',
    },
  })
)( ({ classes, children }) =>  { 
  return (
    <div>
      { children.map( (child, key) => <span key={key} className={classes.Element}>{ child }</span>) }
    </div>
  )
})
