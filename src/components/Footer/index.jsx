import {Container, Row, Col} from 'reactstrap'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'

import Section from 'components/Section'


const { defaultSection } = commonStyles

const Link = injectSheet({
  LinkWrapper: {
    cursor: 'pointer',
    display: 'block',
    marginTop: '2em',
    '& *': {display: 'block'},
    '&:hover span': {
      color: 'white',
    }
  },
  LinkTitle: {
   fontWeight: 500,
   fontSize: '1.25em',
   color: 'white',
  },
  LinkSubtitle: {
    marginTop: '1em',
    transition: 'color 0.5s ease',
    fontSize: '0.8em',
    color: '#777',
  },
})(
  ({classes, title, subtitle}) => (
    <a className={classes.LinkWrapper}>
      <span className={classes.LinkTitle}>{title}</span>
      <span className={classes.LinkSubtitle}>{subtitle}</span>
    </a>
  )
)

export default compose(injectSheet({
  SectionWrapper: {
    ...defaultSection,
    padding: '3% 0',
  },
  BaseLink: {
    color: '#777!important',
    transition: 'color 0.5s ease',
    '&:hover': {
      color: 'white!important',
    },
    '&:not(:first-child)': {
      marginLeft: '1em',
    },
  },
  SocialWrapper: {
    marginTop: '2%',
  },
  LegalWrapper: {
    marginTop: '2%',
  },
  SocialIcon: {
    extend: 'BaseLink',
  },
  LegalLink: {
    extend: 'BaseLink',
    marginTop: '5%',
    fontSize: '0.7em',
    '&:not(:first-child)': {
      marginLeft: '2em',
    }
  },
}))(
  ({ classes, ...props }) => (
    <footer className={classes.SectionWrapper} {...props}>
      <Container>
        <Row>
          <Col md={8}>
            <Link title='New business enquiries' subtitle='newbusiness@team.rehab' />
          </Col>
          <Col md={4}>
            <Link title='Join our team' subtitle='Current openings' />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Link title='London' subtitle='118 Commercial Street, E1 6NF' />
          </Col>
          <Col md={4}>
            <Link title='New York City' subtitle='1301 Avenue of the Americas 10th Floor, NY 10012' />
          </Col>
          <Col md={4}>
            <Link title='Ivano-Frankivsk' subtitle='Sichovykh Striltsiv Str. 23, 5th Floor, IF 506' />
          </Col>
        </Row>
        <Row className={classes.SocialWrapper}>
          <Col md={12}>
            <a className={classes.SocialIcon}><FaFacebookF /></a>
            <a className={classes.SocialIcon}><FaInstagram /></a>
          </Col>
        </Row>
        <Row className={classes.LegalWrapper}>
          <Col md={12}>
            <a className={classes.LegalLink}>Terms & Conditions</a>
            <a className={classes.LegalLink}>Cookie Policy</a>
            <a className={classes.LegalLink}>Privacy Policy</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
)
