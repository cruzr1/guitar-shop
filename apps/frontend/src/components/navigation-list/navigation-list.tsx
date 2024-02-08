type NavigationListProps = {
  isAuthorised: boolean
};

export default function NavigationList ({isAuthorised}: NavigationListProps): JSX.Element {
  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav__list">
          {!isAuthorised ?
            <>
              <li className="main-nav__item"><a className="link main-nav__link" href="#">Каталог</a>
              </li>
              <li className="main-nav__item"><a className="link main-nav__link" href="#">Где купить?</a>
              </li>
              <li className="main-nav__item"><a className="link main-nav__link" href="#">О компании</a>
              </li> </>:
              <>
              <li className="main-nav__item"><a className="link main-nav__link" href="main">Каталог</a>
              </li>
              <li className="main-nav__item"><a className="link main-nav__link" href="#">Список товаров</a>
              </li>
            </>
          }
        </ul>
      </nav>
      <div className="header__container">
        <span className="header__user-name">Имя</span>
        <a className="header__link" href="login.html" aria-label="Перейти в личный кабинет">
          <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
            <use xlinkHref="#icon-account"></use>
          </svg>
          <span className="header__link-text">Вход</span>
        </a>
      </div>
    </>
  )
}