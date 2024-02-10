import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/hooks';
import { selectEmail } from '../../store/user/user.selectors';

type NavigationListProps = {
  isAuthorised: boolean
};

export default function NavigationList ({isAuthorised}: NavigationListProps): JSX.Element {
  const userEmail = useAppSelector(selectEmail);
  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav__list">
          {!isAuthorised ?
            <>
              <li className="main-nav__item"><Link className="link main-nav__link" to='#'>Каталог</Link>
              </li>
              <li className="main-nav__item"><Link className="link main-nav__link" to='#'>Где купить?</Link>
              </li>
              <li className="main-nav__item"><Link className="link main-nav__link" to='#'>О компании</Link>
              </li> </>:
              <>
              <li className="main-nav__item"><Link className="link main-nav__link" to={AppRoute.Login}>Каталог</Link>
              </li>
              <li className="main-nav__item"><Link className="link main-nav__link" to={AppRoute.Products}>Список товаров</Link>
              </li>
            </>
          }
        </ul>
      </nav>
      <div className="header__container">
        <span className="header__user-name">{userEmail}</span>
        <Link className="header__link" to={AppRoute.Login} aria-label="Перейти в личный кабинет">
          <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
            <use xlinkHref="#icon-account"></use>
          </svg>
          <span className="header__link-text">Вход</span>
        </Link>
      </div>
    </>
  )
}
