import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'normalize.css';
import '../css/typography.css';
import '@fontsource/dm-mono';
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from './../theme';
import Cursor from './../cursors/cursor.png';
import Pointer from './../cursors/pointer.png';

const GlobalStyle = createGlobalStyle`
  :root {
    background-color: ${({ theme }) => theme.color.background};
    cursor: url(${Cursor}), auto;
  }

  body {
    overscroll-behavior: none;
  }

  html {
    font-size: 14px;
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 16px;

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

    h1 {
  
      /* &::before {
        content: '“';
        font-size: ${({ theme }) => theme.font.size.xxlarge};
        font-family: 'Times New Roman', serif;
      }
      &::after {
        content: '”';
        font-size: ${({ theme }) => theme.font.size.xxlarge};
        font-family: 'Times New Roman', serif;
        vertical-align: text-top;
      } */
    }

    p {
    font-family: ${({ theme }) => theme.font.family.body};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.font.size.medium};
    line-height: ${({ theme }) => theme.font.lineHeight.body};
    }

    a {
    cursor: url(${Pointer}), pointer;
    font-family: ${({ theme }) => theme.font.family.bodyBold};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.font.size.medium};
    text-decoration: 2px ${({ theme }) => theme.color.secondary} wavy underline;

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
   };
  
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 20vh;
  margin: 0 auto;
  overflow-x: hidden;
`;

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxProvider>
        <Header siteTitle={data.site.siteMetadata?.title || `Amy Kirasack`} />
        <MainWrapper>
          <main>{children}</main>
          <Footer />
        </MainWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default Layout;
