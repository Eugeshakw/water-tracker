import { ToDayWaterListStyle } from 'components/DailyNorma/WaterList/ToDayWaterListStyle.js';
import { Title } from 'common/Title/Title.styled.js';

import { ReactComponent as ArrowL } from './icon/arrowLeft.svg';
import { ReactComponent as ArrowR } from './icon/arrowRight.svg';

import { ElemToDayList, ElemMonthList } from './ElemWaterList';
import { useSelector } from 'react-redux';
import { useEffect, useDispatch } from 'react';
import { getMonthWater } from 'redux/water/waterApi';


const WaterList = ({ setActive }) => {
  const waterList = useSelector(state => state.water.waters);
  const monthWater = useSelector(state => state.water.monthWaters)
 const dispatch = useDispatch()
 
useEffect(() => {
  dispatch(getMonthWater())
},[dispatch])

  return (
    <ToDayWaterListStyle>
      <Title>Today</Title>
      <ul className="todayList">
        {waterList.map(({ _id, count, time }) => (
          <ElemToDayList
            key={_id}
            id={_id}
            modalId={_id + 1}
            count={count}
            time={time}
            setActive={setActive}
          />
        ))}
        {/* <ElemToDayList />
        <ElemToDayList />
        <ElemToDayList />
        <ElemToDayList />
        <ElemToDayList /> */}
        {/* ----------button---------- */}
        <li>
          <button
            className="addWater"
            onClick={() => {
              setActive('AddWater');
            }}
          >
            + Add water
          </button>
        </li>
      </ul>

      <div className="monthContainer">
        <Title>Month</Title>
        <div className="pagination">
          <button className="arrow">
            <ArrowR />
          </button>
          <p> April</p>
          <button className="arrow">
            <ArrowL />
          </button>
        </div>
      </div>
      <ul className="monthList">
            {monthWater.map(({day, percent}) => (
              
              <ElemMonthList day={day} percent={percent} />
            ))}
      </ul>
    </ToDayWaterListStyle>
  );
};
export default WaterList;
