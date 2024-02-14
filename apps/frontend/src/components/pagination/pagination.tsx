import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { DEFAULT_PAGE_NUMBER } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectCurrentPageNumber, selectTotalPagesNumber } from '../../store/guitars/guitars.selectors';
import { updateCurrentPageNumber } from '../../store/guitars/guitars.slice';


export default function Pagination ():JSX.Element {
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector(selectTotalPagesNumber);
  const currentPage = useAppSelector(selectCurrentPageNumber);
  const firstPage = Math.max(currentPage - DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_NUMBER);
  const lastPage = Math.min(currentPage + DEFAULT_PAGE_NUMBER, totalPages)
  const isNextDisplay = totalPages > currentPage;
  const isBackDisplay = currentPage > DEFAULT_PAGE_NUMBER;
  const handlePageCLick = (val: number) => {
    const newPage = val >= DEFAULT_PAGE_NUMBER && val <= totalPages ? val : currentPage;
    dispatch(updateCurrentPageNumber(newPage));
  }
  const pageNumbers = [];
  for (let i = firstPage; i <= lastPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination product-list__pagination">
      <ul className="pagination__list">
      {isBackDisplay &&
          <li className="pagination__page pagination__page--next" id="back">
            <Link
                className="link pagination__page-link"
                to='#'
                onClick={() => handlePageCLick(currentPage - DEFAULT_PAGE_NUMBER)}
              >Назад</Link>
          </li>
        }
        {pageNumbers.map((val) => (
          <li key={val} className={classNames('pagination__page', {'pagination__page--active': val === currentPage})}>
            <Link
              className="link pagination__page-link"
              onClick={() => handlePageCLick(val)}
              to='#'
            >{val}</Link>
          </li>
        ))}
        {isNextDisplay &&
          <li className="pagination__page pagination__page--next" id="next">
            <Link
                className="link pagination__page-link"
                to='#'
                onClick={() => handlePageCLick(currentPage + DEFAULT_PAGE_NUMBER)}
              >Далее</Link>
          </li>
        }
      </ul>
    </div>
  )
}
