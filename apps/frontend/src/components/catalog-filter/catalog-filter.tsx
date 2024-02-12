import { GuitarCategory, STRINGS } from '../../const';

export default function CatalogFilter ():JSX.Element {
  return (
    <form className="catalog-filter" action="#" method="post">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        {Object.values(GuitarCategory).map(({filterId}) => (
          <div className="form-checkbox catalog-filter__block-item" key={filterId}>
            <input className="visually-hidden" type="checkbox" id={filterId} name={filterId} checked={filterId !== 'acoustic'} />
            <label htmlFor={filterId}>{}</label>
          </div>
        ))}
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        {STRINGS.map((num) => (
          <div className="form-checkbox catalog-filter__block-item" key={num}>
            <input className="visually-hidden" type="checkbox" id={`${num}-strings`} name={`${num}-strings`} checked={[4, 6].includes(num)} />
            <label htmlFor={`${num}-strings`}>{num}</label>
        </div>
        ))}
      </fieldset>
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
    </form>
  )
}
