import classNames from 'classnames'

type BreadcrumbsProps = {
  model?: string,
  isProduct?: boolean
}

export default function Breadcrumbs ({model, isProduct}: BreadcrumbsProps):JSX.Element {
  return (
    <ul className={classNames('breadcrumbs', {'page-content__breadcrumbs': isProduct})}>
      <li className="breadcrumbs__item"><a className="link" href="./main.html">{isProduct ? 'Главная' : 'Вход'}</a>
      </li>
      <li className="breadcrumbs__item"><a className="link" href={isProduct ? "./main.html" : ''}>{isProduct ? 'Каталог' : 'Товары'}</a>
      </li>
      {model && <li className="breadcrumbs__item"><a className="link">{model}</a>
      </li>}
      {isProduct && <li className="breadcrumbs__item"><a className="link">Товар</a>
      </li>}
  </ul>
  )
}
