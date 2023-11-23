import { Wrapper } from './DailyNorma.styled';

const DailyNorma = ({ setActive }) => {
  const handleModalOpen = () => {
    setActive('DailyNorma');
  };

  return (
    <Wrapper>
      <p>My daily norma</p>

      <div>
        <span>1.5 L</span>
        <button type="button" onClick={handleModalOpen}>
          Edit
        </button>
      </div>
    </Wrapper>
  );
};

export default DailyNorma;
