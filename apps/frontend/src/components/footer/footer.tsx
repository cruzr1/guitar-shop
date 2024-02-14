import { Link } from 'react-router-dom';
import { AppRoute, Networks } from '../../const'

const FOOTER_LINKS = [ 'Где купить,', 'Блог', 'Вопрос-ответ', 'Возврат', 'Сервис-центры'];

export default function Footer (): JSX.Element {
  const networks = Object.values(Networks);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo-wrapper"><Link className="footer__logo logo" to={AppRoute.Login}><img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип"/></Link>
            <div className="socials footer__socials">
              <ul className="socials__list">
                {networks.map(
                  ({name, website}) => (
                    <li className="socials-item" key={name}><Link className="socials__link" to={website} aria-label={`Мы в ${name}`}>
                    <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                      <use xlinkHref={`#icon-${name}`}></use>
                    </svg></Link></li>
                  )
                )}
              </ul>
            </div>
          </div>
          <section className="footer__nav-section footer__nav-section--about">
            <h2 className="footer__nav-title footer__nav-title--about">О нас</h2>
            <p className="footer__nav-text footer__nav-text--about">Магазин гитар, музыкальных <br/> инструментов и&nbsp;гитарная мастерская в&nbsp;Санкт-Петербурге.</p>
            <p className="footer__nav-text footer__nav-text--about">Все инструменты проверены, отстроены и&nbsp;доведены до&nbsp;идеала!</p>
          </section>
          <section className="footer__nav-section footer__nav-section--links">
            <h2 className="footer__nav-title footer__nav-title--links">Информация</h2>
            <ul className="footer__nav-list">
              {FOOTER_LINKS.map(
                (link) =>(
                  <li className="footer__nav-list-item" key={link}><Link className="link footer__nav-link" to='#'>{link}</Link></li>
                )
              )}
            </ul>
          </section>
          <section className="footer__nav-section footer__nav-section--contacts">
            <h2 className="footer__nav-title footer__nav-title--contacts">Контакты</h2>
            <p className="footer__nav-text footer__nav-text--address">г. Санкт-Петербург,<br/> м. Невский проспект, ул. Казанская 6.</p><Link className="link footer__nav-link footer__nav-link--phone" to="tel:88125005050">8-812-500-50-50</Link>
            <p className="footer__nav-text footer__nav-text--work-hours-title">Режим работы:<span className="footer__nav-text footer__nav-text--work-hours">с 11:00 до 20:00</span></p>
            <p className="footer__nav-text footer__nav-text--weekends">без выходных</p>
          </section>
        </div>
      </div>
    </footer>
  )
}
