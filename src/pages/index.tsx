import React from 'react';
import Layout from './../components/Layout';
import Hero from './../components/Hero';
import Profile from './../components/Profile';
import About from './../components/About';
import Jobs from './../components/Jobs';
import Contact from './../components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <Profile id={'profile'} />
        <About id={'about'} />
        <Jobs id={'work'} />
        <Contact id={'contact'} />
      </>
    </Layout>
  );
};

export default IndexPage;
