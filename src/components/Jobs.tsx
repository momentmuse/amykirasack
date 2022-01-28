import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ScrollingHeadline from './ScrollingHeadline';
import { Container, SectionHeaderAlt } from '../styles';

const JobsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ScrollingCarousel = styled.div`
  margin: 4rem 0;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  &::scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.device.tablet} {
    margin: 6rem 0;
    padding-left: 4rem;
  }
`;

const Job = styled.div`
  width: 60vw;
  padding: 0 2rem;
  @media ${({ theme }) => theme.device.tablet} {
    width: 22rem;
  }

  img {
    border-radius: 30px;
  }

  span {
    font-family: ${({ theme }) => theme.font.family.body};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.font.size.small};
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
                gatsbyImageData(
                  height: 300
                  quality: 85
                  placeholder: DOMINANT_COLOR
                )
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
      <SectionHeaderAlt>work.</SectionHeaderAlt>
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
                <h3>{job.frontmatter.title}</h3>
                {image && <GatsbyImage image={image} alt={'company image'} />}
                <h3>
                  <a href={job.frontmatter.url} target="_blank">
                    {job.frontmatter.company}
                  </a>
                </h3>
                <span>{job.frontmatter.description}</span>
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
