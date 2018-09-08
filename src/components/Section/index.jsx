export default injectSheet({
  Section: {
    padding: '3%'
  }
})(
  ({ children }) => (
    <section>{children}</section>
  )
)
