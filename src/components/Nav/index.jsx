export default injectSheet({
  Nav: {
    width: '100%',
    background: commonStyles.baseColor,
    position: 'fixed',
    padding: '30px 50px',
  },
  BrandTitle: {
    color: 'white',
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
