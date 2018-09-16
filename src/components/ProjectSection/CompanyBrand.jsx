export default compose(
  injectSheet(({breakpoints}) => ({
    CompanyBrand: {
      color: commonStyles.secondAccentColor,
      fontSize: '1.2em',
      marginBottom: '3em',
    },
  }))
)( ({ classes, children }) => (
  <div className={classes.CompanyBrand}>{ children }</div>
))
