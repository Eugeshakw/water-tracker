import DailyNorma from 'components/DailyNorma/DailyNorma';
import ProgressiveBar from 'components/ProgressiveBar/ProgressiveBar.jsx';
import { ReactComponent as Icon } from './circle.svg';
import { Button } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <DailyNorma />
      <div>
        <ProgressiveBar />

        <Button type="button">
          <Icon />
          Add Water
        </Button>
      </div>
    </>
  );
};

export default HomePage;
