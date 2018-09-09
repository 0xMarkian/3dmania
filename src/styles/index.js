const formatMedia= size => qualifier => `@media (${qualifier}-width: ${size}px)`

const smMedia = formatMedia(576)
const mdMedia = formatMedia(768)
const lgMedia = formatMedia(992)
const xlMedia = formatMedia(1200)

export default {
  // colors
  baseColor: '#242424',
  highlightedColor: '#00f19f',
  secondAccentColor: 'white',
  secondaryColor: '#4f48ff',

  baseFontColor: 'white',
  baseFontSize: '18px',
  
  breakpoints: {
    sm: { lt: smMedia('max'), gt: smMedia('min') },
    md: { lt: mdMedia('max'), gt: mdMedia('min') },
    lg: { lt: lgMedia('max'), gt: lgMedia('min') },
    xl: { lt: xlMedia('max'), gt: xlMedia('min') },
  },

  LongBoardProject: {
    accentColor: '#239BFC',
  }
}
