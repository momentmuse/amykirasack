import { DefaultTheme } from 'styled-components';

// --- Configurables ---

const color = {
  primary: '#68a691',
  secondary: '#f9b145',
  accent: '#6d545d',
  background: '#fff8e4',
  light: '#fdfeff',
};

const font = {
  family: {
    heading: 'Young Serif',
    body: 'Glacial Indifference, sans-serif',
    bodyBold: 'Glacial Indifference Bold',
    monospace: 'DM Mono, Menlo, monospace',
  },
  size: {
    xsmall: '0.6rem',
    small: '0.9rem',
    medium: '1.2rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '3.5rem',
    xxxlarge: '4.5rem',
    giant: '6rem',
    enormous: '8rem',
  },
  lineHeight: {
    body: '2rem',
  },
};

const screenWidth = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  highres: '2200px',
};

// --- Breakpoints & Spacing ---

const device = {
  mobile: `(min-width: ${screenWidth.mobile})`,
  tablet: `(min-width: ${screenWidth.tablet})`,
  laptop: `(min-width: ${screenWidth.laptop})`,
  highres: `(min-width: ${screenWidth.highres})`,
};

const padding = {
  mobile: '3rem 1.5rem',
  tablet: '4rem 7rem',
  laptop: '5rem 9rem',
};

const theme: DefaultTheme = { color, font, padding, device };
export default theme;
