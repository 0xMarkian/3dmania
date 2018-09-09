const formatMedia= size => qualifier => `@media (${qualifier}-width: ${size}px)`

const smMedia = formatMedia(576)
const mdMedia = formatMedia(768)
const lgMedia = formatMedia(992)
const xlMedia = formatMedia(1200)

export default {
  baseColor: '#242424',
  baseFontColor: 'white',
  baseFontSize: '18px',
  highlightedColor: '#00f19f',
  secondaryColor: '#4f48ff',
  defaultSection: {
    padding: '5% 0',
  },
  breakpoints: {
    sm: { lt: smMedia('max'), gt: smMedia('min') },
    md: { lt: mdMedia('max'), gt: mdMedia('min') },
    lg: { lt: lgMedia('max'), gt: lgMedia('min') },
    xl: { lt: xlMedia('max'), gt: xlMedia('min') },
  },
}
