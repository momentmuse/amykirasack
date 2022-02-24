import styled from 'styled-components';
import { Divider } from 'theme/styles';

export const StyledFooter = styled.footer`
  margin: 3em auto;
  font-family: ${({ theme }) => theme.font.family.body};
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.font.size.small};
`;

export const FancyDivider = styled(Divider)`
  &:after {
    background: ${({ theme }) => theme.color.background};
    content: '§';
    padding: 0 4px;
    position: relative;
    top: -8px;
    @media ${({ theme }) => theme.device.laptop} {
      top: -9px;
    }
    @media ${({ theme }) => theme.device.highres} {
      top: -14px;
    }
  }
`;
