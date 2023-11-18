import { ToDayWaterListStyle } from 'components/WaterList/ToDayWaterListStyle.js';
import { Title } from 'common/Title/Title.styled.js';

import { ReactComponent as CupWater } from './cupWater.svg';
import { ReactComponent as Edit } from './edit.svg';
import { ReactComponent as Trash } from './trash.svg';

const WaterList = () => {
  return (
    <ToDayWaterListStyle>
      <Title>Today</Title>
      <ul>
        <li className="consumeWater">
          <div className="textWrapper">
            <CupWater />
            <p>
              <span> 200 ml</span>
            </p>
            <p>14:00 PM</p>
          </div>

          <div className="iconWrapper">
            <button>
              <Edit />
            </button>

            <button>
              <Trash />
            </button>
          </div>
        </li>

        <li className="consumeWater">
          <div className="textWrapper">
            <CupWater />
            <p>
              <span> 200 ml</span>
            </p>
            <p>14:00 PM</p>
          </div>

          <div className="iconWrapper">
            <button>
              <Edit />
            </button>

            <button>
              <Trash />
            </button>
          </div>
        </li>

        <li className="consumeWater">
          <div className="textWrapper">
            <CupWater />
            <p>
              <span> 200 ml</span>
            </p>
            <p>14:00 PM</p>
          </div>

          <div className="iconWrapper">
            <button>
              <Edit />
            </button>

            <button>
              <Trash />
            </button>
          </div>
        </li>

        {/* ----------button---------- */}
        <li>
          <button className="addWater"> + Add water</button>
        </li>
      </ul>
    </ToDayWaterListStyle>
  );
};
export default WaterList;
