import React from 'react'

import injectSheet from 'react-jss'
import defaultStyles from '../../styles'

export default injectSheet({
  Nav: {
    width: '100%',
    background: defaultStyles.baseColor,
    position: 'fixed',
    padding: '30px 50px',
  },
  BrandTitle: {
    color: 'white',
    fontSize: '1.2em',
  },
})(
  ({ classes }) => (
    <nav className={classes.Nav}>
      <h1 className={classes.BrandTitle}>3D Mania</h1>
    </nav>
  )
)
