import { CatalogItemProps } from '../components/catalog-item/catalog-item';

export const GUITARS: CatalogItemProps[] = [
  {
    id: '1234-5678',
    model: 'Fendter',
    description: 'The remastered X Series is made to play. The acoustic-electric GPC-X2E Cocobolo features a satin-finished spruce top with an elegant abalone pattern rosette and eye-catching cocobolo pattern high-pressure laminate (HPL) back and sides for added durability and looks, without sacrificing that classic Martin sound.',
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
    description: 'The incredible Squier Classic Vibe series is well-known for its vintage accuracy and value for money. The Squier Limited Edition Classic Vibe 60s Custom Telecaster Electric Guitar in Satin Dakota Red is no exception. ',
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
    description: 'Underneath the bright, vibrant colours of the Mahalo Rainbow series ukuleles lies a seriously affordable yet easy-to-play instrument. Perfect for beginners and young ones, find the perfect colour then start playing!',
    createdAt: new Date('2024-02-07T03:24:00'),
    imageURL: 'img/content/catalog-product-1.png',
    type: 'Ukulele',
    article: 'rtyu1234356',
    stringsCount: 7,
    price: 12456
  },
]
