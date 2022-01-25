import * as React from 'react';
import AboutMe3 from './../images/espai.png';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: ${({ theme }) => theme.color.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.styles.padding};
  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ theme }) => theme.styles.paddingTablet};
    flex-direction: row;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: ${({ theme }) => theme.styles.paddingLaptop};
  }

  img {
    max-width: 320px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.background};

  span {
    font-family: ${({ theme }) => theme.font.family.alt};
    font-size: ${({ theme }) => theme.font.size.xxxlarge};
  }
`;

interface ProfileProps {
  id: string;
}

const Profile = ({ id }: ProfileProps) => {
  return (
    <ProfileContainer id={id}>
      <img src={AboutMe3} />
      <TextContainer>
        <span>Amy Kirasack</span>
        <p>
          founder of seedling | software developer | writer | lifelong learner
        </p>
      </TextContainer>
    </ProfileContainer>
  );
};

export default Profile;
