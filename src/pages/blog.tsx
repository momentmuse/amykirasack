import Layout from './../components/Layout';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container, SectionHeader, Divider } from './../styles';

const BlogContainer = styled(Container)`
  padding: ${({ theme }) => theme.padding.mobile};
  @media ${({ theme }) => theme.device.tablet} {
    padding: 4rem 7rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 6rem 18rem;
  }
  @media ${({ theme }) => theme.device.highres} {
    padding: 6rem 22rem;
  }
`;

const PostTitle = styled(SectionHeader)`
  font-size: ${({ theme }) => theme.font.size.xlarge};
  text-shadow: -1px 1px 0px ${({ theme }) => theme.color.light};
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const PostDivider = styled(Divider)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

interface Post {
  frontmatter: {
    slug: string;
    description: string;
    date: string;
    title: string;
  };
  excerpt: string;
}

type BlogProps = {
  data: {
    allMarkdownRemark: {
      nodes: Post[];
    };
  };
};

const Blog = ({
  data: {
    allMarkdownRemark: { nodes: posts },
  },
}: BlogProps) => {
  const generatePosts = (posts: Post[]): JSX.Element => {
    return (
      <BlogContainer>
        {posts.map((post) => {
          return (
            <article key={post.frontmatter.slug} id={post.frontmatter.slug}>
              <div>
                <Link to={post.frontmatter.slug}>
                  <PostTitle>{post.frontmatter.title}</PostTitle>
                </Link>
                <h3>{post.frontmatter.description}</h3>
                <p>{post.frontmatter.date}</p>
                <p>{post.excerpt}</p>
                <p>
                  <Link to={post.frontmatter.slug}>read more</Link>
                </p>
              </div>
              <PostDivider />
            </article>
          );
        })}
      </BlogContainer>
    );
  };

  return <Layout>{generatePosts(posts)}</Layout>;
};

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

export default Blog;
