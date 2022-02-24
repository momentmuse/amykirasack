import styled from 'styled-components';
import { Container, BlobMask, Blobs } from 'theme/styles';

export const AboutContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: -3;

  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 4rem;
  }
`;

export const ImageMaskA = styled(BlobMask)`
  mask-image: url(${Blobs.aboutA});
`;

export const ImageMaskB = styled(BlobMask)`
  mask-image: url(${Blobs.aboutB});
`;

export const TextContainer = styled.div`
  margin-top: -4rem;
  @media ${({ theme }) => theme.device.tablet} {
    position: absolute;
    left: 6rem;
    max-width: 33rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    left: 9rem;
    bottom: 4rem;
  }
  @media ${({ theme }) => theme.device.highres} {
    left: 22rem;
    bottom: 0rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2rem;
`;
