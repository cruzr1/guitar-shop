import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { updateSortField, updateSortOrder } from '../../store/guitar-list/guitar-list.slice';
import classNames from 'classnames';
import { selectActiveSortField, selectActiveSortOrder } from '../../store/guitar-list/guitar-list.selectors';
import { SortOrder, SortOrderField } from '../../const';

export default function CatalogSort ():JSX.Element {
  const dispatch = useAppDispatch();
  const activeSortField = useAppSelector(selectActiveSortField);
  const activeSortOrder = useAppSelector(selectActiveSortOrder);
  const handlePriceButtonClick = (evt: React.MouseEvent) => {
    evt.preventDefault();

    dispatch(updateSortField(SortOrderField.Price));
  }
  const handleDateButtonClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(updateSortField(SortOrderField.CreatedAt));
  }
  const handleAscButtonClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(updateSortOrder(SortOrder.Asc));
  }
  const handleDescButtonClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(updateSortOrder(SortOrder.Desc));
  }

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button
          className={classNames("catalog-sort__type-button", {"catalog-sort__type-button--active": activeSortField === SortOrderField.CreatedAt})}
            aria-label="по дате"
            onClick={(evt) => handleDateButtonClick(evt)}
          >по дате</button>
        <button
          className={classNames("catalog-sort__type-button", {"catalog-sort__type-button--active": activeSortField === SortOrderField.Price})}
            aria-label="по цене"
            onClick={(evt) => handlePriceButtonClick(evt)}
          >по цене</button>
      </div>
      <div className="catalog-sort__order">
        <button
          className={classNames("catalog-sort__order-button", "catalog-sort__order-button--up", { "catalog-sort__order-button--active": activeSortOrder ===SortOrder.Asc})}
          aria-label="По возрастанию"
          onClick={(evt) => handleAscButtonClick(evt)}
        ></button>
        <button
          className={classNames("catalog-sort__order-button", "catalog-sort__order-button--down", { "catalog-sort__order-button--active": activeSortOrder ===SortOrder.Desc})}
          aria-label="По убыванию"
          onClick={(evt) => handleDescButtonClick(evt)}
        ></button>
      </div>
    </div>
  )
}
