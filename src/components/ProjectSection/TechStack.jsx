export default compose(
  injectSheet(({breakpoints}) => ({
    Element: {
      '&:not(:first-child)': {
        paddingLeft: '3%',
      },
      '&:not(:last-child)': {
        paddingRight: '3%',
        borderRight: '1px solid',
      },
      fontSize: '1em',
    },
    Wrapper: {
      lineHeight: '32px',
      width: '100%',
    },
    [breakpoints.md.lt]: {
      Element: {
        marginTop: '0.25em',
        padding: '0!important',
        border: 'none!important',
        display: 'block',
      },
    },
  }))
)( ({ classes, children }) => {
  return (
    <div className={classes.Wrapper}>
      { children.map( (child, key) => <span key={key} className={classes.Element}>{ child }</span>) }
    </div>
  )
})
