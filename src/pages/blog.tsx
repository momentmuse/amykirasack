import * as React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark?.nodes;

  return (
    <Layout>
      <h1>This is the Blog page 📝 </h1>
      {posts?.map((post) => {
        return (
          <article key={post.frontmatter.slug}>
            <div>
              <h2>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              </h2>
              <h3>{post.frontmatter.description}</h3>
              <p>{post.frontmatter.date}</p>
              <p>{post.excerpt}</p>
              <p>
                <Link to={post.frontmatter.slug}>Read more</Link>
              </p>
            </div>
          </article>
        );
      })}
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query Blog {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          slug
        }
      }
    }
  }
`;
