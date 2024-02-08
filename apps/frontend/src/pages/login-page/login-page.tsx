import { Helmet } from "react-helmet-async";
import LoginForm from '../../components/login-form/login-form';

export default function LoginPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Авторизация — Guitar-shop</title>
      </Helmet>
      <LoginForm />
    </>
  )
}
