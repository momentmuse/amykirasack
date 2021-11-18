import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Carousel = () => {
  // TODO: Try to make DRYer.
  // Refactor Carousel to accept Blog or Jobs data depending on passed id from props

  const sanitizeYear = (start, end) => {
    return start === end ? end : `{start} - {end}`;
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
            <h1>🎠 This is the Carousel component 🎠</h1>
            {jobs?.map((job) => {
              return (
                <article key={job.frontmatter.url}>
                  <div>
                    <h2>{job.frontmatter.title}</h2>
                    <h3>
                      <a href={job.frontmatter.url} target="_blank">
                        {job.frontmatter.company}
                      </a>
                    </h3>
                    <p>{job.frontmatter.description}</p>
                    <p>
                      {sanitizeYear(
                        job.frontmatter.startyear,
                        job.frontmatter.startyear
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
