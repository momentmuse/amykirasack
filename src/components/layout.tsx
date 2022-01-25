import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import styled, { ThemeProvider } from 'styled-components';
import theme from './../theme';
import 'normalize.css';
import '../css/typography.css';
import '@fontsource/dm-mono';

interface LayoutProps {
  children: JSX.Element;
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 3vh;
  margin: 0 auto;

  /* @media ${({ theme }) => theme.device.tablet} {
    width: 90vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 80vw;
  } */

  h1,
  h2,
  h3 {
    font-family: '${({ theme }) => theme.font.family.heading}';
    color: ${({ theme }) => theme.color.accent};
    letter-spacing: -0.7px;
  }

  h1::before {
    content: '“';
    font-family: 'Times New Roman', serif;
    font-size: ${({ theme }) => theme.font.size.xlarge};
    text-shadow: -2px 2px 0px ${({ theme }) => theme.color.background};
  }

  h1::after {
    content: '”';
    font-family: 'Times New Roman', serif;
    font-size: ${({ theme }) => theme.font.size.xlarge};
    text-shadow: -2px 2px 0px ${({ theme }) => theme.color.background};
    vertical-align: text-top;
  }

  p {
    font-family: ${({ theme }) => theme.font.family.body};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.font.size.medium};
  }

  a {
    font-family: ${({ theme }) => theme.font.family.bodyBold};
    color: ${({ theme }) => theme.color.accent};
    text-decoration: ${({ theme }) => theme.color.light} wavy underline;
  }
`;

const Footer = styled.footer`
  margin-top: 2vh;
  font-family: ${({ theme }) => theme.font.family.body};
  color: ${({ theme }) => theme.color.mid};
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
      <Header siteTitle={data.site.siteMetadata?.title || `Amy Kirasack`} />
      <MainWrapper>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} Amy Kirasack | Built with ❤️ with
          {` `}
          <a href="https://www.gatsbyjs.com">
            <img
              alt="Gatsby G Logo"
              src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
          </a>
        </Footer>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Layout;
