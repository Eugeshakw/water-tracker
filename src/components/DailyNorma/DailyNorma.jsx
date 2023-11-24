import { useSelector } from 'react-redux';
import { Wrapper } from './DailyNorma.styled';

const DailyNorma = ({ setActive }) => {
  const handleModalOpen = () => {
    setActive('DailyNorma');
  };

  const waterRate = useSelector(state => state.auth.user.waterRate);

  console.log(waterRate);

  return (
    <Wrapper>
      <p>My daily norma</p>

      <div>
        <span>{waterRate ? waterRate / 1000 : 0} L</span>
        <button type="button" onClick={handleModalOpen}>
          Edit
        </button>
      </div>
    </Wrapper>
  );
};

export default DailyNorma;
