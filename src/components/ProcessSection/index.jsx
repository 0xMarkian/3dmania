import Section from 'components/Section'

const ProcessStep = injectSheet({
  FullStep: {
    width: '100%',
    paddingTop: '100%',
    background: '#242424',
    borderRadius: '50%',
  },
  HalfStep: {
    extend: 'FullStep',
    margin: '0 auto',
    '&:first-child': {
      marginBottom: '20%',
    },
  },
  AdditionalHalfStep: {
    extend: 'FullStep',
    zIndex: 2,
    width: '60%',
    paddingTop: '60%',
    background: '#242424',
    position: 'absolute',
    right: '-18%',
    top: '-18%',
    color: 'white',
    fontSize: '0.7em',
  },
  StepContent: {
    width: '100%',
    position: 'absolute',
    top: 0,
    textAlign: 'center',
  },
  StepTitle: {
    marginTop: '30%',
    fontSize: '0.9em',
    color: commonStyles.highlightedColor,
  },
  StepDesc: {
    color: 'white',
    fontSize: '0.7em',
    listStyle: 'none',
  },
})(({ classes, type, content }) => (
  <div className={classes[type]}>
    <div className={classes.StepContent}>
      <h3 className={classes.StepTitle}>{content.title}</h3>
      {content.desc &&
        <ul className={classes.StepDesc}>
          {content.desc.map((descText, descIndex) => <li key={descIndex}>{descText}</li>)}
        </ul>
      }
    </div>
  </div>
))

export default injectSheet({
    ProcessSection: {
      background: 'white',
      paddingTop: '5%',
      color: commonStyles.baseColor,
    },
    Title: {
      margin: '1em 0',
      fontWeight: 'bold',
    },
    HighlightedText: {
      color: commonStyles.highlightedColor,
    },
    Subtitle: {
      color: '#bbb',
    },
    StepsContainer: {
      marginTop: '5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    StepWrapper: {
      width: '15%',
    },
  })( ({ classes }) => {
    const processSchema = [
      {
        title: 'Idea',
        type: 'full',
      },
      {
        title: 'Agreement',
        desc: ['point 1', 'point 2', 'point 3'],
        type: 'full',
      },
      {
        type: 'half',
        top: {
          title: 'TOP',
          desc: ['point 1', 'point 2', 'point 2'],
        },
        bottom: {
          title: 'BOTTOM',
          desc: ['point 1', 'point 2', 'point 2'],
        },
      },
      {
        type: 'dual',
        primary: {
          title: 'Testing',
        },
        secondary: {
          title: 'Optimization',
        },
      },
      {
        type: 'full',
        title: 'Delivery',
      }
    ]

    return (<Section className={classes.ProcessSection}>
      <h4 className={classes.Subtitle}>Process</h4>
      <h1 className={classes.Title}>Introducing Triage,
        our method of
        <br/>
        <span className={classes.HighlightedText}>ensuring the work really works.</span>
      </h1>
      <div className={classes.StepsContainer}>
        {processSchema.map((item, index) =>
          <div className={classes.StepWrapper} key={index}>
            {item.type === 'full' &&
              <ProcessStep type='FullStep' content={item}/>
            }
            {item.type === 'half' &&
              <div>
                <ProcessStep type='HalfStep' content={item.top} />
                <ProcessStep type='HalfStep' content={item.bottom} />
              </div>
            }
            {item.type === 'dual' &&
              <div>
                <ProcessStep type='FullStep' content={item.primary} />
                <ProcessStep type='AdditionalHalfStep' content={item.secondary} />
              </div>
            }
          </div>
        )}
      </div>
    </Section>)
  })
