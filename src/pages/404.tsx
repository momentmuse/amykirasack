import * as React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Not found</title>
        <h1 style={headingStyles}>Oops!</h1>
        <p style={paragraphStyles}>
          It looks like you're looking for something that (in at least this
          branch of the multiverse) doesn't exist.
          <br />
          <br />
          Think this is a mistake? <Link to="/#contact">Let me know.</Link>
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
