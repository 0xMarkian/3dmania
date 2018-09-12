import {Row, Col} from 'reactstrap'

import Section from 'components/Section'
import { FullStep, DualStep, SubStep, DescContent as StepDesc } from './Step'


const { breakpoints } = commonStyles

const Idea = () => (
  <FullStep title={'Idea'}/> 
)

const Agreement = () => (
  <FullStep title='Agreement'>
    <StepDesc>
      <span>- Teams intercommunication. <br/> - Intelligence gathering. <br/> - HLD(High Level Design) approval</span>
    </StepDesc>
  </FullStep>
)
const Development = () => {
  return (
    <div>
      <DualStep title='Hardware'>
        <StepDesc>
        </StepDesc>
      </DualStep>
      <DualStep title='Software'/>
    </div>
  )
}

const Testing = () => {
  return (
    <div>
      <FullStep title='Testing'/>
      <SubStep title='Optimization'/>
    </div>
  )
}
const Delivery = () => {
  return (
    <FullStep title='Delivery'/>
  )
}

export default compose(injectSheet({
  ProcessSection: {
    background: 'white',
    paddingTop: '5%',
    color: commonStyles.baseColor,
  },
  Title: {
    display: 'none',
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
    width: '124%',
    marginLeft: '-12%',
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
    // const processSchema = [
    //   {
    //     title: 'Idea',
    //     type: 'full',
    //   },
    //   {
    //     title: 'Agreement',
    //     desc: ['point 1', 'point 2', 'point 3'],
    //     type: 'full',
    //   },
    //   {
    //     type: 'half',
    //     top: {
    //       title: 'Hardware',
    //       desc: ['point 1', 'point 2', 'point 2'],
    //     },
    //     bottom: {
    //       title: 'Software',
    //       desc: ['point 1', 'point 2', 'point 2'],
    //     },
    //   },
    //   {
    //     type: 'dual',
    //     primary: {
    //       title: 'Testing',
    //     },
    //     secondary: {
    //       title: 'Optimization',
    //     },
    //   },
    //   {
    //     type: 'full',
    //     title: 'Delivery',
    //   }
    // ]

    return (<Section className={classes.ProcessSection} id='process-section'>
      <h4 className={classes.Subtitle}>Process</h4>
      <h1 className={classes.Title}>Introducing Triage, <span className={classes.NoBr}>our method of</span>
        <br/>
        <span className={classes.HighlightedText}>ensuring the work really works.</span>
      </h1>
    <Row className={classes.StepsContainer}>{
      [Idea, Agreement, Development, Testing, Delivery].map((Item, i) =>
          <Col
            className={classes.StepWrapper} key={i}
            xs={{size: 6, offset: 3}}
            md={{size: 4, offset: 4}}
            lg={{size: 2, offset: (i == 0 ? 1:0)}}
          >
            <Item/> 
          </Col>
        )}
      </Row>
    </Section>)
  }
)
