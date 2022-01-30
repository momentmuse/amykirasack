import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      light: string;
    };

    font: {
      family: {
        heading: string;
        body: string;
        bodyBold: string;
        alt: string;
        monospace: string;
      };
      size: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        xxxlarge: string;
        giant: string;
      };
      lineHeight: {
        body: string;
      };
    };

    padding: {
      mobile: string;
      tablet: string;
      laptop: string;
    };

    device: {
      mobile: string;
      tablet: string;
      laptop: string;
      highres: string;
    };
  }
}
