import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom';
import LoadingPage from '../../pages/loading-page/loading-page';
import { AppRoute, AuthStatus} from '../../const';
import { AuthStatusType } from '../../types';

type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute ({children}: PrivateRouteProps): JSX.Element {
  const authStatus: AuthStatusType = 'auth';
  return (
    <>
      {authStatus === AuthStatus.Unknown && <LoadingPage />}
      {authStatus === AuthStatus.Auth && children}
      {authStatus === AuthStatus.NoAuth && <Navigate to={AppRoute.Login} />}
    </>
  )
}
