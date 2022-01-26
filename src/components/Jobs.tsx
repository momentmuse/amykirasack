import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ScrollingHeadline from './ScrollingHeadline';
import { Parallax } from 'react-scroll-parallax';

const JobsContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => theme.styles.padding};
  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ theme }) => theme.styles.paddingTablet};
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: ${({ theme }) => theme.styles.paddingLaptop};
  }
`;

const ScrollingCarousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Job = styled.div`
  flex: 0 0 auto;
  width: 60vw;
  @media ${({ theme }) => theme.device.tablet} {
    width: 30vw;
  }
`;

interface JobsProps {
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

const Jobs = ({ id }: JobsProps) => {
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
    <JobsContainer id={id}>
      <ScrollingHeadline
        headline={
          'Seek the wisdom that will untie your knot. Seek the path that demands your whole being.'
        }
      />
      <ScrollingCarousel>
        {jobs?.map((job: Job) => {
          const image = getImage(job.frontmatter.image);

          return (
            <article key={job.frontmatter.url}>
              <Job>
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
              </Job>
            </article>
          );
        })}
      </ScrollingCarousel>
    </JobsContainer>
  );
};

export default Jobs;
