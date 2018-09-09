import Section from '../Section'
import { CompanyBrand, TechStack, About } from '../ProjectSection'

import BackgroundPhoto from './background.jpg'

const sectionColor = '#45C5FC'
export default compose(
  injectSheet({
    LongBoardProject: {
      backgroundImage: `url(${ BackgroundPhoto })`,
      height: '700px',
      color: sectionColor,
      textAlign: 'right',
    },
    wrapper: {
      float: 'right',
      maxWidth: '600px',
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
