import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import AboutMe3 from './../images/espai.png';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { Container, Blobs, BlobMask } from '../styles';

const ProfileContainer = styled(Container)`
  padding: ${({ theme }) => theme.padding.mobile};
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
  margin-top: -12vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.accent};
  z-index: 1;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 0;
  }

  span {
    font-family: ${({ theme }) => theme.font.family.alt};
    font-size: ${({ theme }) => theme.font.size.xxxlarge};
    text-shadow: -2px 2px 0px ${({ theme }) => theme.color.light};
  }
`;

const StyledParallax = styled(Parallax)`
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: -4em;
  }
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
      <Parallax rotate={[10, -10]} scale={[0.85, 1.1]}>
        <ImageMask>
          <img src={AboutMe3} />
        </ImageMask>
      </Parallax>
      <TextContainer>
        <StyledParallax scale={[0.85, 1]}>
          <span>Amy Kirasack</span>
          <p>
            founder of seedling | software developer | writer | lifelong learner
          </p>
        </StyledParallax>
        {data && (
          <>
            <p>{newestPost.excerpt}</p>
            <Link to={newestPost.frontmatter.slug}>read more</Link>
          </>
        )}
      </TextContainer>
    </ProfileContainer>
  );
};

export default Profile;
