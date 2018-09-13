import Section from '../Section'
import { CompanyBrand, TechStack, About } from '../ProjectSection'
import AccentExp from 'components/AccentExp'

import { Row, Col } from 'reactstrap'

import BackgroundPhoto from './background.jpg'

export default compose(
  injectSheet(({Section, SkeletonProject: SkeletonProjectStyles, breakpoints}) => ({
    SkeletonProject: {
      backgroundImage: `url(${ BackgroundPhoto })`,
      backgroundPosition: 'center 20%',
      color: 'white',
      '&:before': {
        ...Section.BlackLayer,
        opacity: '.65',
      },
    },
    Wrapper: {
      maxWidth: '700px',
    },
    [breakpoints.md.gt]: {
      Wrapper: {
        float: 'right',
        textAlign: 'right',
      },
    },
    NoBr: {
      whiteSpace: 'nowrap'
    }
  }))
)( ({ classes, theme, ...props }) => (
  <Section {...props} className={classes.SkeletonProject}>
    <div className={classes.Wrapper}>
      <CompanyBrand>Modigliani</CompanyBrand>
      <About>Bringing <AccentExp color={theme.SkeletonProject.accentColor}>anatomically correct</AccentExp> human skeleton to <span className={classes.NoBr}>artist aid</span></About>
      <TechStack>{['Education', 'Digital Sculpting', '3dprint']}</TechStack>
    </div>
  </Section>
))
