import styled from 'styled-components';
import bg from '../../images/sign/bg-mobile.webp';

export const SignLayoutStyled = styled.section`
  display: flex;
  position: relative;
  picture {
    z-index: -1;
  }
  form {
    width: 100%;
    max-width: 280px;
    margin-top: 40px
  }
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    form {
      width: 50%;
      max-width: 336px;
      margin-top: 40px;
      margin-left: 230px;
    }
    picture {
      position: absolute;
      right: 0;
    }
  }
  @media screen and (min-width: 1280px) {
    form {
      width: 33.3%;
      max-width: 384px;
    }
    picture {
      width: 58.1%;
    }
  }

  @media screen and (min-width: 768px) {

  }
`;