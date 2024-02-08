import { CatalogItemProps } from '../components/catalog-item/catalog-item';

export const GUITARS: CatalogItemProps[] = [
  {
    id: '1234-5678',
    model: 'Fendter',
    description: '',
    createdAt: new Date('2024-02-08T03:24:00'),
    imageURL: 'img/content/catalog-product-1.png',
    type: 'Electric',
    article: 'rtyu1234356',
    stringsCount: 4,
    price: 23456
  },
  {
    id: '1234-5679',
    model: 'Fendter',
    description: '',
    createdAt: new Date('2024-02-06T03:24:00'),
    imageURL: 'img/content/catalog-product-1.png',
    type: 'Acoustic',
    article: 'rtyu1234356',
    stringsCount: 12,
    price: 34456
  },
  {
    id: '1234-5688',
    model: 'Fendter',
    description: '',
    createdAt: new Date('2024-02-07T03:24:00'),
    imageURL: 'img/content/catalog-product-1.png',
    type: 'Ukulele',
    article: 'rtyu1234356',
    stringsCount: 7,
    price: 12456
  },
]
