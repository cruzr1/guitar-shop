import { useNavigate } from "react-router-dom";
import CatalogList from '../../components/catalog-list/catalog-list';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import Pagination from '../../components/pagination/pagination';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { AppRoute } from '../../const';


export default function ProductListPage (): JSX.Element {
  const navigate = useNavigate();
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
        <button
          className="button product-list__button button--red button--big"
          onClick={() => navigate(AppRoute.AddItem)}
        >Добавить новый товар</button>
        <Pagination />
      </div>
    </section>
  )
}
