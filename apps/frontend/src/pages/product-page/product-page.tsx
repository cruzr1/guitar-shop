import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs'
import { GUITARS } from '../../mocks/guitars.mocks'
import { GuitarType } from '../../const';

export default function ProductPage (): JSX.Element {
  const product = GUITARS[0];
  return (
    <div className="container">
        <h1 className="page-content__title title title--bigger">Товар</h1>
        <Breadcrumbs isProduct />
        <div className="product-container"><img className="product-container__img" src={product.imageURL} srcSet={product.imageURL} width="90" height="235" alt={product.model}/>
          <div className="product-container__info-wrapper">
            <h2 className="product-container__title title title--big title--uppercase">{product.model}</h2>
            <br/>
            <br/>
            <div className="tabs"><a className="button button--medium tabs__button" href="#characteristics">Характеристики</a><a className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
              <div className="tabs__content" id="characteristics">
                <table className="tabs__table">
                  <tr className="tabs__table-row">
                    <td className="tabs__title">Артикул:</td>
                    <td className="tabs__value">{product.article}</td>
                  </tr>
                  <tr className="tabs__table-row">
                    <td className="tabs__title">Тип:</td>
                    <td className="tabs__value">{GuitarType[product.type]}</td>
                  </tr>
                  <tr className="tabs__table-row">
                    <td className="tabs__title">Количество струн:</td>
                    <td className="tabs__value">{product.stringsCount} струнная</td>
                  </tr>
                </table>
                <p className="tabs__product-description hidden">{product.description}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
