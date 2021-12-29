import { FC } from 'react';

import { Navigate } from 'react-router-dom';
import { useRootStateSelector } from '../../store/hooks/root-state-selector';

import { IPrivateRouteProps } from './private-route.props';

export const PrivateRoute: FC<IPrivateRouteProps> = ({ redirectTo, component: RouteComponent }) => {
  const authenticatedUser = useRootStateSelector((state) => state.securityManagementModule.user);

  return authenticatedUser !== null ? <RouteComponent /> : <Navigate to={redirectTo} />;
};
