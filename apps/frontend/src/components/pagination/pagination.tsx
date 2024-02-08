import classNames from 'classnames';
import { PaginationParams } from '../../const';

export default function Pagination ():JSX.Element {
  const totalPages = 2;
  const currentPage = 2;
  const nextPage = Math.min(currentPage + PaginationParams.PageNextNumber, totalPages);
  const lastPage = Math.min(currentPage + PaginationParams.PageCount, totalPages);
  const firstPage = lastPage < PaginationParams.LastPageMinimum ? PaginationParams.FirstPageMinimum: Math.min(currentPage, lastPage - PaginationParams.PageCount);
  const isNextDisplay = totalPages > PaginationParams.PageCount;
  const pageNumbers = [];
  for (let i = firstPage; i <= lastPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination product-list__pagination">
      <ul className="pagination__list">
        {pageNumbers.map((val) => (
          <li key={val} className={classNames('pagination__page', {'pagination__page--active': val === currentPage})}><a className="link pagination__page-link" href={`${val}`}>{val}</a>
          </li>
        ))}
        {isNextDisplay && <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href={`${nextPage}`}>Далее</a>
        </li>}
      </ul>
    </div>
  )
}
