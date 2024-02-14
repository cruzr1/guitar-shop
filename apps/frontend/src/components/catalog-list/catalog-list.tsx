import { useEffect } from 'react';
import FailedLoading from '../failed-loading/failed-loading';
import CatalogItem from '../../components/catalog-item/catalog-item';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loadGuitarsAction } from '../../store/api-actions';
import { selectGuitarsLoadingErrorStatus, selectGuitarsLoadingStatus, selectGuitars, selectCurrentPageNumber, selectGuitarsShouldUpdateStatus } from '../../store/guitars/guitars.selectors';
import { isStatusFulfilled, isStatusPending } from '../../helpers';
import { selectActiveSortField, selectActiveSortOrder, selectGuitarTypeFilter, selectStringsCountFilter } from '../../store/guitar-list/guitar-list.selectors';
import LoadingPage from '../../pages/loading-page/loading-page';


export default function CatalogList (): JSX.Element {
  const dispatch = useAppDispatch();
  const sortByField = useAppSelector(selectActiveSortField);
  const sortByOrder = useAppSelector(selectActiveSortOrder);
  const page = useAppSelector(selectCurrentPageNumber);
  const stringsCount = useAppSelector(selectStringsCountFilter);
  const type = useAppSelector(selectGuitarTypeFilter)
  const shouldUpdate = useAppSelector(selectGuitarsShouldUpdateStatus);
  useEffect(() =>{
    let isMounted = true;
    if (isMounted) {
      dispatch(loadGuitarsAction({type, stringsCount, page, sortByField, sortByOrder}));
    }
    return () => {
      isMounted = false;
    };
  },[dispatch, type, stringsCount, page, sortByField, sortByOrder, shouldUpdate]);
  const guitarList = useAppSelector(selectGuitars);
  const hasError= useAppSelector(selectGuitarsLoadingErrorStatus);
  const guitarLoadingStatus = useAppSelector(selectGuitarsLoadingStatus);
  return (
    <>
      {hasError && <FailedLoading />}
      {isStatusPending(guitarLoadingStatus) && <LoadingPage />}
      {!hasError && isStatusFulfilled(guitarLoadingStatus) &&
        <div className="catalog-cards">
          <ul className="catalog-cards__list">
            {guitarList.map((guitar) => (
              <li className="catalog-item" key={guitar.id}>
                <CatalogItem {...guitar} />
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  )
}
