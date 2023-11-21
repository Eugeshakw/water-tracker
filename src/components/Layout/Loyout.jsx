import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header/header';
import UserLogo from './../UserLogo/UserLogo';
import UserAuth from './../UserAuth/UserAuth';

const Layout = () => {
  const userPawned = true;

  return (
    <Suspense>
      <div className="container">
        <Header>{userPawned ? <UserLogo /> : <UserAuth />}</Header>
        <Outlet />
      </div>
    </Suspense>
  );
};

export default Layout;
