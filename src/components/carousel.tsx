import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

interface CarouselProps {
  id: string;
}

interface Job {
  frontmatter: {
    title: string;
    image: ImageDataLike;
    url: string;
    company: string;
    description: string;
    startyear: number;
    endyear: number;
  };
}

const Carousel = ({ id }: CarouselProps) => {
  const data = useStaticQuery(graphql`
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
                gatsbyImageData(width: 280, placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
  `);

  const jobs = data.allMarkdownRemark.nodes;

  const sanitizeYear = (start: number, end: number) => {
    return start === end ? end : `${start} - ${end}`;
  };

  return (
    <div id={id}>
      <h1>🎠 Nothing ever becomes real 'til it is experienced. 🎠</h1>
      {jobs?.map((job: Job) => {
        const image = getImage(job.frontmatter.image);

        return (
          <article key={job.frontmatter.url}>
            <div>
              <h2>{job.frontmatter.title}</h2>
              {image && <GatsbyImage image={image} alt={'company image'} />}
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
};

export default Carousel;
