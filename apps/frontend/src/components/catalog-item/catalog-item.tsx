import { Link, generatePath } from 'react-router-dom';
import dayjs from 'dayjs'
import { AppRoute, GuitarNames } from '../../const';
import { GuitarCategoryType, StringsCountType } from '../../types';
import { useAppDispatch } from '../../hooks/hooks';
import { removeGuitarFormAction } from '../../store/api-actions';
import { updateGuitarList } from '../../store/guitars/guitars.slice';
import { setGuitarId } from '../../store/guitar-form/guitar-form.slice';


export type CatalogItemProps = {
  id: string;
  description: string;
  name: string;
  createdAt: Date;
  imageURL: string;
  article: string,
  stringsCount: StringsCountType
  type: GuitarCategoryType;
  price: number;
}

export default function CatalogItem ({id, name, createdAt, imageURL, type, price}: CatalogItemProps):JSX.Element {
  const dispatch = useAppDispatch();
  const itemPath = generatePath(AppRoute.ProductId, {productId: id})
  const createdDate = dayjs(createdAt).format('DD.MM.YYYY');
  const handleDeleteClick = () => {
    dispatch(removeGuitarFormAction(id));
    dispatch(updateGuitarList(true))
  }
  const handleEditHover = () => {
    dispatch(setGuitarId(id));
  }
  const handleEditLeave = () => {
    dispatch(setGuitarId(''));
  }
  return (
    <>
      <div className="catalog-item__data"><img src={imageURL} width="36" height="93" alt="Картинка гитары"/>
        <div className="catalog-item__data-wrapper">
          <Link className="link" to={itemPath}><p className="catalog-item__data-title">{`${GuitarNames[type]} ${name}`}</p></Link>
          <br/>
          <p className="catalog-item__data-date">{`Дата добавления ${createdDate}`}</p>
          <p className="catalog-item__data-price">{`${price.toLocaleString()} ₽`}</p>
        </div>
      </div>
      <div className="catalog-item__buttons">
        <Link
          className="button button--small button--black-border"
          to={AppRoute.EditItem}
          onMouseEnter={() => handleEditHover()}
          onMouseLeave={() => handleEditLeave()}
          aria-label="Редактировать товар"
        >Редактировать</Link>
        <button
          className="button button--small button--black-border"
          type="submit"
          onClick={() => handleDeleteClick()}
          aria-label="Удалить товар"
        >Удалить</button>
      </div>
    </>
  )
}
