import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as CupWater } from './icon/cupWater.svg';
import { ReactComponent as Edit } from './icon/edit.svg';
import { ReactComponent as Trash } from './icon/trash.svg';
import { setModalType, setOpenModal } from 'redux/modals/Slice';
// import { useState } from 'react';
// import { setOpenModal } from 'redux/modals/Slice';
// import Backdrop from 'components/Backdrop/Backdrop';
// import AmountOfWater from 'components/AmountOfWater/AmountOfWater';

export const ElemToDayList = () => {
  const modalType = useSelector(state => state.modals.modalType);
  const dispatch = useDispatch();

  const handleOpen = () => {
    console.log(modalType);
    dispatch(setModalType('EditWater'));
    dispatch(setOpenModal(true));
  };

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
          <button onClick={handleOpen}>
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
