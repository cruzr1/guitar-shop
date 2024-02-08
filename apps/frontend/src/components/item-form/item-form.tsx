import { useNavigate } from 'react-router-dom';
import { AppRoute, GuitarType, STRINGS } from '../../const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs'

type ItemFormProps = {
  isAddForm?: boolean,
}

export default function ItemForm ({isAddForm}: ItemFormProps):JSX.Element {
  const classPrefix = isAddForm ? 'add' : 'edit';
  const model = 'ZX Spectrum';
  const createdAt = '08.02.2024';
  const article ='CLSU3455678';
  const description = ' Plucked stringed instrument. It normally has six strings, a fretted fingerboard, and a soundbox with a pronounced waist. It probably originated in Spain in the early 16th century. By 1800 it was being strung with six single strings; 19th-century innovations gave it its modern form.'
  const price = 27000;
  const itemData = {
    model: 'ZX Spectrum',
    createdAt: '08.02.2024',
    article:'CLSU3455678',
    description: ' Plucked stringed instrument. It normally has six strings, a fretted fingerboard, and a soundbox with a pronounced waist. It probably originated in Spain in the early 16th century. By 1800 it was being strung with six single strings; 19th-century innovations gave it its modern form.',
    price: 27000
  }
  const guitarTypes = Object.values(GuitarType)
  const RequiredFieldComment = ():JSX.Element => <p>Заполните поле</p>;
  const navigate = useNavigate();
  return (
    <section className={`${classPrefix}-item`}>
      <div className="container">
        <h1 className={`${classPrefix}-item__title`}>{isAddForm ? 'Новый товар' : model}</h1>
        <Breadcrumbs model={isAddForm ? 'Новый товар' : model} />
        <form className={`${classPrefix}-item__form`} action="#" method="get">
          <div className={`${classPrefix}-item__form-left`}>
            <div className={`edit-item-image ${classPrefix}-item__form-image`}>
              <div className="edit-item-image__image-wrap">
                {!isAddForm && <img className="edit-item-image__image" src="img/content/add-item-1.png" srcSet="img/content/add-item-1@2x.png 2x" width="133" height="332" alt={isAddForm ? "" : model}/>}
              </div>
              <div className="edit-item-image__btn-wrap">
                <button className="button button--small button--black-border edit-item-image__btn">Добавить
                </button>
                <button className="button button--small button--black-border edit-item-image__btn">Удалить</button>
              </div>
            </div>
            <div className={`input-radio ${classPrefix}-item__form-radio`}><span>{isAddForm ? 'Выберите тип товара' : 'Тип товара'}</span>
              {guitarTypes.map(({name, id}) => (
                <>
                  <input type="radio" id={id} name="item-type" value={id} checked={id==='el-guitar'} key={id} />
                  <label htmlFor={id}>{name}</label>
                </>
              ))}
            </div>
            <div className={`input-radio ${classPrefix}-item__form-radio`}><span>Количество струн</span>
              {STRINGS.map((num) => (
                <>
                  <input type="radio" id={`string-qty-${num}`} name="string-qty" value={num} checked={num === 4} key={num} />
                  <label htmlFor={`string-qty-${num}`}>{num}</label>
                </>
              ))}
            </div>
          </div>
          <div className={`${classPrefix}-item__form-right`}>
            <div className={`custom-input ${classPrefix}-item__form-input`}>
              <label><span>Дата добавления товара</span>
                <input type="text" name="date" value={isAddForm ? "" : createdAt} placeholder="Дата в формате 00.00.0000" readOnly />
              </label>
              <RequiredFieldComment />
            </div>
            <div className={`custom-input ${classPrefix}-item__form-input`}>
              <label><span>{isAddForm ? 'Введите наименование товара' : 'Наименование товара'}</span>
                <input type="text" name="title" value={isAddForm ? "" : model} placeholder="Наименование"/>
              </label>
              <RequiredFieldComment />
            </div>
            <div className={`custom-input ${classPrefix}-item__form-input ${classPrefix}-item__form-input--price ${isAddForm && 'is-placeholder'}`}>
              <label><span>{isAddForm ? 'Введите цену товара' : 'Цена товара'}</span>
                <input type="text" name="price" value={isAddForm ? "" : price} placeholder="Цена в формате 00 000"/>
              </label>
              <RequiredFieldComment />
            </div>
            <div className={`custom-input ${classPrefix}-item__form-input`}>
              <label><span>{isAddForm ? 'Введите артикул товара' : 'Артикул товара'}</span>
                <input type="text" name="sku" value={isAddForm ? "" : article} placeholder="Артикул товара"/>
              </label>
              <RequiredFieldComment />
            </div>
            <div className={`custom-textarea ${classPrefix}-item__form-textarea`}>
              <label><span>{isAddForm ? 'Введите описание товара' : 'Описание товара'}</span>
                <textarea name="description" placeholder="">{isAddForm ? "" : description}</textarea>
              </label>
              <RequiredFieldComment />
            </div>
          </div>
          <div className={`${classPrefix}-item__form-buttons-wrap`}>
            <button className={`button button--small ${classPrefix}-item__form-button`} type="submit">Сохранить изменения</button>
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
}
