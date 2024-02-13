import { GUITAR_CATEGORIES, GuitarNames, STRINGS } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectGuitarTypeFilter, selectStringsCountFilter } from '../../store/guitar-list/guitar-list.selectors';
import { resetFilter, updateGuitarTypeFilter, updateStringsCountFilter } from '../../store/guitar-list/guitar-list.slice';
import { GuitarCategoryType, StringsCountType } from '../../types';

export default function CatalogFilter ():JSX.Element {
  const dispatch = useAppDispatch();
  const guitarTypes: GuitarCategoryType[] = useAppSelector(selectGuitarTypeFilter);
  const stringsCount: StringsCountType[] = useAppSelector(selectStringsCountFilter);
  const handleGuitarTypeClick = (category: GuitarCategoryType) => {
    dispatch(updateGuitarTypeFilter(category))
  }
  const handleStringsCountClick = (num: StringsCountType) => {
    dispatch(updateStringsCountFilter(num))
  }
  const handleResetFilter = () => {
    dispatch(resetFilter())
  }
  return (
    <form className="catalog-filter" action="#" method="post">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        {GUITAR_CATEGORIES.map((category: GuitarCategoryType) => (
          <div className="form-checkbox catalog-filter__block-item" key={category}>
            <input
              className="visually-hidden"
              type="checkbox" id={category}
              name={category}
              onClick={() => handleGuitarTypeClick(category)}
              checked={guitarTypes.includes(category)}
            />
            <label htmlFor={category}>{GuitarNames[category]}</label>
          </div>
        ))}
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        {STRINGS.map((num) => (
          <div className="form-checkbox catalog-filter__block-item" key={num}>
            <input
              className="visually-hidden"
              type="checkbox"
              id={`${num}-strings`}
              name={`${num}-strings`}
              onClick={() => handleStringsCountClick(num)}
              checked={stringsCount.includes(num)}
            />
            <label htmlFor={`${num}-strings`}>{num}</label>
        </div>
        ))}
      </fieldset>
      <button
        className="catalog-filter__reset-btn button button--black-border button--medium"
        onClick={() => handleResetFilter()}
        type="reset"
      >Очистить</button>
    </form>
  )
}
