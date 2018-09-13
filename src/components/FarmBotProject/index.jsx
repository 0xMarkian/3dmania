import Section from '../Section'
import { CompanyBrand, TechStack, About } from '../ProjectSection'
import AccentExp from 'components/AccentExp'

import { Row, Col } from 'reactstrap'

import img1 from './img1.JPG'
import img2 from './img2.JPG'
import img3 from './img3.JPG'
import BrandLogo from './BrandLogo.png'

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
    },
  }),
)( ({ classes }) => (
  <Col className={classes.PhotoSection} md={6}>
    <img className={`${ classes.underImages } ${classes.img3}`} src={img3}/>
    <img className={`${ classes.underImages } ${classes.img2}`} src={img2}/>
    <img className={classes.img1} src={img1}/> 
  </Col>
))

const TextSection = injectSheet(({breakpoints, highlightedColor}) => ({
  TextSection: {
    zIndex: 3,
  },
  BrandLogoLink: {
    display: 'inline-block',
    '& img': {
      width: '70%',
    },
  },
  Subtitle: {
    fontSize: '2em',
    color: highlightedColor,
  },
  [breakpoints.md.lt]: {
    Subtitle: {
      fontSize: '1em',
    },
  },
  Title: {
    fontSize: '2.4em',
  },
}))( ({ classes }) => (
    <Col className={classes.TextSection} md={6}>
      <CompanyBrand>
        <a className={classes.BrandLogoLink} href='http://www.lionsshade.com/' target='_blank'>
          <img src={BrandLogo} alt="Lion's Shade" />
        </a>
      </CompanyBrand>
      <p className={classes.Subtitle}>Work Automation</p>
      <About className={classes.Title}>Helping farm hobbyists manage their garden with ease</About>
      <TechStack>{ ['Industrial Design', 'Digital Manufacturing', 'CAD Design', '3D Printing', 'Electronics Design', 'Embedded Programming', 'C/C++'] }</TechStack>
    </Col>
    
))

export default compose(
  injectSheet(({Section, baseColor}) => ({
    FarmBotProject: {
      background: 'white',
      color: baseColor,
    }
  }))
)( ({ classes, ...props }) => (
  <Section {...props} className={classes.FarmBotProject}>
    <Row>
      <TextSection/>
      <PhotoSection/>
    </Row>
  </Section>
))
