import styled from 'styled-components';

export const StyledHeadline = styled.div`
  overflow: hidden;
  margin-top: 8rem;
  font-family: ${({ theme }) => theme.font.family.bodyBold};
  font-size: ${({ theme }) => theme.font.size.xlarge};
  color: rgba(253, 254, 255, 0.7);
  -webkit-text-stroke: 1px rgba(109, 84, 93, 0.7);
  text-stroke: 1px rgba(109, 84, 93, 0.7);
  letter-spacing: -1px;
`;
