import googleLogo from 'images/partners/google.png'


export default injectSheet({
  SectionWrapper: commonStyles.defaultSection,
  Heading: {
    fontSize: '4em',
    color: 'white',
    fontWeight: 'bold',
  },
  HighlightedText: {
    color: '#00f19f',
  },
  Description: {
    color: '#bbb',
    marginTop: '2em',
  },
  PartnersWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: '50px',
  },
  Partner: {
    width: '10%',
  },
})(
  ({ classes }) => (
    <header className={classes.SectionWrapper}>
      <div className={classes.ContentWrapper}>
        <h1 className={classes.Heading}>
          Creating<br/>
          connections<br/>
          that <span className={classes.HighlightedText}>count</span>
        </h1>
        <p className={classes.Description}>rehab helps brands create scalable, one-to-one relationships with people through the tech they love. We're leaders in using voice, messaging, AR, web-based products and service design to create branded utilities and experiences that truly impact people's lives.</p>
        <div className={classes.PartnersWrapper}>
          <img className={classes.Partner} src={googleLogo} alt='Google'/>
          <img className={classes.Partner} src={googleLogo} alt='Google'/>
          <img className={classes.Partner} src={googleLogo} alt='Google'/>
          <img className={classes.Partner} src={googleLogo} alt='Google'/>
          <img className={classes.Partner} src={googleLogo} alt='Google'/>
        </div>
      </div>
    </header>
  )
)
