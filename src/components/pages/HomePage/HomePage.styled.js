import { styled } from 'styled-components';
import BackDes from '../HomePage/icons/bottle-desk.png';
import BackTab from '../HomePage/icons/bottle-tab.png';
import BackMob from '../HomePage/icons/bottle-mob.png';
import bg from '../../../images/sign/bg-mobile.png';
import deskElements from '../../WelcomePage/icons/Pagedesk-elements.svg';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
    gap: 12px;
  }
`;

export const Container = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 32px;
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const NormaContainer = styled.div`
  display: flex;

  flex-direction: column;
  margin-bottom: 42px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 6px 76px;
  border-radius: 10px;
  background-color: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.3;
    padding: 10px 104px;
    margin: 0;
    margin-left: 12px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 30px;
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;
export const ConImg = styled.div``;
export const BackImage = styled.div`
  background-image: url(${BackMob});
  background-repeat: no-repeat;
  width: 280px;
  height: 208px;
  margin: 0px auto 16px;

  @media screen and (min-width: 768px) {
    background-image: url(${BackTab});
    width: 518px;
    height: 386px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${BackDes});
    width: 738px;
    height: 548px;
    z-index: -2;
  }
`;

export const DecorateImg = styled.div`
  background-image: url(${bg});
  display: block;
  background-repeat: no-repeat;
  z-index: -1;
  bottom: 0;
  @media screen and (min-width: 768px) {
    background-image: url(${deskElements});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${deskElements});
  }
`;
