// --- Configurable Values ---

const color = {
  primary: '#68a691',
  secondary: '#ef6f6C',
  muted: '#6d545d',
  accent: '#2f3061',
  background: '#fff8e4',
  light: '#f0f0f0',
  mid: '#4e4e4e',
  dark: '#282c34',
};

const font = {
  family: {
    heading: 'Alice, Georgia, serif',
    body: 'Nunito, Roboto, sans-serif',
    monospace: 'DM Mono, Menlo, monospace',
  },
  weight: {
    heading: 700,
    bold: 700,
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
    color: 'coral',
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
