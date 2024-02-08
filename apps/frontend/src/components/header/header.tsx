import classnames from 'classnames';
import NavigationList from "../navigation-list/navigation-list";

export default function Header ():JSX.Element {
  const isAuthorised = true;
  return (
    <header className={classnames({"header--admin": isAuthorised}, "header")} id="header">
      <div className="container">
        <div className="header__wrapper"><a className="header__logo logo" href="main.html"><img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип"/></a>
          <NavigationList isAuthorised={isAuthorised}/>
        </div>
      </div>
    </header>
  )
}
