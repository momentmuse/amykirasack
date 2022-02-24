import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { Container, Blobs, BlobMask } from 'theme/styles';

export const ProfileContainer = styled(Container)`
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

export const ImageContainer = styled.div`
  min-height: 40vh;
`;

export const ImageMask = styled(BlobMask)`
  mask-image: url(${Blobs.profile});
`;

export const TextContainer = styled.div`
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

export const StyledParallax = styled(Parallax)`
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: -5rem;
  }
`;

export const Titles = styled.p`
  padding: 0 1rem;
`;

export const PostSpotlight = styled.div`
  padding: ${({ theme }) => theme.padding.mobile};
`;
