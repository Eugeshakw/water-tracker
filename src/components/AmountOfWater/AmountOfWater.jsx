import styled from 'styled-components';
import imgamountclose from '../AmountOfWater/icons/amount_close_icon.svg';
import waterIcon from '../AmountOfWater/icons/water_icon.svg';
import IconDekrement from '../AmountOfWater/icons/dekr_icon.svg';
import IconInkrement from '../AmountOfWater/icons/inkr_icon.svg';

const DivAmountGroup = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderMain = styled.h2`
  margin: 0;
`;

const ButtoCloseAmount = styled.button`
  border: none;
  background-color: #fff;
  display: flex;
  align-items: center;
  display: block;
  padding: 0;
  margin-left: auto;
  cursor: pointer;
`;

const DivDateAmount = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 10px;
  background-color: #ecf2ff;
  display: flex;
  align-items: center;
`;

const ImgWater = styled.img`
  display: block;
  margin-right: 12px;
`;

const SpanMl = styled.span`
  display: block;
  margin-right: 16px;
`;

const DivAmountWater = styled.div`
  display: flex;
`;

const ButtonDekrIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #9ebbff;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  cursor: pointer;
  padding: 10px;
  margin-right: 7px;
`;

const ButtonInkrIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #9ebbff;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  cursor: pointer;
  padding: 10px;
`;

const IkonDekr = styled.img`
  display: block;
`;

const IkonInkr = styled.img`
  display: block;
`;

const DivSpanCountMl = styled.div`
  display: flex;
  border-radius: 40px;
  background: #d7e3ff;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
`;

const SpanCountWater = styled.span`
  display: block;
`;

const SpanCountWaterTitle = styled.span`
  display: block;
`;

const AmountOfWater = ({ countOfWater, timeOfDay, partOfDay }) => {
  return (
    <div>
      <DivAmountGroup>
        <HeaderMain>Edit the entered amount of water</HeaderMain>
        <ButtoCloseAmount>
          <img src={imgamountclose} alt="button icon close" />
        </ButtoCloseAmount>
      </DivAmountGroup>
      <DivDateAmount>
        <ImgWater src={waterIcon} alt="water icon" />
        <span>{countOfWater}</span>
        &nbsp;
        <SpanMl>ml</SpanMl>
        <span>{timeOfDay}</span>
        &nbsp;
        <span>{partOfDay}</span>
      </DivDateAmount>
      <h3>Correct entered data:</h3>
      <h3>Amount of water:</h3>
      <DivAmountWater>
        <ButtonDekrIcon>
          <IkonDekr src={IconDekrement} alt="icon dekrement" />
        </ButtonDekrIcon>
        <DivSpanCountMl>
          <SpanCountWater>{countOfWater}</SpanCountWater>
          <SpanCountWaterTitle>ml</SpanCountWaterTitle>
        </DivSpanCountMl>
        <ButtonInkrIcon>
          <IkonInkr src={IconInkrement} alt="icon inkrement" />
        </ButtonInkrIcon>
      </DivAmountWater>
    </div>
  );
};

export default AmountOfWater;
