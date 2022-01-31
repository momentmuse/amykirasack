import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Container } from '../styles';

const PostContainer = styled(Container)`
  padding: ${({ theme }) => theme.padding.mobile};
  @media ${({ theme }) => theme.device.tablet} {
    padding: 6rem 18rem;
  }
`;

const BackToIndex = styled.div`
  margin-top: 6rem;
`;

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
      <PostContainer>
        <article>
          <div>
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.date}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>

        <BackToIndex>
          <Link to={'/blog'}>to blog index</Link>
        </BackToIndex>
      </PostContainer>
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
