import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import AboutMe3 from './../images/espai.png';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { Container, Blobs, BlobMask, SectionHeader } from '../styles';

const ProfileContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  padding: -4rem 2rem;

  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ theme }) => theme.padding.tablet};
    flex-direction: row;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: ${({ theme }) => theme.padding.laptop};
  }
`;

const ImageMask = styled(BlobMask)`
  mask-image: url(${Blobs.profile});
`;

const TextContainer = styled.div`
  margin-top: -10rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.accent};
  z-index: 1;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 5rem;
    width: 35rem;
  }
`;

const StyledParallax = styled(Parallax)`
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: -5rem;
  }
`;

const PostSpotlight = styled.div`
  padding: ${({ theme }) => theme.padding.mobile};
`;

interface ProfileProps {
  id: string;
}

const Profile = ({ id }: ProfileProps) => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/blog-posts/" }) {
        excerpt
        frontmatter {
          slug
        }
      }
    }
  `);

  const newestPost = data.markdownRemark;

  return (
    <ProfileContainer id={id}>
      <Parallax rotate={[10, -10]} scale={[0.8, 1.2]}>
        <ImageMask>
          <img src={AboutMe3} />
        </ImageMask>
      </Parallax>
      <TextContainer>
        <StyledParallax scale={[0.8, 1.2]}>
          <SectionHeader>Amy Kirasack</SectionHeader>
          <p>
            founder of seedling | software developer | writer | lifelong learner
          </p>
        </StyledParallax>
        {data && (
          <PostSpotlight>
            <p>{newestPost.excerpt}</p>
            <Link to={newestPost.frontmatter.slug}>read more?</Link>
          </PostSpotlight>
        )}
      </TextContainer>
    </ProfileContainer>
  );
};

export default Profile;
