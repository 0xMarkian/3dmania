import {Container} from 'reactstrap'


export { default as Subtitle } from './Subtitle'

export default injectSheet({
  Section: {
    padding: '6% 0 10%',
    backgroundSize: 'cover',
  },

})(
  ({ classes, children, ...others }) => (
    <section {...others} className={[classes.Section, others.className || ''].join(' ')}>
      <Container>{children}</Container>
    </section>
  )
)
