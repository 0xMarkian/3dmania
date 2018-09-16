import Section from '../Section'
import { CompanyBrand, TechStack, About } from '../ProjectSection'
import AccentExp from 'components/AccentExp'

import { Row, Col } from 'reactstrap'

import BackgroundPhoto from './background.jpg'

export default compose(
  injectSheet(({Section, SkeletonProject: SkeletonProjectStyles, breakpoints}) => ({
    SkeletonProject: {
      minHeight: '110vh',
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
    [breakpoints.md.lt]: {
      SkeletonProject: {
        backgroundPositionX: '25%',
      },
    },
    BrandLogo: {
      marginBottom: '5%',
    },
    NoBr: {
      whiteSpace: 'nowrap'
    }
  }))
)( ({ classes, theme, ...props }) => (
  <Section {...props} className={classes.SkeletonProject}>
    <div className={classes.Wrapper}>
      <CompanyBrand><div className={classes.BrandLogo}>Modigliani</div></CompanyBrand>
      <About className={classes.Title}>Bringing <AccentExp color={theme.SkeletonProject.accentColor}>anatomically correct</AccentExp> human skeleton to <span className={classes.NoBr}>artist aid</span></About>
      <AccentExp color={theme.SkeletonProject.accentColor}><TechStack>{['Education', 'Digital Sculpting', '3dprint']}</TechStack></AccentExp>
    </div>
  </Section>
))
