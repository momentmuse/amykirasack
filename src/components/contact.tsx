import * as React from 'react';
import styled from 'styled-components';
import ContactMe from './../images/amycat.png';
import ScrollingHeadline from './ScrollingHeadline';
import {
  Container,
  Padding,
  BlobMask,
  Blobs,
  SectionHeaderAlt,
} from '../styles';
import Pointer from './../cursors/pointer.png';
import Text from './../cursors/text.png';
import { Parallax } from 'react-scroll-parallax';

const ContactContainer = styled(Container)`
  /* background-color: ${({ theme }) => theme.color.muted}; */
`;

const TextContainer = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    padding: 0em 0.4rem;
    width: 50vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 0em 2rem;
    width: 40vw;
  }
`;

const ContactForm = styled.form`
  position: relative;

  input[type='text'],
  input[type='email'],
  textarea {
    cursor: url(${Text}), text;

    background-color: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.accent};
    font-family: inherit;
    font-size: ${({ theme }) => theme.font.size.small};
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
    border: 0;
    border-bottom: 3px solid ${({ theme }) => theme.color.accent};
    border-radius: 30px;
    box-sizing: border-box;
    resize: vertical;

    &:focus {
      outline: none;
      border-bottom: 3px solid ${({ theme }) => theme.color.primary};
    }
  }
`;

const FormLabel = styled.span`
  position: absolute;
  font-size: ${({ theme }) => theme.font.size.xsmall};
  left: 16px;
`;

const Button = styled.button`
  cursor: url(${Pointer}), pointer;
  font-family: ${({ theme }) => theme.font.family.bodyBold};
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.color.accent};
  text-decoration: 2px ${({ theme }) => theme.color.secondary} wavy underline;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.color.light};
  border: 2px solid ${({ theme }) => theme.color.accent};
  border-radius: 30px;
  will-change: transform;
  transition: transform 450ms;

  &:hover,
  &:active {
    border: 2px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
    transition: transform 140ms;
    transform: translateY(-0.5rem);
  }
`;

const ImageMask = styled(BlobMask)`
  mask-image: url(${Blobs.contact});

  img {
    width: 100%;
  }
`;

interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <SectionHeaderAlt>contact.</SectionHeaderAlt>
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
                <input type="text" name="name" autoComplete="off" />
              </label>
            </p>
            <p>
              <label>
                <FormLabel>email</FormLabel>{' '}
                <input type="email" name="email" autoComplete="off" />
              </label>
            </p>
            <p>
              <label>
                <FormLabel>subject</FormLabel>{' '}
                <input type="text" name="subject" autoComplete="off" />
              </label>
            </p>
            <p>
              <label>
                <FormLabel>message</FormLabel>{' '}
                <textarea name="message" rows={4}></textarea>
              </label>
            </p>
            <Button type="submit">here we go!</Button>
          </ContactForm>
        </TextContainer>
        <Parallax translateX={[30, -25]}>
          <ImageMask>
            <img src={ContactMe} />
          </ImageMask>
        </Parallax>
      </Padding>
    </ContactContainer>
  );
};

export default Contact;
