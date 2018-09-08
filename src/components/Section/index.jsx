const { defaultSection } = commonStyles

export default injectSheet({
  Section: {
    ...defaultSection,
  }
})(
  ({ children, ...others }) => (
    <section {...others}>{children}</section>
  )
)
