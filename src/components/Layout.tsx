import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'normalize.css';
import './../css/typography.css';
import '@fontsource/dm-mono';
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from './../theme';
import Cursor from './../cursors/cursor.png';
import Pointer from './../cursors/pointer.png';
import './../css/Layout.css';

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

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    console.log(
      '%c %s',
      'font-weight: bold; font-size: 50px; color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68); ',
      'Well, hello there!',
      '\n',
      '\n',
      'Poking around are we? If you see anything unusual, do let me know!'
    );
  }, []);

  const { site } = useStaticQuery(graphql`
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
        <Header siteTitle={site.siteMetadata?.title || `Amy Kirasack`} />
        <MainWrapper>
          <main>{children}</main>
          <Footer />
        </MainWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default Layout;
