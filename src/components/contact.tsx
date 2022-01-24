import * as React from 'react';
import styled from 'styled-components';
import ContactMe from './../images/barcacat.jpg';

const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.color.muted};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }

  img {
    max-width: 320px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <TextContainer>
        <h1>
          Much unhappiness has come into the world because of things left
          unsaid.
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
      </TextContainer>
      <img src={ContactMe} />
    </ContactContainer>
  );
};

export default Contact;
