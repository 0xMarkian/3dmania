import {Container} from 'reactstrap'


export { default as Subtitle } from './Subtitle'

export default injectSheet({
  Section: {
    padding: '6% 0 10%',
    backgroundSize: 'cover',
    overflowX: 'hidden'
  },

})(
  ({ classes, children, ...props }) => (
    <section {...props} className={[classes.Section, props.className || ''].join(' ')}>
      <Container>{children}</Container>
    </section>
  )
)
