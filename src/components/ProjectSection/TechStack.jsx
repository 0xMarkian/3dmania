import { Fragment } from 'react'
export default compose(
  injectSheet(({breakpoints}) => ({
    NoLeftBorder: {
      paddingLeft: '0!important',
    },
    NoRightBorder: {
      paddingRight: '0!important',
      borderRight: 'none!important',
    },
    Element: {
      lineHeight: '1.3em',
      borderRight: '1px solid',
      padding: '0 3%',
      display: 'inline-block',
      fontSize: '1em',
    },
    Wrapper: {
      lineHeight: '32px',
      whiteSpace: 'nowrap',
      width: '100%',
    },
    [breakpoints.md.lt]: {
      Element: {
        marginTop: '0.25em',
        padding: '0!important',
        border: 'none!important',
        display: 'block',
      },
      Wrapper: {
        '& br': {
          display: 'none',
        },
      }
    },
    [breakpoints.md.gt]: {
      Element: {
        marginBottom: '.5em',
      },
    },
  }))
)( ({ classes, splitAfter, children }) => {
  return (
    <div className={classes.Wrapper}>
      {children.map( (child, key, {length: stackSize}) => {
        const firstInLine = key === 0 || key === (splitAfter+1)
        const lastInLine = key === splitAfter || key === (stackSize-1)

        let classesList = [classes.Element]
        if(firstInLine) classesList.push(classes.NoLeftBorder)
        if(lastInLine) classesList.push(classes.NoRightBorder)
        const classNames = classesList.join(' ')

        return (
          <Fragment key={key}>
            <span className={classNames}>{ child }</span>
            {lastInLine && <br/>}
          </Fragment>
        )
      })}
      </div>
  )
})
