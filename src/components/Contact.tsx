import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby-link';
import AmyCat from 'assets/images/amycat.png';
import { ScrollingHeadline } from './ScrollingHeadline';
import {
  Container,
  Padding,
  BlobMask,
  Blobs,
  SectionHeaderAlt,
} from 'theme/styles';
import Pointer from 'assets/cursors/pointer.png';
import Text from 'assets/cursors/text.png';
import { Parallax } from 'react-scroll-parallax';

const TextContainer = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0em 1rem;
    width: 60vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 0em 2rem;
    width: 50vw;
  }
  @media ${({ theme }) => theme.device.highres} {
    padding: 0em 2rem;
    width: 35vw;
  }
`;

const ContactForm = styled.form`
  position: relative;

  input[type='text'],
  input[type='email'],
  textarea {
    -webkit-cursor: url(${Text}), text;
    cursor: url(${Text}), text;
    background-color: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.accent};
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
    border: 0;
    border-bottom: 3px solid ${({ theme }) => theme.color.accent};
    border-radius: 30px;
    box-sizing: border-box;
    resize: vertical;

    @media ${({ theme }) => theme.device.tablet} {
      font-size: ${({ theme }) => theme.font.size.small};
    }

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
  -webkit-cursor: url(${Pointer}), pointer;
  cursor: url(${Pointer}), pointer;
  font-family: ${({ theme }) => theme.font.family.bodyBold};
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.color.accent};
  -webkit-text-decoration-color: ${({ theme }) => theme.color.secondary};
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-style: wavy;
  text-decoration: wavy underline ${({ theme }) => theme.color.secondary} 2px;
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

type ContactProps = {
  id: string;
};

interface FormData {
  [key: string]: string | number | boolean;
  email: string;
  'form-name': string;
  message: string;
  name: string;
  subject: string;
}

export const Contact = ({ id }: ContactProps) => {
  const initialState: FormData = {
    email: '',
    'form-name': 'contact',
    message: '',
    name: '',
    subject: '',
  };

  const [state, setState] = useState(initialState);

  const encode = (data: FormData) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ ...state }),
    })
      .then(() =>
        navigate((e.target as HTMLFormElement).getAttribute('action') || '')
      )
      .catch((error) => alert(error));
  };

  return (
    <Container id={id}>
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
          <ContactForm
            name="contact"
            method="POST"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                <FormLabel>name</FormLabel>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                <FormLabel>email</FormLabel>{' '}
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                <FormLabel>subject</FormLabel>{' '}
                <input
                  type="text"
                  name="subject"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                <FormLabel>message</FormLabel>{' '}
                <textarea
                  name="message"
                  rows={4}
                  required
                  onChange={handleChange}
                />
              </label>
            </p>
            <Button type="submit">here we go!</Button>
          </ContactForm>
        </TextContainer>
        <Parallax translateX={[30, -25]}>
          <ImageMask>
            <img
              src={AmyCat}
              alt="a woman kneels in front of a doorstep to pet a calico cat"
            />
          </ImageMask>
        </Parallax>
      </Padding>
    </Container>
  );
};
