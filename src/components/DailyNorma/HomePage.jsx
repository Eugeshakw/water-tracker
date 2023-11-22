// import DailyNorma from './DailyNorma';
import { useDispatch } from 'react-redux';
import WaterList from './WaterList/WaterList';
import { refreshUserThunk } from 'redux/auth/auth-operations';
import { useEffect } from 'react';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <div className='container'>
      {/* <DailyNorma /> */}
      <WaterList />
    </div>
  );
};
export default HomePage;
