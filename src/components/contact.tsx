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

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0em 6em;
  }
`;

const ContactForm = styled.form`
  position: relative;

  input[type='text'],
  input[type='email'],
  textarea {
    background-color: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.accent};
    font-family: inherit;
    font-size: ${({ theme }) => theme.font.size.small};
    width: 100%;
    padding: 1em;
    margin: 1em 0;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.accent};
    border-radius: 25px;
    box-sizing: border-box;
    resize: vertical;

    &:focus {
      outline: none;
      border-bottom: 3px solid ${({ theme }) => theme.color.secondary};
    }
  }
`;

const FormLabel = styled.span`
  position: absolute;
  font-size: ${({ theme }) => theme.font.size.xsmall};
  left: 16px;
`;

const Button = styled.button`
  font-family: ${({ theme }) => theme.font.family.bodyBold};
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.color.accent};
  text-decoration: 2px ${({ theme }) => theme.color.secondary} wavy underline;
  padding: 1em 1.2em;
  background-color: ${({ theme }) => theme.color.light};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: 25px;
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

          <ContactForm name="contact" method="POST">
            {/* data-netlify="true" <= add this as attribute to form tag */}
            <p>
              <label>
                <FormLabel>name</FormLabel>
                <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                <FormLabel>email</FormLabel> <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                <FormLabel>subject</FormLabel>{' '}
                <input type="text" name="subject" autocomplete="off" />
              </label>
            </p>
            <p>
              <label>
                <FormLabel>message</FormLabel>{' '}
                <textarea name="message"></textarea>
              </label>
            </p>

            <Button type="submit">here we go!</Button>
          </ContactForm>
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
