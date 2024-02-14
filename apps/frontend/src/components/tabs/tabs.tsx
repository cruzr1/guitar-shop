import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import { GuitarNames } from '../../const';
import { GuitarCategoryType, StringsCountType } from '../../types';

type TabsProps = {
  article: string,
  type: GuitarCategoryType,
  stringsCount: StringsCountType,
  description: string
}

export default function Tabs ({article, type, stringsCount, description}: TabsProps): JSX.Element {

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
          <tbody>
            <tr className="tabs__table-row">
              <td className="tabs__title">Артикул:</td>
              <td className="tabs__value">{article}</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Тип:</td>
              <td className="tabs__value">{GuitarNames[type]}</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Количество струн:</td>
              <td className="tabs__value">{stringsCount} струнная</td>
            </tr>
          </tbody>
        </table>
        <p className={classNames('tabs__product-description', {'hidden': isSummary})}>{description}</p>
      </div>
    </div>
  )
}
