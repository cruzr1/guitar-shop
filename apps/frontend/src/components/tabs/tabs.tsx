import { GUITARS } from '../../mocks/guitars.mocks'
import { GuitarType } from '../../const';
import { Link } from 'react-router-dom';

export default function Tabs (): JSX.Element {
  const product = GUITARS[0];
  return (
    <div className="tabs"><Link className="button button--medium tabs__button" to="#">Характеристики</Link><Link className="button button--black-border button--medium tabs__button" to="#">Описание</Link>
      <div className="tabs__content" id="characteristics">
        <table className="tabs__table">
          <tr className="tabs__table-row">
            <td className="tabs__title">Артикул:</td>
            <td className="tabs__value">{product.article}</td>
          </tr>
          <tr className="tabs__table-row">
            <td className="tabs__title">Тип:</td>
            <td className="tabs__value">{GuitarType[product.type].name}</td>
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
