import { useEffect } from 'react';
import { Link } from 'gatsby';
import {
  Nav,
  Menu,
  Hamburger,
  LinkContainer,
  StyledInput,
} from './Navbar.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSmileBeam,
  faLaptopCode,
  faPaperPlane,
  faPenFancy,
} from '@fortawesome/free-solid-svg-icons';

type NavProps = {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

export const Navbar = ({ isChecked, setIsChecked }: NavProps) => {
  useEffect(() => {
    if (isChecked) {
      document.body.classList.add('scroll');
    } else if (!isChecked && document.body.classList.contains('scroll')) {
      document.body.classList.remove('scroll');
    }
  }, [isChecked]);

  const closeMenu = () => {
    setIsChecked(false);
    (document.getElementById('checkbox') as HTMLInputElement).checked = false;
  };

  return (
    <Nav>
      <StyledInput
        type="checkbox"
        id="checkbox"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
      <Menu>
        <Hamburger></Hamburger>
      </Menu>
      <LinkContainer isChecked={isChecked ? true : false}>
        <div>
          <Link to="/#about" onClick={() => closeMenu()}>
            about <FontAwesomeIcon icon={faSmileBeam} />
          </Link>
        </div>
        <div>
          <Link to="/#work" onClick={() => closeMenu()}>
            work <FontAwesomeIcon icon={faLaptopCode} />
          </Link>
        </div>
        <div>
          <Link to="/#contact" onClick={() => closeMenu()}>
            contact <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
        </div>
        <div>
          <Link to="/blog" onClick={() => closeMenu()}>
            blog <FontAwesomeIcon icon={faPenFancy} />
          </Link>
        </div>
      </LinkContainer>
    </Nav>
  );
};
