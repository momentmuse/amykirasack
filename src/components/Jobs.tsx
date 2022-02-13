import React from 'react';
import { getJobs } from '../services/static';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ScrollingHeadline from './ScrollingHeadline';
import { SectionHeaderAlt } from './../styles';

const JobsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ScrollingCarousel = styled.div`
  margin: 5rem 0;
  padding: 1rem 0;
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

  @media ${({ theme }) => theme.device.laptop} {
    margin: 6rem 0;
    padding: 1rem 8rem;
  }
`;

const JobCard = styled.div`
  position: relative;
  width: 19rem;
  height: 30rem;
  margin: 0 2rem;
  background-color: ${({ theme }) => theme.color.light};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: 25px;

  img {
    width: 100%;
    border-radius: 25px 25px 0 0;
  }

  span {
    font-family: ${({ theme }) => theme.font.family.body};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.font.size.small};
  }

  p {
    position: absolute;
    right: 1rem;
    bottom: 0;
  }

  will-change: transform;
  transition: transform 450ms;

  &:hover,
  &:active {
    transition: transform 140ms;
    transform: translateY(-1rem);
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

const Description = styled.div`
  padding: 1rem;
`;

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

type JobsProps = {
  id: string;
};

const Jobs = ({ id }: JobsProps) => {
  const jobs = getJobs();

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
              <JobCard>
                <a href={job.frontmatter.url} target="_blank">
                  {image && <GatsbyImage image={image} alt={'company image'} />}{' '}
                </a>
                <Description>
                  <h2>
                    <a href={job.frontmatter.url} target="_blank">
                      {job.frontmatter.company}
                    </a>
                  </h2>
                  <h3>{job.frontmatter.title}</h3>
                  <span>{job.frontmatter.description}</span>
                  <p>
                    {sanitizeYear(
                      job.frontmatter.startyear,
                      job.frontmatter.endyear
                    )}
                  </p>
                </Description>
              </JobCard>
            </article>
          );
        })}
      </ScrollingCarousel>
    </JobsContainer>
  );
};

export default Jobs;
