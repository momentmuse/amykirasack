import Layout from 'components/Layout';
import { Hero } from 'components/Hero';
import { Profile } from 'components/Profile';
import { About } from 'components/About';
import { MemoizedJobs } from 'components/Jobs';
import { Contact } from 'components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <Profile id={'profile'} />
        <About id={'about'} />
        <MemoizedJobs id={'work'} />
        <Contact id={'contact'} />
      </>
    </Layout>
  );
};

export default IndexPage;
