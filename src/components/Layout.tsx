import { ReactNode } from 'react';
import { getMetadata } from 'services/static';
import { Header } from './Header';
import { Footer } from './Footer';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'normalize.css';
import 'css/typography.css';
import '@fontsource/dm-mono';
import 'css/Layout.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from 'theme/index';
import Cursor from 'assets/cursors/cursor.png';
import Pointer from 'assets/cursors/pointer.png';

const GlobalStyle = createGlobalStyle`
  :root {
    background-color: ${({ theme }) => theme.color.background};
    -webkit-cursor: url(${Cursor}), auto;
    cursor: url(${Cursor}), auto;
  }

  html, body {
    scroll-behavior: smooth;
    overscroll-behavior: none;
    overflow-x: hidden;
    width: 100%;
    position: relative;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    font-size: 14px;
    @media ${({ theme }) => theme.device.laptop} {
      font-size: 18px;

    };
    @media ${({ theme }) => theme.device.highres} {
        font-size: 28px;
    }
  }

    h1,
    h2,
    h3 {
      font-family: ${({ theme }) => theme.font.family.heading};
      color: ${({ theme }) => theme.color.accent};
      letter-spacing: -0.7px;
    }

    p {
    font-family: ${({ theme }) => theme.font.family.body};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.font.size.medium};
    line-height: ${({ theme }) => theme.font.lineHeight.body};
    }

    a {
    -webkit-cursor: url(${Pointer}), pointer;
    cursor: url(${Pointer}), pointer;
    font-family: ${({ theme }) => theme.font.family.bodyBold};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.font.size.medium};
    -webkit-text-decoration-color: ${({ theme }) => theme.color.secondary};
    -webkit-text-decoration-line: underline;
    -webkit-text-decoration-style: wavy;
    text-decoration: wavy underline ${({ theme }) => theme.color.secondary}
    2px;
    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
   };
  
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
`;

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
