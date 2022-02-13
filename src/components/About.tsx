import { getCV } from 'services/static';
import Viaduct from 'assets/images/viaduct.png';
import Quebec from 'assets/images/quebec.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ScrollingHeadline from './ScrollingHeadline';
import {
  Container,
  Padding,
  BlobMask,
  Blobs,
  SectionHeaderAlt,
} from 'theme/styles';
import { Parallax } from 'react-scroll-parallax';

const AboutContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: -3;

  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 4rem;
  }
`;

const ImageMaskA = styled(BlobMask)`
  mask-image: url(${Blobs.aboutA});
`;

const ImageMaskB = styled(BlobMask)`
  mask-image: url(${Blobs.aboutB});
`;

const TextContainer = styled.div`
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

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

type AboutProps = {
  id: string;
};

const About = ({ id }: AboutProps) => {
  const CV = getCV();

  return (
    <AboutContainer id={id}>
      <SectionHeaderAlt>about.</SectionHeaderAlt>
      <ScrollingHeadline
        headline={
          'We do not come into this world; we come out of it, as leaves from a tree.'
        }
      />

      <ImageContainer>
        <Parallax translateY={[-20, 30]} translateX={[50, 0]}>
          <ImageMaskA>
            <img src={Viaduct} alt="a woman sits below a brick viaduct" />
          </ImageMaskA>
        </Parallax>
        <Parallax translateY={[40, -10]} translateX={[-40, 20]}>
          <ImageMaskB>
            <img
              src={Quebec}
              alt="a woman smiles as she stands in front of a budding tree"
            />
          </ImageMaskB>
        </Parallax>
      </ImageContainer>

      <Padding>
        <TextContainer>
          <p>
            Canadian-born coffee enthusiast, cat lover, and globetrotter. I’ve
            lived in Canada, the US, Singapore, Japan, and Spain, but spent time
            in many more. Currently based in the UK, where you’ll find me
            meditating on my balcony with far too many plants.
          </p>

          <LinkContainer>
            <a href={CV} target="_blank" className="button">
              <FontAwesomeIcon icon={faFilePdf} />
              &nbsp;get my cv
            </a>
            <br />
            <a
              href="https://github.com/momentmuse"
              target="_blank"
              className="button"
            >
              <FontAwesomeIcon icon={faGithub} />
              &nbsp;github
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/amy-kirasack"
              target="_blank"
              className="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              &nbsp;linkedin
            </a>
          </LinkContainer>
        </TextContainer>
      </Padding>
    </AboutContainer>
  );
};

export default About;
