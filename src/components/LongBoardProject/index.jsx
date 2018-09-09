import Section from '../Section'
import { CompanyBrand, TechStack, About } from '../ProjectSection'
import AccentExp from 'components/AccentExp'

import BackgroundPhoto from './background.jpg'

const { LongBoardProject: LongBoardProjectStyles } = commonStyles
export default compose(
  injectSheet(theme => ({
    LongBoardProject: {
      backgroundImage: `url(${ BackgroundPhoto })`,
      height: '700px',
      color: LongBoardProjectStyles.accentColor,
      textAlign: 'right',
      '&:before': {
        ...theme.Section.BlackLayer,
        opacity: '.65',
      }
    },
    wrapper: {
      float: 'right',
      maxWidth: '700px',
    },
  })
))( ({ classes, theme, ...props }) => (
  <Section className={classes.LongBoardProject} {...props}>
    <div className={classes.wrapper}>
      <CompanyBrand>Young Startup Team</CompanyBrand>
      <About>Building first <AccentExp color={theme.secondAccentColor}>electro board </AccentExp>with innovative batteries</About>
      <TechStack>{ ['Industrial Design', 'Digital Manufacturing', '3Dprint', 'CAD Modelling'] }</TechStack>
    </div>
  </Section>
))
