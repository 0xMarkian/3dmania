import Section from '../Section'
import { CompanyBrand, TechStack, About } from '../ProjectSection'
import AccentExp from 'components/AccentExp'

import { Row, Col } from 'reactstrap'

import img1 from './img1.JPG'
import img2 from './img2.JPG'
import img3 from './img3.JPG'

const PhotoSection = compose(
  injectSheet({
    PhotoSection: {
      paddingTop: '15%',
      zIndex:1,
    },
    img1: {
      width: '100%',
      borderRadius: '3px',
      transform: 'rotate(-10deg)',
    },
    underImages: {
      position: 'absolute',
      width: '70%',
      left: '40%',
      transform: 'rotate(20deg)',
    },
    img3: {
      left: '60%',
      top: '24%',
      transform: 'rotate(56deg)',
    }
  }),
)( ({ classes }) => (
  <Col className={classes.PhotoSection} md={6}>
    <img className={`${ classes.underImages } ${classes.img3}`} src={img3}/> 
    <img className={`${ classes.underImages } ${classes.img2}`} src={img2}/> 
    <img className={classes.img1} src={img1}/> 
  </Col>
))

const TextSection = injectSheet({
  TextSection: {
    zIndex: 3,
  }
})( ({ classes }) => (
    <Col className={classes.TextSection} md={6}>
      <CompanyBrand>Lion's Shade</CompanyBrand> 
    </Col>
))

export default compose(
  injectSheet(theme => ({
    FarmBotProject: {
      '&:after': {
        ...theme.Section.BlackLayer,
        zIndex: 2,
      },
    }
  }))
)( ({ classes }) => (
  <Section className={classes.FarmBotProject}>
    <Row>
      <TextSection/> 
      <PhotoSection/>    
    </Row>
  </Section>
))