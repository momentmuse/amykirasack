import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';

import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import 'normalize.css';
import '../css/typography.css';
import '@fontsource/dm-mono';
import { ParallaxProvider } from 'react-scroll-parallax';

interface LayoutProps {
  children: JSX.Element;
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 3vh;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.color.background};

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.font.family.heading};
    color: ${({ theme }) => theme.color.accent};
    letter-spacing: -0.7px;
  }

  h1 {
    color: ${({ theme }) => theme.color.background};
    text-shadow: 0 0 3px ${({ theme }) => theme.color.light},
      0 0 3px ${({ theme }) => theme.color.accent},
      0 0 3px ${({ theme }) => theme.color.accent},
      0 0 3px ${({ theme }) => theme.color.accent};
    &::before {
      content: '“';
      font-size: ${({ theme }) => theme.font.size.xxlarge};
      font-family: 'Times New Roman', serif;
    }
    &::after {
      content: '”';
      font-size: ${({ theme }) => theme.font.size.xxlarge};
      font-family: 'Times New Roman', serif;
      vertical-align: text-top;
    }
  }

  p {
    font-family: ${({ theme }) => theme.font.family.body};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.font.size.medium};
    line-height: ${({ theme }) => theme.font.lineHeight.body};
  }

  a {
    font-family: ${({ theme }) => theme.font.family.bodyBold};
    color: ${({ theme }) => theme.color.accent};
    text-decoration: 2px ${({ theme }) => theme.color.secondary} wavy underline;
  }
`;

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
