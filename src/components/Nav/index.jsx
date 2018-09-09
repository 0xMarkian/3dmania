import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaBars } from 'react-icons/fa'

const {breakpoints} = commonStyles

@injectSheet({
  NavWrapper: {
    width: '100%',
    zIndex: 5,
    background: 'rgba(36, 36, 36, 0.9)',
    position: 'fixed',
  },
  Nav: {
    padding: '25px 50px',
    color: '#bbb',
  },
  NavOpen: {
    height: '100vh',
  },
  BrandTitle: {
    fontSize: '1.2em',
    display: 'inline-block',
  },
  NavLinksWrapper: {
    display: 'inline-block',
    float: 'right',
    overflow: 'hidden',
  },
  NavLink: {
    color: '#bbb',
    transition: 'all 0.5s ease',
    fontSize: '0.75em',
    margin: '0 1em',
    '&:hover': {
      color: 'white',
    },
  },
  [breakpoints.md.lt]: {
    HamburgerIcon: {
    transition: 'all 0.5s ease',
    'float': 'right',
     display: 'block',
     '&:hover': {
        color: 'white',
      },
    },
    NavLinksWrapper: {
      width: '100%',
      fontSize: '1.5em',
    },
    NavLinksWrapperOpen: {
      display: 'block',
    },
    NavLinksWrapperClosed: {
      display: 'none',
    },
    NavLink: {
      textAlign: 'center',
      margin: '2em 0',
      display: 'block',
    },
  },
  [breakpoints.md.gt]: {
    HamburgerIcon: {
      display: 'none',
    },

  },
  Warning: {
    width: '100%',
    fontWeight: 500,
    textAlign: 'center',
    color: 'white',
    background: '#E7CD37',
  },
})
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {navbarOpen: false}
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState(state => ({navbarOpen: !state.navbarOpen}))
  }

  render() {
    const {classes, sections} = this.props
    const {navbarOpen} = this.state
    const NavLinksWrapperClassName = [
      classes.NavLinksWrapper,
      navbarOpen ? classes.NavLinksWrapperOpen : classes.NavLinksWrapperClosed
    ].join(' ')
    
    const NavClassName = [classes.Nav, (navbarOpen && classes.NavOpen) || ''].join(' ')

    return (<div className={classes.NavWrapper}>
      <nav className={NavClassName}>
        <h1 className={classes.BrandTitle}>3D Mania</h1>
        <a className={classes.HamburgerIcon} onClick={this.toggleNavbar}><FaBars /></a>
        <div className={NavLinksWrapperClassName}>
          <Scrollspy
            items={sections}
            currentClassName='active'
            componentTag='div'
          >
            <AnchorLink className={classes.NavLink} href={`#${sections[0]}`}>Header</AnchorLink>
            <AnchorLink className={classes.NavLink} href={`#${sections[1]}`}>Process</AnchorLink>
            <AnchorLink className={classes.NavLink} href={`#${sections[2]}`}>Longboard</AnchorLink>
            <AnchorLink className={classes.NavLink} href={`#${sections[3]}`}>Farmbot</AnchorLink>
            <AnchorLink className={classes.NavLink} href={`#${sections[4]}`}>Connect us</AnchorLink>
            <AnchorLink className={classes.NavLink} href={`#${sections[5]}`}>About us</AnchorLink>
          </Scrollspy>
        </div>
      </nav>
      <div className={classes.Warning}>Site is still in development. Do not judge strictly.</div>
    </div>)
  }
}

export default Nav
