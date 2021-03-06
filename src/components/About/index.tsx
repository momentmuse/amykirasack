import { getCV } from 'services/static';
import Viaduct from 'assets/images/viaduct.png';
import Quebec from 'assets/images/quebec.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ScrollingHeadline } from 'components/ScrollingHeadline';
import { Padding, SectionHeaderAlt } from 'theme/styles';
import {
  AboutContainer,
  ImageContainer,
  ImageMaskA,
  ImageMaskB,
  TextContainer,
  LinkContainer,
} from './About.styled';
import { Parallax } from 'react-scroll-parallax';

type AboutProps = {
  id: string;
};

export const About = ({ id }: AboutProps) => {
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
