import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { AppRoute } from '../../const'

type BreadcrumbsProps = {
  name?: string,
  isProduct?: boolean
}

export default function Breadcrumbs ({name, isProduct}: BreadcrumbsProps):JSX.Element {
  return (
    <ul className={classNames('breadcrumbs', {'page-content__breadcrumbs': isProduct})}>
      <li key={AppRoute.Login} className="breadcrumbs__item"><NavLink className="link" to={AppRoute.Login}>{isProduct ? 'Главная' : 'Вход'}</NavLink>
      </li>
      <li key={AppRoute.Products} className="breadcrumbs__item"><NavLink className="link" to={AppRoute.Products}>{isProduct ? 'Каталог' : 'Товары'}</NavLink>
      </li>
      {name && <li key={name} className="breadcrumbs__item"><NavLink to='#' className="link">{name}</NavLink>
      </li>}
      {isProduct && <li key={'Товар'} className="breadcrumbs__item"><NavLink  to='#' className="link">Товар</NavLink>
      </li>}
  </ul>
  )
}
