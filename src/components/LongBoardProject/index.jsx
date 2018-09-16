import Section from '../Section'
import { CompanyBrand, TechStack, About } from '../ProjectSection'
import AccentExp from 'components/AccentExp'

import BackgroundPhoto from './background.jpg'

export default compose(
  injectSheet(({Section, LongBoardProject: LongBoardProjectStyles, breakpoints}) => ({
    LongBoardProject: {
      minHeight: '110vh',
      backgroundImage: `url(${ BackgroundPhoto })`,
      backgroundPosition: 'center',
      color: LongBoardProjectStyles.accentColor,
      '&:before': {
        ...Section.BlackLayer,
        opacity: '.65',
      }
    },
    wrapper: {
      maxWidth: '700px',
    },
    [breakpoints.md.gt]: {
      wrapper: {
        float: 'right',
      },
      LongBoardProject: {
        textAlign: 'right',
      },
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
