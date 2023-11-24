import { SignLayoutStyled } from './SignLayout.styled';

import imgDesk from '../../images/sign/bottle-desk.webp';
import imgTablet from '../../images/sign/bottle-tablet.webp';
import imgMob from '../../images/sign/bottle-mobile.webp';
import img from '../../images/sign/bottle-desk.png';

const SignLayout = ({ children }) => {
  return (
    <SignLayoutStyled>
      
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={imgDesk}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={imgTablet}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={imgMob}
            type="image/webp"
          />
          <img src={img} alt="Responsive" />
        </picture>
        {children}
      
    </SignLayoutStyled>
  );
};

export default SignLayout;
