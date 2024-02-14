import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { updateSortField, updateSortOrder } from '../../store/guitar-list/guitar-list.slice';
import classNames from 'classnames';
import { selectActiveSortField, selectActiveSortOrder } from '../../store/guitar-list/guitar-list.selectors';
import { SortOrder, SortOrderField } from '../../const';

export default function CatalogSort ():JSX.Element {
  const dispatch = useAppDispatch();
  const activeSortField = useAppSelector(selectActiveSortField);
  const activeSortOrder = useAppSelector(selectActiveSortOrder);
  const handlePriceButtonClick = () => {
    dispatch(updateSortField(SortOrderField.Price));
  }
  const handleDateButtonClick = () => {
    dispatch(updateSortField(SortOrderField.CreatedAt));
  }
  const handleAscButtonClick = () => {
    dispatch(updateSortOrder(SortOrder.Asc));
  }
  const handleDescButtonClick = () => {
    dispatch(updateSortOrder(SortOrder.Desc));
  }

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button
          className={classNames("catalog-sort__type-button", {"catalog-sort__type-button--active": activeSortField === SortOrderField.CreatedAt})}
            aria-label="по дате"
            onClick={() => handleDateButtonClick()}
          >по дате</button>
        <button
          className={classNames("catalog-sort__type-button", {"catalog-sort__type-button--active": activeSortField === SortOrderField.Price})}
            aria-label="по цене"
            onClick={() => handlePriceButtonClick()}
          >по цене</button>
      </div>
      <div className="catalog-sort__order">
        <button
          className={classNames("catalog-sort__order-button", "catalog-sort__order-button--up", { "catalog-sort__order-button--active": activeSortOrder ===SortOrder.Asc})}
          aria-label="По возрастанию"
          onClick={() => handleAscButtonClick()}
        ></button>
        <button
          className={classNames("catalog-sort__order-button", "catalog-sort__order-button--down", { "catalog-sort__order-button--active": activeSortOrder ===SortOrder.Desc})}
          aria-label="По убыванию"
          onClick={() => handleDescButtonClick()}
        ></button>
      </div>
    </div>
  )
}
