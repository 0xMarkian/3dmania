import {Container} from 'reactstrap'

const { defaultSection } = commonStyles

export default injectSheet({
  Section: {
    ...defaultSection,
  }
})(
  ({ classes, children, ...others }) => (
    <section {...others} className={[classes.Section, others.className || ''].join(' ')}>
      <Container>{children}</Container>
    </section>
  )
)
