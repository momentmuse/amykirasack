import { Link } from 'gatsby';
import Logo from 'assets/images/icon.png';
import { LogoIcon } from './HomeLogo.styled';

export const HomeLogo = () => {
  return (
    <div>
      <h1>
        <Link to="/#top">
          <LogoIcon src={Logo} alt="site logo" />
        </Link>
      </h1>
    </div>
  );
};
