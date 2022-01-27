import { DefaultTheme } from 'styled-components';

// --- Configurables ---

const color = {
  primary: '#68a691',
  secondary: '#eab871',
  muted: '#d88c6c',
  accent: '#6d545d',
  background: '#fff8e4',
  light: '#fdfeff',
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
    xsmall: '0.6rem',
    small: '0.9rem',
    medium: '1.1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '2.5rem',
    xxxlarge: '3.5rem',
  },
  lineHeight: {
    heading: '1.2rem',
    body: '2rem',
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
  mobile: '1rem 2rem',
  tablet: '2rem 7rem',
  laptop: '3rem 8rem',
};

const theme: DefaultTheme = { color, font, padding, device };
export default theme;
