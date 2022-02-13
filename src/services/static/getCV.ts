import { useStaticQuery, graphql } from 'gatsby';

export const getCV = () => {
  const {
    file: { publicURL },
  } = useStaticQuery(graphql`
    {
      file(extension: { eq: "pdf" }, absolutePath: { regex: "/cv/" }) {
        publicURL
        name
      }
    }
  `);
  return publicURL;
};
