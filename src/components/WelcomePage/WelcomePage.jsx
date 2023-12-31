// CombinedPage.jsx
import React from 'react';
import styled from 'styled-components';
import calendar from './icons/calendar.svg';
import statistic from './icons/statistics.svg';
import settings from './icons/settings.svg';
import backMobile from './icons/Background-mob.png';
import backTablet from './icons/Background-tablet.png';
import backDesktop from './icons/Background-desk.png';
import img from '../WhyDrinkWater/icons/marker_item.svg';
import deskElements from './icons/Pagedesk-elements.svg';
import { useNavigate } from 'react-router';

const Front = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;
const Background = styled.div`
  padding-bottom: 40px;
  background-size: 100%;
  background-image: url(${backMobile});
  background-position: bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
    background-image: url(${backTablet});
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-bottom: 405px;
    background-image: url(${backDesktop});
  }
`;

const DecorateImg = styled.div`
  @media screen and (min-width: 1440px) {
    display: block;
    background-image: url(${deskElements});
    height: 62vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    bottom: 0;
  }
`;
const DivBenefits = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 81px;
    margin-bottom: 0;
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
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    &:last-child {
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 248px;
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

const H2WhyDrinkWater = styled.h2`
  color: #2f2f2f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  margin-bottom: 12px;
  font-family: 'Roboto';
`;

const ItemOfListWhyDrinkWater = styled.li`
  list-style: none;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ImgStyle = styled.img`
  display: block;
`;

const ItemWhyDrinkWater = styled.p`
  color: #2f2f2f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: 'Roboto';
  margin: 0;
`;

const DivWhyDrinkWater = styled.div`
  background-color: #ecf2ff;
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  max-width: 280px;
  @media (min-width: 768px) {
    padding: 32px 24px;
    max-width: 494px;
  }
  @media (min-width: 1440px) {
    margin-top: 34px;
  }
`;

const ListWhyDrinkWater = styled.ul`
  padding: 0;
  margin: 0;
`;

const WelcomePage = function () {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };

  return (

    <DecorateImg> 
      <Background>
        <div className="container">
          <Front>
            <DivBenefits>
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
              <ButtonTracker type="submit" onClick={handleClick}>
                Try tracker
              </ButtonTracker>
            </DivBenefits>

            <DivWhyDrinkWater>
              <H2WhyDrinkWater>Why drink water</H2WhyDrinkWater>
              <ListWhyDrinkWater>
                <ItemOfListWhyDrinkWater>
                  <ImgStyle src={img} alt="icon item" />
                  <ItemWhyDrinkWater>
                    Supply of nutrients to all organs
                  </ItemWhyDrinkWater>
                </ItemOfListWhyDrinkWater>
                <ItemOfListWhyDrinkWater>
                  <ImgStyle src={img} alt="icon item" />
                  <ItemWhyDrinkWater>
                    Providing oxygen to the lungs
                  </ItemWhyDrinkWater>
                </ItemOfListWhyDrinkWater>
                <ItemOfListWhyDrinkWater>
                  <ImgStyle src={img} alt="icon item" />
                  <ItemWhyDrinkWater>
                    Maintaining the work of the heart
                  </ItemWhyDrinkWater>
                </ItemOfListWhyDrinkWater>
                <ItemOfListWhyDrinkWater>
                  <ImgStyle src={img} alt="icon item" />
                  <ItemWhyDrinkWater>
                    Release of processed substances
                  </ItemWhyDrinkWater>
                </ItemOfListWhyDrinkWater>
                <ItemOfListWhyDrinkWater>
                  <ImgStyle src={img} alt="icon item" />
                  <ItemWhyDrinkWater>
                    Ensuring the stability of the internal environment
                  </ItemWhyDrinkWater>
                </ItemOfListWhyDrinkWater>
                <ItemOfListWhyDrinkWater>
                  <ImgStyle src={img} alt="icon item" />
                  <ItemWhyDrinkWater>
                    Maintaining within the normal temperature
                  </ItemWhyDrinkWater>
                </ItemOfListWhyDrinkWater>
                <ItemOfListWhyDrinkWater>
                  <ImgStyle src={img} alt="icon item" />
                  <ItemWhyDrinkWater>
                    Maintaining an immune system capable of resisting disease
                  </ItemWhyDrinkWater>
                </ItemOfListWhyDrinkWater>
              </ListWhyDrinkWater>
            </DivWhyDrinkWater>
          </Front>
        </div>
      </Background>
</DecorateImg>
  );
};

export default WelcomePage;
