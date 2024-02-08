import { Helmet } from "react-helmet-async";
import LoginForm from '../../components/login-form/login-form';

export default function RegistrationPage (): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Регистрация — Guitar-shop</title>
      </Helmet>
      <LoginForm isSignin />
    </>
  )
}
