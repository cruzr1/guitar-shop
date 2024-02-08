import { GuitarType, STRINGS } from '../../const';

export type CatalogItemProps = {
  id: string;
  description: string;
  model: string;
  createdAt: Date;
  imageURL: string;
  article: string,
  stringsCount: typeof STRINGS[number]
  type: keyof typeof GuitarType;
  price: number;
}

export default function CatalogItem ({model, createdAt, imageURL, type, price}: CatalogItemProps):JSX.Element {
  return (
    <>
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
    </>
  )
}
