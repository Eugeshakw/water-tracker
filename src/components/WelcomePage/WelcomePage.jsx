import styled from 'styled-components';

import calendar from './icons/calendar.svg';
import statistic from './icons/statistics.svg';
import settings from './icons/settings.svg';
import backMobile from './icons/Background-mob.png';
import backTablet from './icons/Background-tablet.png';
import backDesktop from './icons/Background-desk.png';
import backElements from './icons/Pagedesk-elements.svg';

const Front = styled.div`
  width: 320px;
  height: 952px;
  background-image: url(${backMobile});
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 800px;
    background-image: url(${backTablet});
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 432px;
    background-image: url(${backDesktop}), url(${backElements});
    background-position: right bottom;
  }
`;

const Title = styled.h1`
  color: #2f2f2f;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.7;
    margin-top: 40px;
  }
`;

const H2Title = styled.h2`
  color: #2f2f2f;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;
  width: 197px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.2;
    width: auto;
  }
`;

const Benefits = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`;

const BenefitsList = styled.ul`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  width: auto;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
    &:last-child {
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 248px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ItemText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0;
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 1.25;
  }
`;

const ButtonTracker = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  width: 280px;
  margin-bottom: 40px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.3;
    width: 336px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    margin-bottom: 0;
  }
`;

const ImgIcon = styled.img`
  display: block;
  @media screen and (min-width: 768px) {
    width: 40px;
  }
`;

const WelcomePage = function () {
  return (
    <div className="container">
      <Front>
        <Title>Water consumption tracker</Title>
        <H2Title>Record daily water intake and track</H2Title>
        <Benefits>Tracker Benefits</Benefits>
        <BenefitsList>
          <BenefitsItem>
            <ImgIcon src={calendar} alt="calendar icon" />
            <ItemText>Habit drive</ItemText>
          </BenefitsItem>
          <BenefitsItem>
            <ImgIcon src={statistic} alt="statistic icon" />
            <ItemText>View statistics</ItemText>
          </BenefitsItem>
          <BenefitsItem>
            <ImgIcon src={settings} alt="settings icon" />
            <ItemText>Personal rate setting</ItemText>
          </BenefitsItem>
        </BenefitsList>
        <ButtonTracker type="button">Try tracker</ButtonTracker>
      </Front>
    </div>
  );
};

export default WelcomePage;
