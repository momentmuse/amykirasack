// --- Configurables ---

const color = {
  primary: '#68a691',
  secondary: '#eab871',
  muted: '#d88c6c',
  accent: '#6d545d',
  background: '#fff8e4',
  light: '#fffaf0',
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
    xsmall: '0.6em',
    small: '0.9em',
    medium: '1.1em',
    large: '1.5em',
    xlarge: '2em',
    xxlarge: '2.5em',
    xxxlarge: '3.5em',
  },
  lineHeight: {
    heading: '1.2em',
    body: '2em',
  },
};

const screenWidth = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
};

// --- Breakpoints & Spacing ---

const device = {
  mobile: `(min-width: ${screenWidth.mobile})`,
  tablet: `(min-width: ${screenWidth.tablet})`,
  laptop: `(min-width: ${screenWidth.laptop})`,
};

const padding = {
  mobile: '0em 2em 3em 2em',
  tablet: '0em 7em 3em 7em',
  laptop: '0em 9em 3em 9em',
};

const theme = { color, font, padding, device };
export default theme;
