import { memo } from 'react';
import { getJobs } from 'services/static';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { ScrollingHeadline } from 'components/ScrollingHeadline';
import { SectionHeaderAlt } from 'theme/styles';
import {
  JobsContainer,
  ScrollingCarousel,
  JobCard,
  Description,
} from './Jobs.styled';

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

  const createJobArticles = () => {
    return jobs?.map((job: Job) => {
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
    });
  };

  return (
    <JobsContainer id={id}>
      <SectionHeaderAlt>work.</SectionHeaderAlt>
      <ScrollingHeadline
        headline={
          'Seek the wisdom that will untie your knot. Seek the path that demands your whole being.'
        }
      />
      <ScrollingCarousel>{createJobArticles()}</ScrollingCarousel>
    </JobsContainer>
  );
};

export const MemoizedJobs = memo(Jobs);
