import { GUITARS } from '../../mocks/guitars.mocks'
import { GuitarType } from '../../const';

export default function Tabs (): JSX.Element {
  const product = GUITARS[0];
  return (
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
  )
}
