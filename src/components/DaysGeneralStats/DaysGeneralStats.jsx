import img from '../DaysGeneralStats/icons/button_svg.svg';
import styled from 'styled-components';
import { useState } from 'react';


const DateOfMonthParagrah = styled.p`
  color: #407bff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: 'Roboto';
  margin: 0;
`;

const ButtonClose = styled.button`
  border: none;
  background-color: #fff;
  display: flex;
  align-items: center;
  display: block;
  padding: 0;
  margin-left: auto;
  cursor: pointer;
`;

const DateOfMonthGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
`;

const ImgButtonClose = styled.img`
  display: block;
`;

const SpanWater = styled.span`
  color: #407bff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-family: 'Roboto';
`;

const DivDaysGeneralStats = styled.div`
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  @media (min-width: 0px) {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 13px;
    padding-right: 13px;
    max-width: 280px;
  }
  @media (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 16px;
    padding-right: 16px;
    max-width: 292px;
  }
`;

const ParagraphWater = styled.p`
  color: #2f2f2f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: 'Roboto';
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Modal = styled.div`
  width:256px;
  margin-right:auto;
  margin-left:auto;
  padding: 24px 12px 24px 12px;
  @media screen and (min-width:768px){
    padding:32px 24px 32px 24px;
    width:656px
  }
  @media screen and (min-width:1440px){
    width:544px;
  }
`;
const ModalHeading = styled.h1`
  width:200px;
  color: #2F2F2F;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 123.077% */

`;
const ModalDivOfHeading = styled.div`
  display:flex;
  align-items:baseline;
  gap:52px;
  @media screen and (min-width:768px){
    justify-content:space-between;
  }

`;
const ModalDivOfFormulas = styled.div`
  display:block;
  @media screen and (min-width:768px){
    display:flex;
    gap:24px;
  }
`;
const ModalParagraphOfFormul = styled.p`
  color: var(--primery-color-black, #2F2F2F);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;
const ModalSpanOfFormul = styled.span`
  color: var(--primery-color-blue, #407BFF);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  margin-left:4px;
`;
const ModalDivOfDescription = styled.div`
  padding:10px
`;
const ModalParagraphOfDescription = styled.p`
  color: #8F8F8F;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
const ModalSpanOfDescription = styled.span`
  color: var(--primery-color-blue, #407BFF);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  margin:0;
`;
const ModalDivOfCalculate = styled.div`
`;
const ModalHeadingOfCalculate = styled.h3`
  color: var(--primery-color-black, #2F2F2F);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  margin-bottom:16px;
`;
const ModalDivOfCheckbox = styled.div`
  display:flex;
  gap:24px;
`;
const ModalInputOfCalculate = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1px solid #407BFF; 
  border-radius: 50%; 
  outline: none;
  transition: background-color 0.3s;

  &:checked {
    background-color: transparent; 
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #407BFF; 
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
const ModalParagraphOfCalculate = styled.p`
  color: var(--primery-color-black, #2F2F2F);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
`;
const ModalDivOfCheckboxPosition = styled.div`
  display:flex;
  align-items:baseline;
  gap:8px;
`;
const ModalDivOfInputs = styled.div`
`;
const ModalParagraphOfInput = styled.p`
  color: var(--primery-color-black, #2F2F2F);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom:8px;
`;
const ModalInputOfWeight = styled.input.attrs({ defaultValue: "0" })`
  padding: 12px 10px 12px 10px;
  border-color:transparent;
  width:220px;
  color: var(--primery-color-blue, #407BFF);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  margin-bottom:16px;
  @media screen and (min-width:768px){
    width:630px;
  }
  @media screen and (min-width:1440px){
    width:520px;
  }
`;
const ModalParagraphOfSecondInput = styled.p`
  width:256px;
  color: var(--primery-color-black, #2F2F2F);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom:8px;
  @media screen and (min-width:768px){
    width:656px;
  }
  @media screen and (min-width:1440px){
    width:544px;
  }
`;
const ModalDivOfWaterPerDay = styled.div`
 display:flex;
 align-items:center;
`;
const ModalParagraphOfWaterPerDay = styled.p`
  width: 190px;
  color: var(--primery-color-black, #2F2F2F);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  @media screen and (min-width:768px){
    width:328px;
  }
`;
const ModalParagraphOfLiter = styled.p`
  width: 57px;
  color: var(--primery-color-blue, #407BFF);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
`;
const ModalParagraphOfInputWillDrink = styled.p`
  width: 256px;
  color: var(--primery-color-black, #2F2F2F);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  @media screen and (min-width:768px){
    width:348px;
  }
`;
const ModalDivOfBtn = styled.div`
  display:block;
  @media screen and (min-width:768px){
    display:flex;
    justify-content:flex-end;
  }
`;
const ModalBtn = styled.button`
  margin-top:24px;
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width:100%;
  border-radius: 10px;
  background: var(--primery-color-blue, #407BFF);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: var(--primery-color-white, #FFF);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  @media screen and (min-width:768px){
    width:160px;
  }
`;
const DaysGeneralStats = function ({
  dateOfMonth,
  dailyNorma,
  fullfilmentOfDailyNorma,
  howManyServings,
}) {
  const [isClose, setIsClose] = useState(false);

  const onClickButtonClose = function () {
    setIsClose(true);
  };

  return (
    <>
      {isClose === false && (
        <div>
        <DivDaysGeneralStats>
          <DateOfMonthGroup>
            <DateOfMonthParagrah>{dateOfMonth}</DateOfMonthParagrah>
            <ButtonClose onClick={onClickButtonClose}>
              <ImgButtonClose src={img} alt="button icon" />
            </ButtonClose>
          </DateOfMonthGroup>
          <ParagraphWater>
            Daily norma: <SpanWater>{dailyNorma}</SpanWater>
          </ParagraphWater>
          <ParagraphWater>
            Fulfillment of the daily norm:{' '}
            <SpanWater>{fullfilmentOfDailyNorma}</SpanWater>
          </ParagraphWater>
          <ParagraphWater>
            How many servings of water: <SpanWater>{howManyServings}</SpanWater>
          </ParagraphWater>
          </DivDaysGeneralStats>
          <Modal>
            <ModalDivOfHeading>
            <ModalHeading>My daily norma</ModalHeading>
            <ImgButtonClose src={img} alt="button icon" />  
            </ModalDivOfHeading>  
            <ModalDivOfFormulas>
              <ModalParagraphOfFormul>For girl:<ModalSpanOfFormul>V=(M*0,03) + (T*0,4)</ModalSpanOfFormul></ModalParagraphOfFormul>
              <ModalParagraphOfFormul>For man:<ModalSpanOfFormul>V=(M*0,04) + (T*0,6)</ModalSpanOfFormul></ModalParagraphOfFormul>
            </ModalDivOfFormulas>
            <ModalDivOfDescription>
              <ModalParagraphOfDescription><ModalSpanOfDescription>*</ModalSpanOfDescription> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</ModalParagraphOfDescription>
            </ModalDivOfDescription>
            <ModalDivOfCalculate>
              <ModalHeadingOfCalculate>Calculate your rate:</ModalHeadingOfCalculate>
            </ModalDivOfCalculate>
            <ModalDivOfCheckbox>
              <ModalDivOfCheckboxPosition>
                <ModalInputOfCalculate></ModalInputOfCalculate>
                <ModalParagraphOfCalculate  name="gender">For girl</ModalParagraphOfCalculate>
              </ModalDivOfCheckboxPosition>
              <ModalDivOfCheckboxPosition>
                <ModalInputOfCalculate></ModalInputOfCalculate>
                <ModalParagraphOfCalculate  name="gender">For man</ModalParagraphOfCalculate>
              </ModalDivOfCheckboxPosition>
            </ModalDivOfCheckbox>
            <ModalDivOfInputs>
              <ModalParagraphOfInput>Your weight in kilograms:</ModalParagraphOfInput>
              <ModalInputOfWeight></ModalInputOfWeight>
              <ModalParagraphOfSecondInput>The time of active participation in sports or other activities with a high physical. load:</ModalParagraphOfSecondInput>
              <ModalInputOfWeight></ModalInputOfWeight>
              <ModalDivOfWaterPerDay>
                <ModalParagraphOfWaterPerDay>The required amount of water in liters per day:</ModalParagraphOfWaterPerDay>
                <ModalParagraphOfLiter>1.8 L</ModalParagraphOfLiter>
              </ModalDivOfWaterPerDay>
              <ModalParagraphOfInputWillDrink>Write down how much water you will drink:</ModalParagraphOfInputWillDrink>
              <ModalInputOfWeight></ModalInputOfWeight>
            </ModalDivOfInputs>
            <ModalDivOfBtn>
              <ModalBtn>Save</ModalBtn>
            </ModalDivOfBtn>
            </Modal>

        </div>
      )}
    </>
  );
};

export default DaysGeneralStats;