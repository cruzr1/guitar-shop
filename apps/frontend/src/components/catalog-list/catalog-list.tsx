import { useEffect } from 'react';
import FailedLoading from '../failed-loading/failed-loading';
import CatalogItem from '../../components/catalog-item/catalog-item';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loadGuitarsAction } from '../../store/api-actions';
import { selectGuitars, selectGuitarsLoadingErrorStatus, selectGuitarsLoadingStatus } from '../../store/guitars/guitars.selectors';
import { isStatusFulfilled, isStatusPending } from '../../helpers';


export default function CatalogList (): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() =>{
    let isMounted = true;
    if (isMounted) {
      dispatch(loadGuitarsAction({}));
    }
    return () => {
      isMounted = false;
    };
  },[dispatch]);
  const guitarList = useAppSelector(selectGuitars);
  const hasError= useAppSelector(selectGuitarsLoadingErrorStatus);
  const guitarLoadingStatus = useAppSelector(selectGuitarsLoadingStatus);
  return (
    <>
      {hasError && <FailedLoading />}
      {isStatusPending(guitarLoadingStatus) && <FailedLoading />}
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
