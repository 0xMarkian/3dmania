import {Container} from 'reactstrap'

const { defaultSection } = commonStyles

export default compose(injectSheet({
  Section: {
    ...defaultSection,
  }
}), hot(module))(
  ({ classes, children, ...others }) => (
    <section {...others} className={[classes.Section, others.className || ''].join(' ')}>
      <Container>{children}</Container>
    </section>
  )
)
