import DailyNorma from 'components/DailyNorma/DailyNorma';
import ProgressiveBar from 'components/ProgressiveBar/ProgressiveBar.jsx';
import { ReactComponent as Icon } from './circle.svg';
import { Button, ContentWrapper, Wrapper } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
