import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Espai from './../images/espai.png';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { Container, Blobs, BlobMask, SectionHeader } from './../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';

const ProfileContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  padding: -4rem 2rem;
  min-height: 60vh;

  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ theme }) => theme.padding.tablet};
    flex-direction: row;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: ${({ theme }) => theme.padding.laptop};
  }
`;

const ImageContainer = styled.div`
  min-height: 40vh;
`;

const ImageMask = styled(BlobMask)`
  mask-image: url(${Blobs.profile});
`;

const TextContainer = styled.div`
  margin-top: -11rem;
  margin-left: 1.5rem;
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

const Titles = styled.p`
  padding: 0 1rem;
`;

const PostSpotlight = styled.div`
  padding: ${({ theme }) => theme.padding.mobile};
`;

type ProfileProps = {
  id: string;
};

const Profile = ({ id }: ProfileProps) => {
  const { markdownRemark: spotlightPost } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { slug: { eq: "/blog/komorebi" } }) {
        frontmatter {
          slug
          description
        }
      }
    }
  `);

  return (
    <ProfileContainer id={id}>
      <ImageContainer>
        <Parallax rotate={[10, -10]} scale={[0.8, 1.2]}>
          <ImageMask>
            <img
              src={Espai}
              alt="a woman smiles as she sits in a cafe full of plants"
            />
          </ImageMask>
        </Parallax>
      </ImageContainer>
      <TextContainer>
        <StyledParallax scale={[0.8, 1.2]}>
          <SectionHeader>Amy Kirasack</SectionHeader>
          <Titles>
            founder of seedling | software developer | writer | lifelong learner
          </Titles>
        </StyledParallax>
        {spotlightPost && (
          <PostSpotlight>
            <p>{spotlightPost.frontmatter.description}</p>
            <Link to={spotlightPost.frontmatter.slug}>
              read more? <FontAwesomeIcon icon={faPenFancy} />
            </Link>
          </PostSpotlight>
        )}
      </TextContainer>
    </ProfileContainer>
  );
};

export default Profile;
