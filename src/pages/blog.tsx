import * as React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';

type Post = {
  frontmatter: {
    slug: string;
    description: string;
    date: string;
    title: string;
  };
  excerpt: string;
};

interface BlogProps {
  data: {
    allMarkdownRemark: {
      nodes: Post[];
    };
  };
}

const Blog = ({ data }: BlogProps) => {
  const posts = data.allMarkdownRemark?.nodes;
  const generatePosts = (posts: Post[]): JSX.Element => {
    return (
      <>
        {posts.map((post) => {
          return (
            <article key={post.frontmatter.slug}>
              <div>
                <h2>
                  <Link to={post.frontmatter.slug}>
                    {post.frontmatter.title}
                  </Link>
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
      </>
    );
  };

  return (
    <Layout>
      <h1>This is the Blog page 📝 </h1>
      {generatePosts(posts)}
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query Blog {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog-posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
