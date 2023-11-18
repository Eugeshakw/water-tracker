import { HeaderStyle } from './HederStyle';
import { Link } from 'react-router-dom';
import Icon from '../../images/main-logo.svg';

const Header = ({ children }) => {
  return (
    <HeaderStyle className="container">
      <div>
        <Link to={'/'}>
          <img src={Icon} alt="Logo" />
        </Link>
      </div>
      {children}
    </HeaderStyle>
  );
};

export default Header;
