import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { HomeLogo } from 'components/HomeLogo';
import { Navbar } from 'components/Navbar';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.primary};
  width: 100vw;
  height: 8rem;
  top: 0;
  left: 0;
  display: flex;
`;

type HeaderProps = {
  siteTitle: string;
};

export const Header = ({ siteTitle }: HeaderProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyledHeader id={'top'}>
      <Helmet title={siteTitle} titleTemplate="%s | Software Engineer" />
      <HomeLogo />
      <Navbar isChecked={isChecked} setIsChecked={setIsChecked} />
    </StyledHeader>
  );
};
