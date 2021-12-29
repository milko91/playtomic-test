import { FC } from 'react';

import { Outlet, Link } from 'react-router-dom';

import { decodeDisplayNameFromJWT } from '../../../common/utils/decodeJWT';
import { useRootStateSelector } from '../../../store/hooks/root-state-selector';

export const Home: FC = () => {
  const authenticatedUser = useRootStateSelector((state) => state.securityManagementModule.user);
  const displayName = decodeDisplayNameFromJWT(authenticatedUser?.accessToken as string);

  return (
    <div className="home">
      <nav className="home__sidebar">
        <div className="home__sidebar-item">
          <i className="fa fa-fw fa-dashboard"></i>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="home__sidebar-item">
          <i className="fa fa-fw fa-cog"></i>
          <Link to="/settings">Settings</Link>
        </div>
      </nav>
      <div className="home__user">{displayName}</div>
      <div className="home__main">
        <Outlet />
      </div>
    </div>
  );
};
