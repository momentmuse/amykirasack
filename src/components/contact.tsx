import * as React from 'react';
import styled from 'styled-components';
import ContactMe from './../images/amycat.png';
import ScrollingHeadline from './ScrollingHeadline';
import { Container, Padding, BlobMask, Blobs } from '../styles';
import { Parallax } from 'react-scroll-parallax';

const ContactContainer = styled(Container)`
  /* background-color: ${({ theme }) => theme.color.muted}; */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageMask = styled(BlobMask)`
  mask-image: url(${Blobs.contact});
`;

interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <ScrollingHeadline
        headline={'The next message you need is always right where you are.'}
      />
      <Padding>
        <TextContainer>
          <p>
            Have an opportunity or idea you’d like to share? Just want to say
            hi? Don't be a stranger, drop me a line.
          </p>

          <form name="contact" method="POST">
            {/* data-netlify="true" <= add this as attribute to form tag */}
            <p>
              <label>
                Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Subject: <input type="subject" name="subject" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">send!</button>
            </p>
          </form>
        </TextContainer>
        <Parallax translateX={[30, -30]}>
          <ImageMask>
            <img src={ContactMe} />
          </ImageMask>
        </Parallax>
      </Padding>
    </ContactContainer>
  );
};

export default Contact;
