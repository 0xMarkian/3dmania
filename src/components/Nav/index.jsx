export default injectSheet({
  Nav: {
    width: '100%',
    zIndex: 2,
    background: 'rgba(36, 36, 36, 0.8)',
    position: 'fixed',
    padding: '25px 50px',
  },
  BrandTitle: {
    fontSize: '1.2em',
    display: 'inline-block',
  },
  NavLinksWrapper: {
    display: 'inline-block',
    'float': 'right',
  },
  NavLink: {
    fontSize: '0.75em',
    margin: '0 1em',
    color: '#bbb',
    '&:hover': {
      color: 'white',
    },
  },
})(
  ({ classes }) => (
    <nav className={classes.Nav}>
      <h1 className={classes.BrandTitle}>3D Mania</h1>
      <div className={classes.NavLinksWrapper}>
        <a className={classes.NavLink} href='#'>Link 1</a>
        <a className={classes.NavLink} href='#'>Link 2</a>
        <a className={classes.NavLink} href='#'>Link 3</a>
      </div>
    </nav>
  )
)
