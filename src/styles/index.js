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
  warningColor: '#E7CD37',

  baseFontColor: 'white',
  baseFontSize: '18px',
  
  breakpoints: {
    sm: { lt: smMedia('max'), gt: smMedia('min') },
    md: { lt: mdMedia('max'), gt: mdMedia('min') },
    lg: { lt: lgMedia('max'), gt: lgMedia('min') },
    xl: { lt: xlMedia('max'), gt: xlMedia('min') },
  },

  Section: {
    BlackLayer: {
      display: 'block',
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'black',
      opacity: '.3',
    },
  },

  LongBoardProject: {
    accentColor: '#00f19f',
  },
  ConnectSection: {
    accentColor: '#4f48ff',
  },
  SkeletonProject: {
    accentColor: '#00f19f',
  },
}
