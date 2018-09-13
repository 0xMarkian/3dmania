export default compose(
  injectSheet({
    CompanyBrand: {
      color: commonStyles.secondAccentColor,
      fontSize: '1.2em',
    }
  })
)( ({ classes, children }) => (
  <div className={classes.CompanyBrand}>{ children }</div>
))
