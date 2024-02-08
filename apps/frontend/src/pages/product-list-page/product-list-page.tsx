import CatalogList from '../../components/catalog-list/catalog-list';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import Pagination from '../../components/pagination/pagination';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';


export default function ProductListPage (): JSX.Element {
  return (
    <section className="product-list">
      <div className="container">
        <h1 className="product-list__title">Список товаров</h1>
        <Breadcrumbs />
        <div className="catalog">
          <CatalogFilter />
          <CatalogSort />
          <CatalogList />
        </div>
        <button className="button product-list__button button--red button--big">Добавить новый товар</button>
        <Pagination />
      </div>
    </section>
  )
}
