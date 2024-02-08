import { GUITARS } from '../../mocks/guitars.mocks'
import CatalogItem from '../../components/catalog-item/catalog-item';

export default function CatalogList (): JSX.Element {
  return (
    <div className="catalog-cards">
      <ul className="catalog-cards__list">
        {GUITARS.map((guitar) => (
          <CatalogItem {...guitar}/>
        ))}
      </ul>
    </div>
  )
}