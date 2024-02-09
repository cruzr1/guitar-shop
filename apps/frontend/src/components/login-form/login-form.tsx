import { FormEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { loginUserAction, signinUserAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/hooks'
import { isPasswordValid, isEmailValid, isNameValid } from '../../helpers';
import { AppRoute, NULL_LENGTH } from '../../const'


type LoginFormProps = {
  isSignin?: boolean
}

export default function LoginForm ({isSignin}: LoginFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const handleSigninFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (isEmailValid(email) && isNameValid(name) && isPasswordValid(password)) {
      dispatch(signinUserAction({ name, email, password}));
    }
  };
  const handleLoginFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (isEmailValid(email) && isPasswordValid(password)) {
      dispatch(loginUserAction({ email, password}));
    }
  };
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isPassVisible, setPassVisible] = useState<boolean>(true);
  return (
    <div className="container">
      <section className="login">
        <h1 className="login__title">{isSignin ? 'Регистрация' : 'Войти'}</h1>
        {!isSignin && <p className="login__text">Hовый пользователь? <Link className="login__link" to={AppRoute.Signin}>Зарегистрируйтесь</Link> прямо сейчас</p>}
        <form
          onSubmit={(evt) => isSignin ? handleSigninFormSubmit(evt) : handleLoginFormSubmit(evt)}
          method="post" action="/"
        >
          <div className="input-login">
            {isSignin &&
              <>
                <label htmlFor="name">Введите имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameRef}
                  onChange={() => setName(nameRef.current?.value ?? '')}
                  autoComplete="off"
                  required
                />
                {name.length === NULL_LENGTH && <p className="input-login__error">Заполните поле</p>}
                {!isNameValid(name) && <p className="input-login__error">Длина имени должна составлять от 1 до 15 символов.</p>}
              </>
            }
          </div>
          <div className="input-login">
            <label htmlFor="email">Введите e-mail</label>
            <input
            type="email"
              id="email"
              name="email"
              ref={emailRef}
              onChange={() => setEmail(emailRef.current?.value ?? '')}
              autoComplete="off"
              required
            />
            {email.length === NULL_LENGTH && <p className="input-login__error">Заполните поле</p>}
            {!isEmailValid(email) && <p className="input-login__error">Должен быть указан валидный e-mail</p>}
          </div>
          <div className="input-login">
            <label htmlFor={`password${isSignin ? '' : 'Login'}`}>{isSignin ? 'Придумайте пароль' : 'Введите пароль'}
            </label>
            <span>
              <input
              type={isPassVisible ? 'text': 'password'}
                placeholder="• • • • • • • • • • • •"
                id={`password${isSignin ? '' : 'Login'}`}
                name="password"
                ref={passwordRef}
                onChange={() => setPassword(passwordRef.current?.value ?? '')}
                autoComplete="off"
                required
              />
              <button className="input-login__button-eye" type="button" onClick={() => setPassVisible(!isPassVisible)}>
                <svg width="14" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-eye"></use>
                </svg>
              </button>
            </span>
            {password.length === NULL_LENGTH && <p className="input-login__error">Заполните поле</p>}
            {!isPasswordValid(password) && <p className="input-login__error">Длина пароля должна составлять от 6 до 12 символов.</p>}
          </div>
          <button
            className="button login__button button--medium"
            type="submit"
          >{isSignin ? 'Зарегистрироваться' : 'Войти'}</button>
        </form>
      </section>
    </div>
  )
}
