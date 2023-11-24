import DailyNorma from 'components/DailyNorma/DailyNorma';
import ProgressiveBar from 'components/ProgressiveBar/ProgressiveBar.jsx';
import { ReactComponent as Icon } from './circle.svg';
import {
  Button,
  Container,
  ContentWrapper,
  NormaContainer,
  Wrapper,
  BackImage,
  ConImg,
  DecorateImg,
} from './HomePage.styled';
import WaterList from 'components/DailyNorma/WaterList/WaterList';

import Backdrop from 'components/Backdrop/Backdrop';
import { useDispatch, useSelector } from 'react-redux';

import { setModalType, setOpenModal } from 'redux/modals/Slice';
import AmountOfWater from 'components/AmountOfWater/AmountOfWater';
import DailyNormaModal from 'components/MyDailyNorma/DailyNormaModal';

const HomePage = () => {
  const isOpenModal = useSelector(state => state.modals.isOpenModal);
  const modalType = useSelector(state => state.modals.modalType);
  const dispatch = useDispatch();
  const setActive = text => {
    dispatch(setOpenModal(true));
    dispatch(setModalType(text));
  };
  return (
    <>
      {isOpenModal && modalType === 'DailyNorma' && (
        <Backdrop>
          <DailyNormaModal />
        </Backdrop>
      )}
      {isOpenModal && modalType === 'EditWater' && (
        <Backdrop>
          <AmountOfWater />
        </Backdrop>
      )}

      <div className="container">
        <DecorateImg>
          <Container>
            <NormaContainer>
              <DailyNorma setActive={setActive} />
              <ConImg>
                <BackImage />
              </ConImg>
              <Wrapper>
                <ContentWrapper>
                  <ProgressiveBar />
                </ContentWrapper>
                <ContentWrapper>
                  <Button type="button">
                    <Icon />
                    Add Water
                  </Button>
                </ContentWrapper>
              </Wrapper>
            </NormaContainer>
            <WaterList />
          </Container>
        </DecorateImg>
      </div>
    </>
  );
};

export default HomePage;
