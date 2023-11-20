import React, { useEffect } from 'react';
import css from './Backdrop.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModal } from 'redux/modals/Slice.js';

const Backdrop = ({ children }) => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(state => state.modals.isOpenModal);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        dispatch(setOpenModal(false));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isOpenModal]);

  const handleClose = e => {
    if (e.target.id === 'backdrop') {
      dispatch(setOpenModal(false));
    }
  };

  return (
    isOpenModal && (
      <div id="backdrop" className={css.backdrop} onClick={handleClose}>
        {children}
      </div>
    )
  );
};

export default Backdrop;
