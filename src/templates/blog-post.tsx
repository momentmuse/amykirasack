import * as React from 'react';
import Layout from '../components/layout';

const BlogPost = () => {
  return (
    <Layout>
      <h1>This is the BlogPost template</h1>
      <article>
        <header>
          <h1>Post Title Goes here</h1>
          <p>Post Date Goes here</p>
        </header>
        <section>
          <p>Blog text will go here</p>
        </section>
      </article>
      <p>TODO: Add nav back to blog, next and prev post</p>
    </Layout>
  );
};

export default BlogPost;
