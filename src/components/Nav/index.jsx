import { Collapse } from 'reactstrap'
import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaBars } from 'react-icons/fa'

@injectSheet(({breakpoints, warningColor}) => ({
  NavWrapper: {
    width: '100%',
    zIndex: 5,
    transition: 'all 0.5s ease',
    background: 'rgba(36, 36, 36, 0.9)',
    position: 'fixed',
  },
  NavWrapperOpen: {
    extend: 'NavWrapper',

    background: 'rgba(36, 36, 36, 1)',
  },
  Nav: {
    padding: '25px 50px',
    color: '#bbb',
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
    fontSize: '0.75em',
    margin: '0 1em',
    '&:hover': {
      color: 'white',
    },
  },
  NavLinkHidden: {
    display: 'none',
  },
  NavLinkActive: {
    fontWeight: 500,
    color: 'white',
  },
  [breakpoints.lg.lt]: {
    NavLink: {
      textAlign: 'center',
      margin: '2em 0',
      display: 'block',
    },
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
  },
  [breakpoints.lg.gt]: {
    NavLinksWrapper: {
      display: 'block!important',
    },
    HamburgerIcon: {
      display: 'none',
    },
  },
  Warning: {
    width: '100%',
    display: 'inline-block',
    textAlign: 'center',
    color: 'white',
    background: warningColor,
  },
  [breakpoints.md.lt]: {
    Warning: {
      fontSize: '0.7em',
    },
  },
}))
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isNavbarOpen: false}
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.closeNavbar = this.closeNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState(state => ({isNavbarOpen: !state.isNavbarOpen}))
  }

  closeNavbar() {
    this.setState({isNavbarOpen: false})
  }

  render() {
    const {classes, sections} = this.props
    const {isNavbarOpen} = this.state

    const NavWrapperClassName = isNavbarOpen ? classes.NavWrapperOpen : classes.NavWrapper

    
    // const availableSections = sections.filter(section => !section.navLinkHidden)

    const availableSectionsIds = sections.map(section => section.id)

    return (<div className={NavWrapperClassName}>
      <span className={classes.Warning}>
        Site under development.
        Please don't judge strictly =)
      </span>
      <nav className={classes.Nav}>
        <h1 className={classes.BrandTitle}>3D Mania</h1>
        <a className={classes.HamburgerIcon} onClick={this.toggleNavbar}><FaBars /></a>
        <Collapse isOpen={isNavbarOpen} className={classes.NavLinksWrapper}>
          <Scrollspy
            offset={-20}
            items={availableSectionsIds}
            currentClassName={classes.NavLinkActive}
            componentTag='div'
          >
            {
              sections.map(({id, name, navLinkHidden}) => (
                <AnchorLink
                  onClick={this.closeNavbar}
                  href={'#'+id}
                  key={id}
                  className={navLinkHidden ? classes.NavLinkHidden : classes.NavLink}
                >
                  {name}
                </AnchorLink>
              ))
            }
          </Scrollspy>
        </Collapse>
      </nav>
    </div>)
  }
}

export default Nav
