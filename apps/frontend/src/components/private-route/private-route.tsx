import { PropsWithChildren, ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus} from '../../const';
import { AuthStatusType } from '../../types';

type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute ({children}: PrivateRouteProps): JSX.Element | ReactNode {
  const authStatus:AuthStatusType = 'auth';

  return (
    authStatus === 'auth' ?
      children :
      <Navigate to={AppRoute.Login} />
  );
}
