export default function NavigationList (): JSX.Element {
  const isAuthorised = true;
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {isAuthorised ?
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
  )
}
