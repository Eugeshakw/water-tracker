import { styled } from 'styled-components';

export const LogoutModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background: #FFF;
  z-index:20;
  @media screen and (min-width:768px){
    width:592px;
    height:208px;
  }
`;

export const DivOfHeadingOfLogOutModal = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:24px;

`;

export const HeadingOfLogOutModal = styled.p`
  width: 200px;
  color: #2F2F2F;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 123.077% */
  margin:0;
  @media screen and (min-width:768px){
    width: 384px;
  }
`;

export const BtnOfCloseOfLogOutModal = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer; 
  background: none; 
  border: none; 
`;
export const ParagraphOfExit = styled.p`
  width: 232px;
  color: #2F2F2F;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; 
  margin-bottom:24px;
  @media screen and (min-width:768px){
    width: 338px;
    display:flex;
    justify-content:flex-start;
  }
`;
export const BtnOfExit = styled.button`
  width: 100%;
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--secondary-color-3, #EF5050);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  margin-bottom:24px;
  @media screen and (min-width:768px){
    width:160px
  }
`;
export const BtnOfCancelModalLogOut = styled.button`
  width: 100%;
  color: var(--primery-color-blue, #407BFF);
  height:44px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--secondary-color-5, #D7E3FF);
  @media screen and (min-width:768px){
    width:160px
  }
`;
export const DivOfBtns = styled.div`
  display:block;
  @media screen and (min-width:768px){
    display:flex;
    justify-content:flex-end;
    align-items:baseline;
    gap:24px;
  }
`;