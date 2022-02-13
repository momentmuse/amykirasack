import { useStaticQuery, graphql } from 'gatsby';

export const getSpotlightPost = () => {
  const { markdownRemark: spotlightPost } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { slug: { eq: "/blog/komorebi" } }) {
        frontmatter {
          slug
          description
        }
      }
    }
  `);
  return spotlightPost;
};
