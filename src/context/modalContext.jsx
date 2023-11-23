import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalType, setOpenModal } from 'redux/modals/Slice';

// Создаем контекст для функции закрытия модального окна
export const ModalContext = createContext(null);

// Создаем компонент-провайдер для контекста
export const ModalProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(state => state.modals.isOpenModal);

  const closeModal = () => {
    dispatch(setOpenModal(!isOpenModal));
    dispatch(setModalType(''));
  };

  return (
    <ModalContext.Provider value={{ closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Функция-хук для использования контекста в компонентах
export const useModal = () => {
  return useContext(ModalContext);
};
