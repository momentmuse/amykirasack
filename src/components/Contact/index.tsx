import { useState, ChangeEvent, FormEvent } from 'react';
import { navigate } from 'gatsby-link';
import AmyCat from 'assets/images/amycat.png';
import { ScrollingHeadline } from 'components/ScrollingHeadline';
import { Container, Padding, SectionHeaderAlt } from 'theme/styles';
import {
  TextContainer,
  ContactForm,
  FormLabel,
  Button,
  ImageMask,
} from './Contact.styled';
import { Parallax } from 'react-scroll-parallax';

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
