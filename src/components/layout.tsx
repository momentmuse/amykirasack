import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';

import styled from 'styled-components';
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
  top: 30vh;
  margin: 0 auto;
  overflow-x: hidden;
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
    <ParallaxProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Amy Kirasack`} />
      <MainWrapper>
        <main>{children}</main>
        <Footer />
      </MainWrapper>
    </ParallaxProvider>
  );
};

export default Layout;
