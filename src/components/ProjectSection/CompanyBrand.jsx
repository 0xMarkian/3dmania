export default compose(
  injectSheet({
    CompanyBrand: {
      color: commonStyles.secondAccentColor,
      fontSize: '1.2em',
      marginBottom: '3%',
    }
  })
)( ({ classes, children }) => (
  <div className={classes.CompanyBrand}>{ children }</div>
))
