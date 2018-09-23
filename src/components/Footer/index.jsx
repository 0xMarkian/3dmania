import {Container, Row, Col} from 'reactstrap'
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

import Section from 'components/Section'


const FooterSection = injectSheet({
  SectionWrapper: {
    cursor: 'pointer',
    marginTop: '2em',
  },
  Title: {
   fontWeight: 500,
   fontSize: '1.25em',
   color: 'white',
  },
  Link: {
    display: 'block',
    transition: 'color 0.5s ease',
    fontSize: '0.8em',
    color: '#777',
    marginTop: '0.5em',
    '&:first-of-type': {marginTop: '1em'},
    '&:hover': {
      color: 'white',
    }
  },
})(
  ({classes, title, links}) => (
    <Col md={4} className={classes.SectionWrapper}>
      <span className={classes.Title}>{title}</span>
      {
        links.map(({url='#', text}, index) => (
          <a key={index} href={url} target='_blank' className={classes.Link}>{text}</a>
        ))
      }
    </Col>
  )
)

export default compose(injectSheet(({defaultSection, breakpoints}) => ({
  SectionWrapper: {
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
  SocialIcon: {
    extend: 'BaseLink',
  },
  [breakpoints.md.lt]: {
    SocialWrapper: {
      padding: '5% 0',
    },
  },
})))(
  ({ classes, ...props }) => {
    const socialMedia = [
      {
        url: 'https://www.facebook.com/3dmania.print',
        Icon: FaFacebookF,
      },
      {
        url: 'https://www.instagram.com/3d_mania/',
        Icon: FaInstagram,
      },
      {
        url: 'https://www.linkedin.com/company/3d-mania/',
        Icon: FaLinkedinIn,
      },
    ]

    const sections = [
      {
        title: 'New business enquiries',
        links: [{
          url: 'mailto:sales@3dmania.tech',
          text: 'sales@3dmania.tech',
        },
        {
          url: 'tel:+380689212475',
          text: '+38 (068) 921 24 75',
        }]
      },
      {
        title: 'Ivano-Frankivsk',
        links: [{
          url: 'https://goo.gl/maps/1LH9JiQxuFo',
          text: "Sichovykh Stril'tsiv St. 23, 5th Floor, #506",
        }],
      },
      {
        title: 'Join our team',
        links: [{text: 'Current openings'}],
      },
    ]

    return (<footer className={classes.SectionWrapper} {...props}>
      <Container>
        <Row>
          {
            sections.map(({title, links}, index) => (
              <FooterSection title={title} links={links} key={index} />
            ))
          }
        </Row>
        <Row className={classes.SocialWrapper}>
          <Col>
            {
              socialMedia.map(({url, Icon}, index) => (
                <a
                  key={index}
                  className={classes.SocialIcon}
                  href={url}
                  target='_blank'
                >{<Icon />}</a>
              ))
            }
          </Col>
        </Row>
      </Container>
    </footer>)
  }
)
