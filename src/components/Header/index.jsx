export default injectSheet({
  defaultSection: commonStyles.defaultSection,
  ContentWrapper: {
    
  },
  Heading: {
    fontSize: '3em',
  },
})(
  ({ classes }) => (
    <header >
      <div className={classes.ContentWrapper}>
        <h1 className={classes.Heading}>Creating connections that count</h1>
      </div>
    </header>
  )
)
