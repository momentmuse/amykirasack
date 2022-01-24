// --- Configurable Values ---

const color = {
  primary: '#8c9a8d',
  secondary: '#eab871',
  muted: '#d88c6c',
  accent: '#6d545d',
  background: '#f0e9df',
  light: '#f0f0f0',
  mid: '#4e4e4e',
  dark: '#282c34',
};

const font = {
  family: {
    heading: 'Young Serif',
    body: 'Glacial Indifference, sans-serif',
    bodyBold: 'Glacial Indifference Bold',
    monospace: 'DM Mono, Menlo, monospace',
  },
  weight: {
    heading: 700,
    bold: 900,
    body: 400,
  },
  size: {
    xsmall: '0.5em',
    small: '0.8em',
    medium: '1em',
    large: '1.5em',
    xlarge: '2em',
    xxlarge: '2.5em',
  },
  lineHeight: {
    heading: 1.125,
    body: 1.5,
  },
};

const screenWidth = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
};

// --- Breakpoints & Styles ---

const device = {
  mobile: `(min-width: ${screenWidth.mobile})`,
  tablet: `(min-width: ${screenWidth.tablet})`,
  laptop: `(min-width: ${screenWidth.laptop})`,
};

const styles = {
  h1: {
    fontFamily: font.family.heading,
    size: font.size.xxlarge,
    color: color.muted,
  },
  h2: {
    fontFamily: font.family.heading,
    size: font.size.xlarge,
    color: color.accent,
  },
  body: {
    fontFamily: font.family.body,
    size: font.size.medium,
    color: color.light,
  },
  typewriter: {
    fontFamily: font.family.monospace,
    size: font.size.xlarge,
    color: color.accent,
  },
};

const theme = { color, font, styles, device };
export default theme;

// primary: '#08c781',
// secondary: '#00bfb3',
// warning: '#F8D762',
// danger: '#F28391',
// info: '#F8DABB',
// light: '#f0f0f0',
// mid: '#4e4e4e',
// dark: '#282c34',

// primary: '#68a691',
// d4e5df
// secondary: '#ef6f6C',
// fdd7d6
// muted: '#6d545d',
// e1ced5
// accent: '#2f3061',
// b7b7ce
// background: '#fff8e4',
// light: '#f0f0f0',
// mid: '#4e4e4e',
// dark: '#282c34',

// bg: #F0E9DF
// green: #8C9A8D
// dew: #d9e0d9,
// yellow: #EAB871
// mustard: #efddc3
// orange: #D88C6C
// coral: #ebc7b5
