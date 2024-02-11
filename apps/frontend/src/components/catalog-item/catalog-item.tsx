import { Link, generatePath } from 'react-router-dom';
import { AppRoute, GuitarCategory, STRINGS } from '../../const';

export type CatalogItemProps = {
  id: string;
  description: string;
  name: string;
  createdAt: Date;
  imageURL: string;
  article: string,
  stringsCount: typeof STRINGS[number]
  type: keyof typeof GuitarCategory;
  price: number;
}

export default function CatalogItem ({id, name, createdAt, imageURL, type, price}: CatalogItemProps):JSX.Element {
  const itemPath = generatePath(AppRoute.ProductId, {productId: id})
  return (
    <>
      <div className="catalog-item__data"><img src={imageURL} width="36" height="93" alt="Картинка гитары"/>
        <div className="catalog-item__data-wrapper">
          <Link className="link" to={itemPath}><p className="catalog-item__data-title">{`${GuitarCategory[type].name} ${name}`}</p></Link>
          <br/>
          <p className="catalog-item__data-date">{`Дата добавления ${createdAt.toLocaleDateString()}`}</p>
          <p className="catalog-item__data-price">{`${price} ₽`}</p>
        </div>
      </div>
      <div className="catalog-item__buttons"><Link className="button button--small button--black-border" to={AppRoute.EditItem} aria-label="Редактировать товар">Редактировать</Link>
        <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
      </div>
    </>
  )
}
