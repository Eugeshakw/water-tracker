import React from 'react';
import {
  BtnOfCancelModalLogOut,
  BtnOfCloseOfLogOutModal,
  BtnOfExit,
  DivOfBtns,
  DivOfHeadingOfLogOutModal,
  HeadingOfLogOutModal,
  LogoutModal,
  ParagraphOfExit,
} from './DeleteModal.styled';
import { useModal } from 'context/modalContext';
import { useDispatch } from 'react-redux';
import { deleteWater, getAllWater, getWaterMonth } from 'redux/water/waterOperations';

const DeleteModal = ({ id }) => {
  const { closeModal } = useModal();

  const dispatch = useDispatch();

  return (
    <>
      <LogoutModal>
        <DivOfHeadingOfLogOutModal>
          <HeadingOfLogOutModal>Delete entry</HeadingOfLogOutModal>
          <BtnOfCloseOfLogOutModal>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#407BFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </BtnOfCloseOfLogOutModal>
        </DivOfHeadingOfLogOutModal>
        <ParagraphOfExit>
          Are you sure you want to delete the entry?
        </ParagraphOfExit>
        <DivOfBtns>
          <BtnOfExit onClick={() => {
            
              dispatch(deleteWater(id));
            }}>
            Delete
          </BtnOfExit>
          <BtnOfCancelModalLogOut onClick={closeModal}>
            Cancel
          </BtnOfCancelModalLogOut>
        </DivOfBtns>
      </LogoutModal>
    </>
  );
};

export default DeleteModal;
