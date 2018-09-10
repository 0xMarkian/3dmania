import { Collapse } from 'reactstrap'
import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaBars } from 'react-icons/fa'

const {breakpoints} = commonStyles

@injectSheet(theme => ({
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
  [breakpoints.md.gt]: {
    NavLinksWrapper: {
      display: 'block!important',
    },
    HamburgerIcon: {
      display: 'none',
    },
  },
  Warning: {
    width: '100%',
    fontWeight: 500,
    display: 'inline-block',
    textAlign: 'center',
    color: 'white',
    background: theme.warningColor,
  },
}))
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isNavbarOpen: false}
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState(state => ({isNavbarOpen: !state.isNavbarOpen}))
  }

  render() {
    const {classes, sections} = this.props
    const {isNavbarOpen} = this.state

    const sectionIds = sections.map(section => section.id)
    
    return (<div className={classes.NavWrapper}>
      <nav className={classes.Nav}>
        <h1 className={classes.BrandTitle}>3D Mania</h1>
        <a className={classes.HamburgerIcon} onClick={this.toggleNavbar}><FaBars /></a>
        <Collapse isOpen={isNavbarOpen} className={classes.NavLinksWrapper}>
          <Scrollspy
            items={sectionIds}
            currentClassName='active'
            componentTag='div'
          >
            {
              sections.map(({id, name}) => (
                <a href={'#'+id} key={id} className={classes.NavLink}>{name}</a>
              ))
            }
          </Scrollspy>
        </Collapse>
      </nav>
      <span className={classes.Warning}>Site is still in development. Don't judge strictly.</span>
    </div>)
  }
}

export default Nav
