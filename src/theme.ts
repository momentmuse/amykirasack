// --- Configurable Values ---

const color = {
  primary: '#68a691',
  secondary: '#eab871',
  tertiary: '#2f3061',
  muted: '#d88c6c',
  accent: '#6d545d',
  background: '#fff8e4',
  light: '#f0f0f0',
  mid: '#4e4e4e',
  dark: '#282c34',
};

const font = {
  family: {
    heading: 'Young Serif',
    body: 'Glacial Indifference, sans-serif',
    bodyBold: 'Glacial Indifference Bold',
    alt: 'Butler Black',
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
    medium: '1.2em',
    large: '1.5em',
    xlarge: '2em',
    xxlarge: '2.5em',
    xxxlarge: '3.5em',
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
  padding: '2em 1em',
  paddingTablet: '2em 7em',
  paddingLaptop: '2em 10em',
};

const theme = { color, font, styles, device };
export default theme;
