import * as React from 'react';
import About from './../components/about';
import Carousel from './../components/carousel';
import Contact from './../components/contact';
import Layout from './../components/layout';

const IndexPage = () => {
  // fix layout error? needs children
  return (
    <Layout>
      <title>Heyooo</title>
      <div
        style={{
          height: `40vh`,
        }}
      >
        <h1>
          This is the index!!
          <br />
          <span>— you just made a Gatsby site! </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <h1>
          Be curious, inventive, adventurous, passionate, anything you want to
          be, here now.
        </h1>
      </div>
      <div>
        <About id={'about'} />
        <Carousel id={'work'} />
        <Contact id={'contact'} />
      </div>
    </Layout>
  );
};

export default IndexPage;
