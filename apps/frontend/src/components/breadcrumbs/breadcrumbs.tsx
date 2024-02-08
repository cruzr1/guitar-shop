type BreadcrumbsProps = {
  model: string,
}

export default function Breadcrumbs ({model}: BreadcrumbsProps):JSX.Element {
  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item"><a className="link" href="./main.html">Вход</a>
      </li>
      <li className="breadcrumbs__item"><a className="link">Товары</a>
      </li>
      <li className="breadcrumbs__item"><a className="link">{model}</a>
      </li>
  </ul>

  )
}
