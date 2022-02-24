import styled from 'styled-components';

export const JobsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ScrollingCarousel = styled.div`
  margin: 5rem 0;
  padding: 1rem 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  &::scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.device.laptop} {
    margin: 6rem 0;
    padding: 1rem 8rem;
  }
`;

export const JobCard = styled.div`
  position: relative;
  width: 19rem;
  height: 30rem;
  margin: 0 2rem;
  background-color: ${({ theme }) => theme.color.light};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: 25px;

  img {
    width: 100%;
    border-radius: 25px 25px 0 0;
  }

  span {
    font-family: ${({ theme }) => theme.font.family.body};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.font.size.small};
  }

  p {
    position: absolute;
    right: 1rem;
    bottom: 0;
  }

  will-change: transform;
  transition: transform 450ms;

  &:hover,
  &:active {
    transition: transform 140ms;
    transform: translateY(-1rem);
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

export const Description = styled.div`
  padding: 1rem;
`;
