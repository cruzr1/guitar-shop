
type LoginFormProps = {
  isSignin?: boolean
}

export default function LoginForm ({isSignin}: LoginFormProps): JSX.Element {
  return (
    <div className="container">
      <section className="login">
        <h1 className="login__title">{isSignin ? 'Регистрация' : 'Войти'}</h1>
        {!isSignin && <p className="login__text">Hовый пользователь? <a className="login__link" href="registration.html">Зарегистрируйтесь</a> прямо сейчас</p>}
        <form method="post" action="/">
          <div className="input-login">
            {isSignin &&
              <>
                <label htmlFor="name">Введите имя</label>
                <input type="text" id="name" name="name" autoComplete="off" required />
                <p className="input-login__error">Заполните поле</p>
              </>
            }
          </div>
          <div className="input-login">
            <label htmlFor="email">Введите e-mail</label>
            <input type="email" id="email" name="email" autoComplete="off" required />
            <p className="input-login__error">Заполните поле</p>
          </div>
          <div className="input-login">
            <label htmlFor={`password${isSignin ? '' : 'Login'}`}>{isSignin ? 'Придумайте пароль' : 'Введите пароль'}</label><span>
              <input type="password" placeholder="• • • • • • • • • • • •" id={`password${isSignin ? '' : 'Login'}`} name="password" autoComplete="off" required/>
              <button className="input-login__button-eye" type="button">
                <svg width="14" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-eye"></use>
                </svg>
              </button></span>
            <p className="input-login__error">Заполните поле</p>
          </div>
          <button className="button login__button button--medium" type="submit">{isSignin ? 'Зарегистрироваться' : 'Войти'}</button>
        </form>
      </section>
    </div>
  )
}
