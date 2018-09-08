import {Container, Row} from 'reactstrap'

import googleLogo from 'images/partners/google.png'

const { defaultSection } = commonStyles

export default injectSheet({
  SectionWrapper: {
    ...defaultSection,
    marginTop: '5%',
  },
  Heading: {
    fontSize: '4em',
    color: 'white',
    fontWeight: 'bold',
  },
  HighlightedText: {
    color: commonStyles.highlightedColor,
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
        <Container>
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
          </Container>
      </header>
  )
)
