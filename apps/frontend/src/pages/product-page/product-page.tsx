import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Tabs from '../../components/tabs/tabs';
import { GUITARS } from '../../mocks/guitars.mocks'

export default function ProductPage (): JSX.Element {
  const product = GUITARS[0];
  return (
    <div className="container">
        <h1 className="page-content__title title title--bigger">Товар</h1>
        <Breadcrumbs isProduct />
        <div className="product-container"><img className="product-container__img" src={product.imageURL} srcSet={product.imageURL} width="90" height="235" alt={product.model}/>
          <div className="product-container__info-wrapper">
            <h2 className="product-container__title title title--big title--uppercase">{product.model}</h2>
            <br/>
            <br/>
            <Tabs />
          </div>
      </div>
    </div>
  )
}
