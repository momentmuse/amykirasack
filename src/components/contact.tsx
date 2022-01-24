import * as React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.color.muted};
  color: ${({ theme }) => theme.color.mid};
  h1 {
    font-family: ${({ theme }) => theme.font.family.heading};
  }
  p {
    font-family: ${({ theme }) => theme.font.family.body};
  }
`;

interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <h1>
        Much unhappiness has come into the world because of bewilderment and
        things left unsaid.
      </h1>
      <p>
        Have an opportunity or idea you’d like to share? Just want to say hi?
        Don't be a stranger, drop me a line.
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
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </ContactContainer>
  );
};

export default Contact;
