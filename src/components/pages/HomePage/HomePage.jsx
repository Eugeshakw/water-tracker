import DailyNorma from 'components/DailyNorma/DailyNorma';
import ProgressiveBar from 'components/ProgressiveBar/ProgressiveBar.jsx';
import { ReactComponent as Icon } from './circle.svg';
import {
  Button,
  Container,
  ContentWrapper,
  NormaContainer,
  Wrapper,
} from './HomePage.styled';
import WaterList from 'components/DailyNorma/WaterList/WaterList';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { refreshUserThunk } from 'redux/auth/auth-operations';

const HomePage = () => {
  return (
    <Container>
      <NormaContainer>
        <DailyNorma />
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
  );
};

export default HomePage;
