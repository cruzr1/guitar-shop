import { PropsWithChildren, ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus} from '../../const';
import { selectUserAuthStatus } from '../../store/user/user.selectors';
import { useAppSelector } from '../../hooks/hooks';
import LoadingPage from '../../pages/loading-page/loading-page';

type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute ({children}: PrivateRouteProps): JSX.Element | ReactNode {
  const authStatus= useAppSelector(selectUserAuthStatus);

  return (
    <>
      {authStatus === AuthStatus.Unknown && <LoadingPage />}
      {authStatus === AuthStatus.NoAuth && <Navigate to={AppRoute.Login} />}
      {authStatus === AuthStatus.Auth && children}
    </>
  );
}
