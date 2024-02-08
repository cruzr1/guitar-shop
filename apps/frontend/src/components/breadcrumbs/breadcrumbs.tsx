import classNames from 'classnames'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AppRoute } from '../../const'

type BreadcrumbsProps = {
  model?: string,
  isProduct?: boolean
}

export default function Breadcrumbs ({model, isProduct}: BreadcrumbsProps):JSX.Element {
  return (
    <ul className={classNames('breadcrumbs', {'page-content__breadcrumbs': isProduct})}>
      <li className="breadcrumbs__item"><NavLink className="link" to={AppRoute.Login}>{isProduct ? 'Главная' : 'Вход'}</NavLink>
      </li>
      <li className="breadcrumbs__item"><NavLink className="link" to={AppRoute.Products}>{isProduct ? 'Каталог' : 'Товары'}</NavLink>
      </li>
      {model && <li className="breadcrumbs__item"><NavLink to='#' className="link">{model}</NavLink>
      </li>}
      {isProduct && <li className="breadcrumbs__item"><NavLink to='#' className="link">Товар</NavLink>
      </li>}
  </ul>
  )
}
