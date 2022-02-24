import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { HomeLogo } from 'components/HomeLogo';
import { Navbar } from 'components/Navbar';
import { StyledHeader } from './Header.styled';

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
