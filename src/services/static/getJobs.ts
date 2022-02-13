import { useStaticQuery, graphql } from 'gatsby';

export const getJobs = () => {
  const {
    allMarkdownRemark: { nodes: jobs },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: frontmatter___endyear, order: DESC }
      ) {
        nodes {
          frontmatter {
            company
            description
            endyear
            startyear
            title
            url
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  quality: 100
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
  `);
  return jobs;
};
