import { ToDayWaterListStyle } from 'components/DailyNorma/WaterList/ToDayWaterListStyle.js';
import { Title } from 'common/Title/Title.styled.js';

import { ReactComponent as ArrowL } from './icon/arrowLeft.svg';
import { ReactComponent as ArrowR } from './icon/arrowRight.svg';

import { ElemToDayList, ElemMonthList } from './ElemWaterList';

const WaterList = () => {
  return (
    <ToDayWaterListStyle>
      <Title>Today</Title>
      <ul className="todayList">
        <ElemToDayList />
        <ElemToDayList />
        <ElemToDayList />
        <ElemToDayList />
        <ElemToDayList />

        {/* ----------button---------- */}
        <li>
          <button className="addWater"> + Add water</button>
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
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
        <ElemMonthList />
      </ul>
    </ToDayWaterListStyle>
  );
};
export default WaterList;
