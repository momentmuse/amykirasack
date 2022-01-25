import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import styled from 'styled-components';

const CarouselContainer = styled.div`
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

const JobContainer = styled.div`
  flex: 0 0 auto;
  width: 60vw;
  @media ${({ theme }) => theme.device.tablet} {
    width: 30vw;
  }
`;

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
    <CarouselContainer id={id}>
      <h1>Nothing ever becomes real ’til it is experienced.</h1>
      <ScrollingCarousel>
        {jobs?.map((job: Job) => {
          const image = getImage(job.frontmatter.image);

          return (
            <article key={job.frontmatter.url}>
              <JobContainer>
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
              </JobContainer>
            </article>
          );
        })}
      </ScrollingCarousel>
    </CarouselContainer>
  );
};

export default Carousel;
