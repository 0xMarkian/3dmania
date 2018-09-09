import Section from '../Section'
import { CompanyBrand, TechStack, About } from '../ProjectSection'

import BackgroundPhoto from './background.jpg'

const { LongBoardProject: LongBoardProjectStyles } = commonStyles
export default compose(
  injectSheet({
    LongBoardProject: {
      backgroundImage: `url(${ BackgroundPhoto })`,
      height: '700px',
      color: LongBoardProjectStyles.accentColor,
      textAlign: 'right',
      '&:before': {
        display: 'block',
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'black',
        opacity: '.3',
      }
    },
    wrapper: {
      float: 'right',
      maxWidth: '500px',
    },
  })
)( ({ classes }) => (
  <Section className={classes.LongBoardProject}>
    <div className={classes.wrapper}>
      <CompanyBrand>Young Startup Team</CompanyBrand>
      <About>Building first electro board with innovative batteries</About>
      <TechStack>{ ['Digital', 'IT'] }</TechStack>
    </div>
  </Section> 
))
