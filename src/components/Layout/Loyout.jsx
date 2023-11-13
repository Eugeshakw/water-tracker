import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header/header';
import UserLogo from './../UserLogo/UserLogo';

const Layout = () => {
  return (
    <Suspense>
      <Header>
        <UserLogo />
      </Header>
      <Outlet />
    </Suspense>
    // авап
  );
};

export default Layout;
