import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { DEFAULT_PAGE_NUMBER, PaginationParams } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectCurrentPageNumber, selectTotalPagesNumber } from '../../store/guitars/guitars.selectors';
import { loadGuitarsAction } from '../../store/api-actions';
import useQuery from '../../hooks/use-query';


export default function Pagination ():JSX.Element {
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector(selectTotalPagesNumber);
  const currentPage = useAppSelector(selectCurrentPageNumber);
  // const nextPage = Math.min(currentPage + PaginationParams.PageNextNumber, totalPages);
  const lastPage = Math.min(currentPage + PaginationParams.PageCount, totalPages);
  const firstPage = lastPage < PaginationParams.LastPageMinimum ? PaginationParams.FirstPageMinimum: Math.min(currentPage, lastPage - PaginationParams.PageCount);
  const isNextDisplay = totalPages > PaginationParams.PageCount;
  const hanleNextCLick = () => {
    dispatch(loadGuitarsAction({page: currentPage + DEFAULT_PAGE_NUMBER}));
  }
  const pageNumbers = [];
  for (let i = firstPage; i <= lastPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination product-list__pagination">
      <ul className="pagination__list">
        {pageNumbers.map((val) => (
          <li key={val} className={classNames('pagination__page', {'pagination__page--active': val === currentPage})}><Link className="link pagination__page-link" to='#'>{val}</Link>
          </li>
        ))}
        {isNextDisplay &&
          <li className="pagination__page pagination__page--next" id="next">
            <Link
                className="link pagination__page-link"
                to='#'
                onClick={() => hanleNextCLick()}
              >Далее</Link>
          </li>
        }
      </ul>
    </div>
  )
}
