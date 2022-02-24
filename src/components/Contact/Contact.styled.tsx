import styled from 'styled-components';
import { BlobMask, Blobs } from 'theme/styles';
import Pointer from 'assets/cursors/pointer.png';
import Text from 'assets/cursors/text.png';

export const TextContainer = styled.div`
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

export const ContactForm = styled.form`
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

export const FormLabel = styled.span`
  position: absolute;
  font-size: ${({ theme }) => theme.font.size.xsmall};
  left: 16px;
`;

export const Button = styled.button`
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

export const ImageMask = styled(BlobMask)`
  mask-image: url(${Blobs.contact});

  img {
    width: 100%;
  }
`;
