import { StringsCountType } from "../../types";
import { GuitarType } from '../../const';

export type CatalogItemProps = {
  id: string;
  model: string;
  description: string;
  createdAt: Date;
  imageURL: string;
  type: keyof typeof GuitarType;
  article: string;
  stringsCount: StringsCountType;
  price: number;
}

export default function CatalogItem ({model, description, createdAt, imageURL, type, article, stringsCount, price}: CatalogItemProps):JSX.Element {
  return (
    <li className="catalog-item">
      <div className="catalog-item__data"><img src={imageURL} width="36" height="93" alt="Картинка гитары"/>
        <div className="catalog-item__data-wrapper">
          <a className="link" href="./product.html"><p className="catalog-item__data-title">{`${GuitarType[type].name} ${model}`}</p></a>
          <br/>
          <p className="catalog-item__data-date">{`Дата добавления ${createdAt.toLocaleDateString()}`}</p>
          <p className="catalog-item__data-price">{`${price} ₽`}</p>
        </div>
      </div>
      <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
        <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
      </div>
    </li>
  )
}
