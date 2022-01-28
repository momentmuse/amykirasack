import * as React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../styles';

const BlogContainer = styled(Container)`
  padding: ${({ theme }) => theme.padding.mobile};
  @media ${({ theme }) => theme.device.tablet} {
    padding: 6rem 20rem;
  }
`;

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
      <BlogContainer>
        {posts.map((post) => {
          return (
            <article key={post.frontmatter.slug}>
              <div>
                <h1>
                  <Link to={post.frontmatter.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <h3>{post.frontmatter.description}</h3>
                <p>{post.frontmatter.date}</p>
                <p>{post.excerpt}</p>
                <p>
                  <Link to={post.frontmatter.slug}>read more</Link>
                </p>
              </div>
            </article>
          );
        })}
      </BlogContainer>
    );
  };

  return <Layout>{generatePosts(posts)}</Layout>;
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
