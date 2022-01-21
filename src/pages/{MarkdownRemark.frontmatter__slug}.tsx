import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from './../components/layout';

interface TemplateProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        title: string;
      };
    };
  };
}

const Template = ({ data }: TemplateProps) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <h1>This is the BlogPost template</h1>
      <article>
        <div>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <p>
        <Link to={'/blog'}>to blog index</Link>
      </p>
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
