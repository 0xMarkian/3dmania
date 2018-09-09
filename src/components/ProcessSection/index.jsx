import {Row, Col} from 'reactstrap'

import Section from 'components/Section'
import ProcessStep from 'components/ProcessSection/ProcessStep'


const { breakpoints } = commonStyles

export default compose(injectSheet({
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
  },
  [breakpoints.md.lt]: {
    ProcessSection: {
      paddingTop: '10%',
    },
    Title: {
      textAlign: 'center',
    },
    Subtitle: {
      textAlign: 'center',
    },
  },
  [breakpoints.lg.lt]: {
    StepWrapper: {
      marginTop: '10%',
    },
  },
  [breakpoints.lg.gt]: {
    StepsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  NoBr: {
    whiteSpace: 'nowrap',
  },
}), hot(module))(
  ({ classes }) => {
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
          title: 'Hardware',
          desc: ['point 1', 'point 2', 'point 2'],
        },
        bottom: {
          title: 'Software',
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

    return (<Section className={classes.ProcessSection} id='process-section'>
      <h4 className={classes.Subtitle}>Process</h4>
      <h1 className={classes.Title}>Introducing Triage, <span className={classes.NoBr}>our method of</span>
        <br/>
        <span className={classes.HighlightedText}>ensuring the work really works.</span>
      </h1>
      <Row className={classes.StepsContainer}>
        {processSchema.map((item, index) =>
          <Col
            className={classes.StepWrapper} key={index}
            xs={{size: 6, offset: 3}}
            md={{size: 4, offset: 4}}
            lg={{size: 2, offset: (index == 0 ? 1:0)}}
          >
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
          </Col>
        )}
      </Row>
    </Section>)
  }
)
