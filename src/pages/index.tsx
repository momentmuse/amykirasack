import * as React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import About from '../components/About';
import Jobs from '../components/Jobs';
import Contact from '../components/Contact';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 10vh;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Section>
        <Hero />
        <Profile id={'profile'} />
        <About id={'about'} />
        <Jobs id={'work'} />
        <Contact id={'contact'} />
      </Section>
    </Layout>
  );
};

export default IndexPage;
