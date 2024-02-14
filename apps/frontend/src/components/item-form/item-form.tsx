import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AppRoute, GuitarNames, STRINGS, EmptyItem } from '../../const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs'
import { selectGuitarItem } from '../../store/guitars/guitars.selectors';
import { GuitarCategoryType } from '../../types';
import { Fragment, useState } from 'react';
import { StringsCountType } from '@guitar-shop/types';
import { postGuitarFormAction, updateGuitarFormAction } from '../../store/api-actions';
import ErrorPage from '../../pages/error-page/error-page';

type ItemFormProps = {
  isAddForm?: boolean,
}

export default function ItemForm ({isAddForm}: ItemFormProps):JSX.Element {
  const classPrefix = isAddForm ? 'add' : 'edit';
  const dispatch = useAppDispatch();
  const item = isAddForm ? EmptyItem : useAppSelector(selectGuitarItem);
  if (item) {
    const [type, setType] = useState<GuitarCategoryType>(item.type);
    const [stringsCount, setStringsCount] = useState<StringsCountType>(item.stringsCount);
    const [name, setName] = useState<string>(item.name);
    const [createdAt, setCreatedAt] = useState<Date | null>(new Date(item.createdAt));
    const [price, setPrice] = useState<number | string>(item.price);
    const [article, setArticle] = useState<string>(item.article);
    const [description, setDescription] = useState<string>(item.description);
    const RequiredFieldComment = ():JSX.Element => <p>Заполните поле</p>;
    const navigate = useNavigate();
    const handleFormSubmit = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      evt.preventDefault();
      if (isAddForm) {
        dispatch(postGuitarFormAction({
          name,
          description,
          imageURL: item.imageURL,
          type,
          article,
          price: Number(price),
          stringsCount
        }))
        navigate(AppRoute.Products);
      } else {
        dispatch(updateGuitarFormAction({
          id: item.id,
          createdAt: createdAt as Date,
          name,
          description,
          imageURL: item.imageURL,
          type,
          article,
          price: Number(price),
          stringsCount
        }))
        navigate(AppRoute.Products);
      }
    }
    return (
      <section className={`${classPrefix}-item`}>
        <div className="container">
          <h1 className={`${classPrefix}-item__title`}>{isAddForm ? 'Новый товар' : name}</h1>
          <Breadcrumbs name={isAddForm ? 'Новый товар' : name} />
          <form className={`${classPrefix}-item__form`} action="#" method="get">
            <div className={`${classPrefix}-item__form-left`}>
              <div className={`edit-item-image ${classPrefix}-item__form-image`}>
                <div className="edit-item-image__image-wrap">
                  {!isAddForm && <img className="edit-item-image__image" src="img/content/add-item-1.png" srcSet="img/content/add-item-1@2x.png 2x" width="133" height="332" alt={name}/>}
                </div>
                <div className="edit-item-image__btn-wrap">
                  <button
                    className="button button--small button--black-border edit-item-image__btn"
                  >Добавить
                  </button>
                  <button className="button button--small button--black-border edit-item-image__btn">Удалить</button>
                </div>
              </div>
              <div className={`input-radio ${classPrefix}-item__form-radio`}><span>{isAddForm ? 'Выберите тип товара' : 'Тип товара'}</span>
                {Object.entries(GuitarNames).map(([id, name]) => (
                  <Fragment key={id}>
                    <input
                      type="radio"
                      id={id}
                      name="item-type"
                      value={id}
                      onChange={() => setType(id as GuitarCategoryType)}
                      checked={id===type}
                    />
                    <label htmlFor={id}>{name}</label>
                  </Fragment>
                ))}
              </div>
              <div className={`input-radio ${classPrefix}-item__form-radio`}><span>Количество струн</span>
                {STRINGS.map((num) => (
                  <Fragment key={num}>
                    <input
                      type="radio"
                      id={`string-qty-${num}`}
                      name="string-qty"
                      value={num}
                      onChange={() => setStringsCount(num)}
                      checked={num === stringsCount}
                    />
                    <label htmlFor={`string-qty-${num}`}>{num}</label>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className={`${classPrefix}-item__form-right`}>
              <div className={`custom-input ${classPrefix}-item__form-input`}>
                <label><span>Дата добавления товара</span>
                  <DatePicker
                    selected={createdAt}
                    onChange={(date) => setCreatedAt(date)}
                    dateFormat='dd.MM.YYYY'
                  />
                </label>
                <RequiredFieldComment />
              </div>
              <div className={`custom-input ${classPrefix}-item__form-input`}>
                <label><span>{isAddForm ? 'Введите наименование товара' : 'Наименование товара'}</span>
                  <input
                    type="text"
                    name="title"
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                    placeholder="Наименование"
                  />
                </label>
                <RequiredFieldComment />
              </div>
              <div className={`custom-input ${classPrefix}-item__form-input ${classPrefix}-item__form-input--price ${isAddForm && 'is-placeholder'}`}>
                <label><span>{isAddForm ? 'Введите цену товара' : 'Цена товара'}</span>
                  <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={(evt) => setPrice(evt.target.value.replace(/[^0-9]/gm,''))}
                    onBlur={(evt) =>setPrice(parseInt(evt.target.value, 10) || 0)}
                    placeholder="Цена в формате 00 000"
                  />
                </label>
                <RequiredFieldComment />
              </div>
              <div className={`custom-input ${classPrefix}-item__form-input`}>
                <label><span>{isAddForm ? 'Введите артикул товара' : 'Артикул товара'}</span>
                  <input
                    type="text"
                    name="sku"
                    value={article}
                    onChange={(evt) => setArticle(evt.target.value)}
                    placeholder="Артикул товара"
                  />
                </label>
                <RequiredFieldComment />
              </div>
              <div className={`custom-textarea ${classPrefix}-item__form-textarea`}>
                <label><span>{isAddForm ? 'Введите описание товара' : 'Описание товара'}</span>
                  <textarea
                    name="description"
                    placeholder=""
                    value={description}
                    onChange={(evt) => setDescription(evt.target.value)}
                  ></textarea>
                </label>
                <RequiredFieldComment />
              </div>
            </div>
            <div className={`${classPrefix}-item__form-buttons-wrap`}>
              <button
                className={`button button--small ${classPrefix}-item__form-button`} type="submit"
                onClick={(evt:React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleFormSubmit(evt)}
              >Сохранить изменения</button>
              <button
                className={`button button--small ${classPrefix}-item__form-button`}
                type="button"
                onClick={() => navigate(AppRoute.Products)}
              >Вернуться к списку товаров</button>
            </div>
          </form>
        </div>
      </section>
    )
  } else {
    return <ErrorPage />
  }
}
