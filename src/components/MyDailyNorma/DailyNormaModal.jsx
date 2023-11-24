import { useModal } from 'context/modalContext';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserWaterRate } from 'redux/auth/auth-operations';
import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 256px;
  /* margin-right: auto;
  margin-left: auto; */
  padding: 24px 12px 24px 12px;
  @media screen and (min-width: 768px) {
    padding: 32px 24px 32px 24px;
    width: 656px;
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;
const ModalHeading = styled.h1`
  width: 200px;
  color: #2f2f2f;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 123.077% */
`;
const ModalDivOfHeading = styled.div`
  display: flex;
  align-items: baseline;
  gap: 52px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
const ModalDivOfFormulas = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
  }
`;
const ModalParagraphOfFormul = styled.p`
  color: var(--primery-color-black, #2f2f2f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;
const ModalSpanOfFormul = styled.span`
  color: var(--primery-color-blue, #407bff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  margin-left: 4px;
`;
const ModalDivOfDescription = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d7e3ff;
`;
const ModalParagraphOfDescription = styled.p`
  color: #8f8f8f;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
const ModalSpanOfDescription = styled.span`
  color: var(--primery-color-blue, #407bff);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  margin: 0;
`;
const ModalDivOfCalculate = styled.div``;
const ModalHeadingOfCalculate = styled.h3`
  color: var(--primery-color-black, #2f2f2f);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  margin-bottom: 16px;
`;
const ModalDivOfCheckbox = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 24px;
`;
const ModalInputOfCalculate = styled.input`
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1px solid #407bff;
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
      background-color: #407bff;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
const ModalParagraphOfCalculate = styled.p`
  color: var(--primery-color-black, #2f2f2f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
const ModalDivOfCheckboxPosition = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;
const ModalDivOfInputs = styled.div``;
const ModalParagraphOfInput = styled.p`
  color: var(--primery-color-black, #2f2f2f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
`;
const ModalInputOfWeight = styled.input.attrs({ defaultValue: '0' })`
  padding: 12px 10px 12px 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;

  width: 100%;
  color: var(--primery-color-blue, #407bff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  margin-bottom: 16px;
`;
const ModalParagraphOfSecondInput = styled.p`
  color: var(--primery-color-black, #2f2f2f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
`;
const ModalDivOfWaterPerDay = styled.div`
  margin-bottom: 26px;
  display: flex;
  align-items: center;
`;
const ModalParagraphOfWaterPerDay = styled.p`
  width: 190px;
  color: var(--primery-color-black, #2f2f2f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  @media screen and (min-width: 768px) {
    width: 328px;
  }
`;
const ModalParagraphOfLiter = styled.p`
  width: 57px;
  color: var(--primery-color-blue, #407bff);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
`;
const ModalParagraphOfInputWillDrink = styled.p`
  width: 256px;
  margin-bottom: 16px;
  color: var(--primery-color-black, #2f2f2f);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  @media screen and (min-width: 768px) {
    width: 348px;
  }
`;
const ModalDivOfBtn = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;
const ModalBtn = styled.button`
  margin-top: 24px;
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  border-radius: 10px;
  background: var(--primery-color-blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: var(--primery-color-white, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;

const DailyNormaModal = () => {
  const [weight, setWeight] = useState(null);
  const [timeOfActivity, setTimeOfActivity] = useState(null);
  const [gender, setGender] = useState(null);
  const [result, setResult] = useState(null);
  const [userWater, setUserWater] = useState(null);

  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.id);

  const { closeModal } = useModal();

  const handleSave = () => {
    if (!userWater) {
      return;
    }
    dispatch(addUserWaterRate({ waterRate: userWater, id: userId }));
  };

  useEffect(() => {
    if (gender && weight !== null && timeOfActivity !== null) {
      const timeInHours = timeOfActivity / 60;

      let norma;
      if (gender === 'female') {
        norma = weight * 0.03 + timeInHours * 0.4;
      } else {
        norma = weight * 0.04 + timeInHours * 0.6;
      }

      setResult(norma.toFixed(2));
    }
  }, [gender, weight, timeOfActivity]);

  return (
    <Modal>
      <ModalDivOfHeading>
        <ModalHeading>My daily norma</ModalHeading>
      </ModalDivOfHeading>
      <ModalDivOfFormulas>
        <ModalParagraphOfFormul>
          For girl:
          <ModalSpanOfFormul>V=(M*0,03) + (T*0,4)</ModalSpanOfFormul>
        </ModalParagraphOfFormul>
        <ModalParagraphOfFormul>
          For man:
          <ModalSpanOfFormul>V=(M*0,04) + (T*0,6)</ModalSpanOfFormul>
        </ModalParagraphOfFormul>
      </ModalDivOfFormulas>
      <ModalDivOfDescription>
        <ModalParagraphOfDescription>
          <ModalSpanOfDescription>*</ModalSpanOfDescription> V is the volume of
          the water norm in liters per day, M is your body weight, T is the time
          of active sports, or another type of activity commensurate in terms of
          loads (in the absence of these, you must set 0)
        </ModalParagraphOfDescription>
      </ModalDivOfDescription>
      <ModalDivOfCalculate>
        <ModalHeadingOfCalculate>Calculate your rate:</ModalHeadingOfCalculate>
      </ModalDivOfCalculate>
      <ModalDivOfCheckbox>
        <ModalDivOfCheckboxPosition>
          <ModalInputOfCalculate
            type="radio"
            name="gender"
            value={'female'}
            onChange={() => setGender('female')}
          ></ModalInputOfCalculate>
          <ModalParagraphOfCalculate>For girl</ModalParagraphOfCalculate>
        </ModalDivOfCheckboxPosition>
        <ModalDivOfCheckboxPosition>
          <ModalInputOfCalculate
            type="radio"
            name="gender"
            value={'male'}
            onChange={() => setGender('male')}
          ></ModalInputOfCalculate>
          <ModalParagraphOfCalculate>For man</ModalParagraphOfCalculate>
        </ModalDivOfCheckboxPosition>
      </ModalDivOfCheckbox>
      <ModalDivOfInputs>
        <ModalParagraphOfInput>Your weight in kilograms:</ModalParagraphOfInput>
        <ModalInputOfWeight
          onChange={e => setWeight(e.target.value)}
        ></ModalInputOfWeight>
        <ModalParagraphOfSecondInput>
          The time of active participation in sports or other activities with a
          high physical. load:
        </ModalParagraphOfSecondInput>
        <ModalInputOfWeight
          onChange={e => setTimeOfActivity(e.target.value)}
        ></ModalInputOfWeight>
        <ModalDivOfWaterPerDay>
          <ModalParagraphOfWaterPerDay>
            The required amount of water in liters per day:
          </ModalParagraphOfWaterPerDay>
          <ModalParagraphOfLiter>
            {result ? result + ' L' : 0 + ' L'}
          </ModalParagraphOfLiter>
        </ModalDivOfWaterPerDay>
        <ModalParagraphOfInputWillDrink>
          Write down how much water you will drink:
        </ModalParagraphOfInputWillDrink>
        <ModalInputOfWeight
          onChange={e => setUserWater(e.target.value)}
        ></ModalInputOfWeight>
      </ModalDivOfInputs>
      <ModalDivOfBtn>
        <ModalBtn
          onClick={() => {
            handleSave();
            closeModal();
          }}
        >
          Save
        </ModalBtn>
      </ModalDivOfBtn>
    </Modal>
  );
};

export default DailyNormaModal;
