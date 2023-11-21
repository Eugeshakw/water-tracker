import { ReactComponent as CupWater } from './icon/cupWater.svg';
import { ReactComponent as Edit } from './icon/edit.svg';
import { ReactComponent as Trash } from './icon/trash.svg';
// import { useState } from 'react';
// import { setOpenModal } from 'redux/modals/Slice';
// import Backdrop from 'components/Backdrop/Backdrop';
// import AmountOfWater from 'components/AmountOfWater/AmountOfWater';

export const ElemToDayList = () => {
  // const [activeModal, setActiveModal] = useState(null);
  // const isOpenModal = useSelector(state => state.modals.isOpenModal);
  // const dispatch = useDispatch();
  // const handleModalOpen = modalType => {
  //   setActiveModal(modalType);
  //   dispatch(setOpenModal(true));
  // };

  return (
    <>
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
      {/* {isOpenModal && (
        <Backdrop>{activeModal === 'edit' && <AmountOfWater />}</Backdrop>
      )} */}
    </>
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
