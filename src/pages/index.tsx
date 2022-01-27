import * as React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import About from '../components/About';
import Jobs from '../components/Jobs';
import Contact from '../components/Contact';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from './../theme';
import Cursor from './../cursors/cursor.png';
import Pointer from './../cursors/pointer.png';

const GlobalStyle = createGlobalStyle`
  :root {
    background-color: ${({ theme }) => theme.color.background};
    cursor: url(${Cursor}), auto;

    h1,
    h2,
    h3 {
      font-family: ${({ theme }) => theme.font.family.heading};
      color: ${({ theme }) => theme.color.accent};
      letter-spacing: -0.7px;
    }

    h1 {
      font-size: ${({ theme }) => theme.font.size.xxlarge};
      color: ${({ theme }) => theme.color.light};
      text-shadow: 0 0 3px ${({ theme }) => theme.color.background},
        0 0 3px ${({ theme }) => theme.color.accent},
        0 0 3px ${({ theme }) => theme.color.accent},
        0 0 3px ${({ theme }) => theme.color.accent};
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
  };
  }
`;

const IndexPage = () => {
  console.log('WHAT IS IN HERE ', theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <>
          <Hero />
          <Profile id={'profile'} />
          <About id={'about'} />
          <Jobs id={'work'} />
          <Contact id={'contact'} />
        </>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
