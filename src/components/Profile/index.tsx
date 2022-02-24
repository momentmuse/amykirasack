import { Link } from 'gatsby';
import { getSpotlightPost } from 'services/static';
import Espai from 'assets/images/espai.png';
import { SectionHeader } from 'theme/styles';
import {
  ProfileContainer,
  ImageContainer,
  ImageMask,
  TextContainer,
  StyledParallax,
  Titles,
  PostSpotlight,
} from './Profile.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-scroll-parallax';

type ProfileProps = {
  id: string;
};

export const Profile = ({ id }: ProfileProps) => {
  const spotlightPost = getSpotlightPost();

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
