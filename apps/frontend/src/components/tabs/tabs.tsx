import { GUITARS } from '../../mocks/guitars.mocks'
import { GuitarCategory } from '../../const';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

export default function Tabs (): JSX.Element {
  const product = GUITARS[0];
  const [isSummary, setSummary] = useState<boolean>(true);
  return (
    <div className="tabs">
      <Link
        className={classNames('button', 'button--medium', 'tabs__button', {'button--black-border': !isSummary})}
        to="#"
        onClick={() => setSummary(true)}
      >Характеристики</Link>
      <Link
        className={classNames('button', 'button--medium', 'tabs__button', {'button--black-border': isSummary})}
        to="#"
        onClick={() => setSummary(false)}
      >Описание</Link>
      <div className="tabs__content" id="characteristics">
        <table className={classNames('tabs__table', {'hidden': !isSummary})}>
          <tr className="tabs__table-row">
            <td className="tabs__title">Артикул:</td>
            <td className="tabs__value">{product.article}</td>
          </tr>
          <tr className="tabs__table-row">
            <td className="tabs__title">Тип:</td>
            <td className="tabs__value">{GuitarCategory[product.type].name}</td>
          </tr>
          <tr className="tabs__table-row">
            <td className="tabs__title">Количество струн:</td>
            <td className="tabs__value">{product.stringsCount} струнная</td>
          </tr>
        </table>
        <p className={classNames('tabs__product-description', {'hidden': isSummary})}>{product.description}</p>
      </div>
    </div>
  )
}
