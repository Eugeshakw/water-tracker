import styled from 'styled-components';
import imgamountclose from '../AmountOfWater/icons/amount_close_icon.svg';
import waterIcon from '../AmountOfWater/icons/water_icon.svg';
import IconDekrement from '../AmountOfWater/icons/dekr_icon.svg';
import IconInkrement from '../AmountOfWater/icons/inkr_icon.svg';
import { useState } from 'react';

const DivAmountGroup = styled.div`
  display: flex;
  margin-bottom: 24px;
  @media (min-width: 0px) and (max-width: 767px) {
    align-items: baseline;
  }
  @media (min-width: 768px) {
    align-items: end;
  }
`;

const HeaderMain = styled.h2`
  margin: 0;
  color: #2f2f2f;
  font-family: 'Roboto';
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
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
  max-width: 254px;
  margin-bottom: 24px;
`;

const ImgWater = styled.img`
  display: block;
  margin-right: 12px;
`;

const SpanMl = styled.span`
  display: block;
  margin-right: 16px;
  color: #407bff;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const DivAmountWater = styled.div`
  display: flex;
  margin-bottom: 28px;
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
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
`;

const SpanCountWater = styled.span`
  display: block;
  color: #407bff;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

const SpanCountWaterTitle = styled.span`
  display: block;
  color: #407bff;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

const DivMainAmount = styled.div`
  border-radius: 10px;
  background: #fff;
  @media (min-width: 0px) {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 12px;
    padding-right: 12px;
  }
  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    max-width: 280px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: 704px;
  }
  @media (min-width: 1440px) {
    max-width: 592px;
  }
`;

const ButtonForm = styled.button`
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 54px;
  padding-right: 54px;
`;

const ImgCloseButton = styled.img`
  display: block;
`;

const SpanCountOfWater = styled.span`
  color: #407bff;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const SpanTimeOfDay = styled.span`
  color: #2f2f2f;
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const SpanPartOfDay = styled.span`
  color: #2f2f2f;
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const HeadCorrectEnteredData = styled.h3`
  margin: 0;
  color: #2f2f2f;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;
`;

const HeadAmountWater = styled.h3`
  margin: 0;
  color: #2f2f2f;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 12px;
`;

const SpanButtonForm = styled.span`
  color: #fff;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const DivGroupButtonForm = styled.div`
  display: flex;
  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-left: auto;
  }
`;

const SpanMlForm = styled.span`
  display: block;
  margin-right: 30px;
  color: #407bff;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

const SpanCountForm = styled.span`
  color: #407bff;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

const FormAmount = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelRecordingTime = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;

  color: #2f2f2f;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const LabelWaterUsed = styled.label`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  color: #2f2f2f;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const InputTime = styled.input`
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;

  color: #407bff;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: 544px;
  }
`;

const InputNumber = styled.input`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;

  border-radius: 6px;
  border: 1px solid #d7e3ff;

  color: #407bff;

  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: 544px;
  }
`;

const DivSpanFormGroup = styled.div`
  display: flex;
  @media (min-width: 0px) and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }
`;

const AmountOfWater = ({ countOfWater, timeOfDay, partOfDay }) => {
  const [isClose, setIsClose] = useState(false);

  const onClickButtonClose = function () {
    setIsClose(true);
  };

  return (
    <>
      {isClose === false && (
        <DivMainAmount>
          <DivAmountGroup>
            <HeaderMain>Edit the entered amount of water</HeaderMain>
            <ButtoCloseAmount onClick={onClickButtonClose}>
              <ImgCloseButton src={imgamountclose} alt="button icon close" />
            </ButtoCloseAmount>
          </DivAmountGroup>
          <DivDateAmount>
            <ImgWater src={waterIcon} alt="water icon" />
            <SpanCountOfWater>{countOfWater}</SpanCountOfWater>
            &nbsp;
            <SpanMl>ml</SpanMl>
            <SpanTimeOfDay>{timeOfDay}</SpanTimeOfDay>
            &nbsp;
            <SpanPartOfDay>{partOfDay}</SpanPartOfDay>
          </DivDateAmount>
          <HeadCorrectEnteredData>Correct entered data:</HeadCorrectEnteredData>
          <HeadAmountWater>Amount of water:</HeadAmountWater>
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
          <FormAmount>
            <LabelRecordingTime>
              Recording time:
              <InputTime type="time" name="recordingtime" />
            </LabelRecordingTime>
            <LabelWaterUsed>
              Enter the value of the water used:
              <InputNumber type="number" name="watervalue" />
            </LabelWaterUsed>
            <DivGroupButtonForm>
              <DivSpanFormGroup>
                <SpanCountForm>{countOfWater}</SpanCountForm>
                <SpanMlForm>ml</SpanMlForm>
              </DivSpanFormGroup>
              <ButtonForm>
                <SpanButtonForm>Save</SpanButtonForm>
              </ButtonForm>
            </DivGroupButtonForm>
          </FormAmount>
        </DivMainAmount>
      )}
    </>
  );
};

export default AmountOfWater;
