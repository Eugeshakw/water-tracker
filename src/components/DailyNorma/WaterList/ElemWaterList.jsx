import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as CupWater } from './icon/cupWater.svg';
import { ReactComponent as Edit } from './icon/edit.svg';
import { ReactComponent as Trash } from './icon/trash.svg';
import { setModalType, setOpenModal } from 'redux/modals/Slice';
import Backdrop from 'components/Backdrop/Backdrop';
import DeleteModal from './DeleteModal/DeleteModal';

// import AmountOfWater from 'components/AmountOfWater/AmountOfWater';

export const ElemToDayList = ({ modalId, id, count, time, handleDelete }) => {
  console.log(id);
  const modalType = useSelector(state => state.modals.modalType);
  const dispatch = useDispatch();
  const isOpenModal = useSelector(state => state.modals.isOpenModal);

  const setActive = text => {
    dispatch(setOpenModal(true));
    dispatch(setModalType(text));
  };

  const handleOpen = () => {
    dispatch(setModalType('EditWater'));
    dispatch(setOpenModal(true));
  };

  return (
    <>
      {isOpenModal && modalType === modalId && (
        <Backdrop>
          <DeleteModal handleDelete={handleDelete} id={id} />
        </Backdrop>
      )}

      {/* {isOpenModal && modalType === modalId && (
        <Backdrop>
          <AmountOfWater />
        </Backdrop>
      )} */}
      <li className="consumeWater">
        <div className="textWrapper">
          <CupWater />
          <p>
            <span> {count} ml</span>
          </p>
          <p>{time} PM</p>
        </div>

        <div className="iconWrapper">
          <button onClick={handleOpen}>
            <Edit />
          </button>

          <button type="button" onClick={() => setActive(modalId)}>
            <Trash />
          </button>
        </div>
      </li>
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
