import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Carousel = () => {
  // TODO: Try to make DRYer.
  // Refactor Carousel to accept Blog or Jobs data depending on passed id from props

  const sanitizeYear = (start, end) => {
    return start === end ? end : `${start} - ${end}`;
  };

  return (
    <StaticQuery
      query={graphql`
        query Jobs {
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
                    gatsbyImageData(width: 280, placeholder: DOMINANT_COLOR)
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const jobs = data.allMarkdownRemark?.nodes;

        return (
          <div
            style={{
              backgroundColor: `cornsilk`,
              height: `80vh`,
            }}
          >
            <h1>🎠 Nothing ever becomes real 'til it is experienced. 🎠</h1>
            {jobs?.map((job) => {
              const image = getImage(job.frontmatter.image);

              return (
                <article key={job.frontmatter.url}>
                  <div>
                    <h2>{job.frontmatter.title}</h2>
                    <GatsbyImage image={image} alt={'company image'} />
                    <h3>
                      <a href={job.frontmatter.url} target="_blank">
                        {job.frontmatter.company}
                      </a>
                    </h3>
                    <p>{job.frontmatter.description}</p>
                    <p>
                      {sanitizeYear(
                        job.frontmatter.startyear,
                        job.frontmatter.endyear
                      )}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        );
      }}
    />
  );
};

export default Carousel;
