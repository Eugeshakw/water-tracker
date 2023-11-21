import { HeaderStyle, ContainerOfLogo } from './HederStyle.styled';
import { Link } from 'react-router-dom';
import Icon from '../../images/main-logo.svg';

const Header = ({ children }) => {
  return (
    <HeaderStyle>
      <ContainerOfLogo>
        <Link to={'/'}>
          <img src={Icon} alt="Logo" />
          {/* <HeaderImage src={Icon} alt="Logo" /> */}
        </Link>
      </ContainerOfLogo>
      {children}
    </HeaderStyle>
  );
};

export default Header;
