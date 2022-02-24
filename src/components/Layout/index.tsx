import { ReactNode } from 'react';
import { getMetadata } from 'services/static';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import 'css/typography.css';
import '@fontsource/dm-mono';
import 'css/Layout.css';
import theme from 'theme/index';
import { GlobalStyle, MainWrapper } from './Layout.styled';
import { ParallaxProvider } from 'react-scroll-parallax';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const siteTitle = getMetadata();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxProvider>
        <Header siteTitle={siteTitle || 'Amy Kirasack'} />
        <MainWrapper>
          <main>{children}</main>
          <Footer />
        </MainWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default Layout;
