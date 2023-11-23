import img from '../DaysGeneralStats/icons/button_svg.svg';
import styled from 'styled-components';
import { useState } from 'react';
import { useModal } from 'context/modalContext';
// import { useDispatch } from 'react-redux';
// import { setOpenModal } from 'redux/modals/Slice';

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
  /* position: absolute;
  top: 50%;
  left: 50%; */
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

const DaysGeneralStats = function ({
  dateOfMonth,
  dailyNorma,
  fullfilmentOfDailyNorma,
  howManyServings,
}) {
  const { closeModal } = useModal();

  return (
    <>
      (
      <div>
        <DivDaysGeneralStats>
          <DateOfMonthGroup>
            <DateOfMonthParagrah>{dateOfMonth}</DateOfMonthParagrah>
            <ButtonClose onClick={closeModal}>
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
      </div>
      )
    </>
  );
};

export default DaysGeneralStats;
