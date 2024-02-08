import classnames from 'classnames';
import { Link } from 'react-router-dom';
import NavigationList from "../navigation-list/navigation-list";
import { AppRoute } from '../../const';

export default function Header ():JSX.Element {
  const isAuthorised = true;
  return (
    <header className={classnames({"header--admin": isAuthorised}, "header")} id="header">
      <div className="container">
        <div className="header__wrapper"><Link className="header__logo logo" to={AppRoute.Login}><img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип"/></Link>
          <NavigationList isAuthorised={isAuthorised}/>
        </div>
      </div>
    </header>
  )
}
