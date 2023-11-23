import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header/header';
import UserLogo from './../UserLogo/UserLogo';
import UserAuth from './../UserAuth/UserAuth';
import { useSelector } from 'react-redux';

const Layout = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <Suspense>
      <div className="container">
        <Header>{token ? <UserLogo /> : <UserAuth />}</Header>
      </div>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
