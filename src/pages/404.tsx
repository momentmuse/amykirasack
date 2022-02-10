import React from 'react';
import Layout from './../components/Layout';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container, Padding } from './../styles';
import GatsbyCat from './../images/gatsbycat.jpg';

const NotFoundContainer = styled(Container)`
  height: auto;
`;

const ImageContainer = styled.div`
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0em 1rem;
    width: 50vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 0em 2rem;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundContainer>
        <Padding>
          <ImageContainer>
            <img
              src={GatsbyCat}
              alt="a grey and white tabby cat sits in a strange position on a bed"
            />
          </ImageContainer>
          <TextContainer>
            <h1>oops!</h1>
            <p>
              It looks like you've stumbled upon a page that (in at least this
              branch of the multiverse) doesn't exist.
            </p>

            <p>But not to fret; here's a photo of Gatsby for your trouble.</p>
            <p>Isn't she adorable?</p>
            <p>
              <Link to="/">try again?</Link>
            </p>
          </TextContainer>
        </Padding>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFoundPage;
