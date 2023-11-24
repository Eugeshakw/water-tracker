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
} from './HomePage.styled';
import WaterList from 'components/DailyNorma/WaterList/WaterList';
import Backdrop from 'components/Backdrop/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import { setModalType, setOpenModal } from 'redux/modals/Slice';
import AmountOfWater from 'components/AmountOfWater/AmountOfWater';
import DailyNormaModal from 'components/MyDailyNorma/DailyNormaModal';
import AddWater from 'components/AddWater/AddWater';
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
      {isOpenModal && modalType === 'AddWater' && (
        <Backdrop>
          <AddWater />
        </Backdrop>
      )}
      <div className="container">
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
                <Button
                  type="button"
                  onClick={() => {
                    setActive('AddWater');
                  }}
                >
                  <Icon />
                  Add Water
                </Button>
              </ContentWrapper>
            </Wrapper>
          </NormaContainer>
          <WaterList setActive={setActive} />
        </Container>
      </div>
    </>
  );
};
export default HomePage;