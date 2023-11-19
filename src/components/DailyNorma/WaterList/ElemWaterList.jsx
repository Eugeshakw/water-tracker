import { ReactComponent as CupWater } from './icon/cupWater.svg';
import { ReactComponent as Edit } from './icon/edit.svg';
import { ReactComponent as Trash } from './icon/trash.svg';

export const ElemToDayList = () => {
  return (
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
  );
};

export const ElemMonthList = () => {
  return (
    <li className="monthListItem">
      <div className="day">1</div>
      <p className="percent">75%</p>
    </li>
  );
};
