import * as React from 'react';
import AboutMe3 from './../images/espai.png';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { Container, Padding } from '../styles';

const ImageMask = styled.div`
  mask-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgNjAwIDkwMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU2LjgxNzExMTYyOTcwNTEgNDE3LjQxMTE5NzE2MzkwNDIpIj48cGF0aCBkPSJNMTQ2IC0xNzMuMkMxNzQuMSAtMTE3LjkgMTcxLjQgLTU4LjkgMTg5LjggMTguNEMyMDguMiA5NS43IDI0Ny42IDE5MS40IDIxOS41IDI1NC45QzE5MS40IDMxOC40IDk1LjcgMzQ5LjcgLTUuMiAzNTQuOUMtMTA2LjEgMzYwLjEgLTIxMi4xIDMzOS4xIC0yNzMuOCAyNzUuNkMtMzM1LjUgMjEyLjEgLTM1Mi43IDEwNi4xIC0zMzggMTQuN0MtMzIzLjMgLTc2LjYgLTI3Ni41IC0xNTMuMiAtMjE0LjkgLTIwOC41Qy0xNTMuMiAtMjYzLjkgLTc2LjYgLTI5Ny45IC04LjggLTI4OS4xQzU4LjkgLTI4MC4zIDExNy45IC0yMjguNSAxNDYgLTE3My4yIiBmaWxsPSIjMDA5NDczIj48L3BhdGg+PC9nPjwvc3ZnPg==);
  mask-repeat: no-repeat;
  mask-size: cover;
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

interface ProfileProps {
  id: string;
}

const Profile = ({ id }: ProfileProps) => {
  return (
    <Container id={id}>
      <Padding>
        <Parallax rotate={[10, -10]} scale={[0.7, 1]}>
          <ImageMask>
            <img src={AboutMe3} />
          </ImageMask>
        </Parallax>
        <TextContainer>
          <Parallax scale={[0.7, 1]}>
            <span>Amy Kirasack</span>
            <p>
              founder of seedling | software developer | writer | lifelong
              learner
            </p>
          </Parallax>
        </TextContainer>
      </Padding>
    </Container>
  );
};

export default Profile;
